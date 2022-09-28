<template>
  <div class="rbt-bank">
    <div class="r-panel">
      <div class="icon">
        <img src="../../../assets/img/RBT.png" alt="">
      </div>
      <div class="rbt-info">
        <div class="name">我的RBT余额</div>
        <div class="data">
          {{RBT}}RBT
        </div>
      </div>
      <div class="rbt-value">
        <div class="name">
          价值 (BTC)
        </div>
        <div class="data">
          {{ (RBT/btcPrice).toFixed(2)|formatNumber }}
           <span class="btc-value">≈$ {{RBT*0.4}}</span>
        </div>
      </div>
      <div class="stake-btn"  @click="dialogVisible=true">
        STAKE
      </div>
    </div>
    <RainbowPanel class="rainCard-box">

      <template v-slot:name>
        <div class="bank-panel-header">
          <span>我的RBT资产</span>
          <span class="erc-info erc-info-r">ERC20</span>
        </div>
      </template>
      <template v-slot:content>

        <div class="pledge">
          <el-table
              :data="accountData"
              border
              v-loading="isLoadingT"
              align="center"
              show-summary>
            <el-table-column
                prop="name"
                label="类型"
            >
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column
                prop="available"
                label="可用RBT"
            >
              <div slot-scope="scope">
                {{ parseFloat(scope.row.available) |formatNumberTo }}
              </div>
            </el-table-column>
            <el-table-column
                prop="waitExtract"
                label="待提取RBT"
            >
              <div slot-scope="scope">
                {{ parseFloat(scope.row.waitExtract) |formatNumberTo }}
              </div>
            </el-table-column>
            <el-table-column
                prop="locked"
                label="锁仓中RBT"
            >
              <div slot-scope="scope">
                {{ parseFloat(scope.row.locked) |formatNumberTo }}
              </div>
            </el-table-column>
          </el-table>
        </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="rbt-deposit">
      <template v-slot:name>
        <div style="display: flex;justify-content: space-between;">
          <span style="font-size: 18px;">我的RBT-deposit
            <span class="erc-info">ERC721</span>
          </span>
          <el-button @click="isShowRecord = true" class="button-view"
                     size="mini">
            已过期
          </el-button>
        </div>
      </template>
      <template v-slot:content>
        <!-- <el-table :data="bankTokenArr"
                  v-loading="isLoadingT2"
                  stripe>
          <el-table-column label="令牌编号" align="center">
            <template slot-scope="scope">
              <div class="idx">{{ scope.row.tokenId }}</div>
            </template>
          </el-table-column>
          <el-table-column
              prop="depositor"
              label="初始生成者"
          >
          </el-table-column>
          <el-table-column label="质押周期">
            <template slot-scope="scope">
              <span>{{ scope.row.month > 0 ? scope.row.month + '个月' : '活期' }}</span>
            </template>
          </el-table-column>
          <el-table-column
              label="生成时间">
            <div slot-scope="scope">
              {{ new Date(scope.row.created_at) }}
            </div>
          </el-table-column>
          <el-table-column
              label="到期时间">
            <div slot-scope="scope">
              {{ new Date(scope.row.updated_at )  }}
            </div>
          </el-table-column>
          <el-table-column
              prop="mortgageAmount"
              label="包含RBT数量"
          >
            <div slot-scope="scope">
              {{ scope.row.amount |formatNumberTo }}
            </div>
          </el-table-column>
          <el-table-column
              prop="usedAmount"
              label="生成社区治理令牌总额度"
          >
            <template slot="header">
              <div style="text-align: center">
                生成社区<br/>治理令牌总额度
              </div>
            </template>
            <div slot-scope="scope">
              {{ scope.row.usedAmount |formatNumberTo }}
            </div>
          </el-table-column>

          <el-table-column label="取款">
            <template slot-scope="scope">
              <el-button size="mini" @click="release(scope.row)" class="button1">取款</el-button>
            </template>
          </el-table-column>
        </el-table> -->
        <template v-if="bankTokenArr.length>0&& updateTable">
          <div v-for="item in bankTokenArr" :key="item.index">
            <TableItem :tableData="item" operateRName="取款" @operateRClick="operateRClick"/>
          </div>
        </template>
      </template>
    </RainbowPanel>
    <el-dialog
        title="质押"
        :visible.sync="dialogVisible"
        class="dialog"
        width="380px"
    >
      <div class="line">
        <strong>质押类型</strong>
        <el-select v-model="chooseMonth" @change="monthChange" placeholder="请选择质押月份" size="mini" class="select">
          <el-option
              v-for="item in monthsArr"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="line"><strong>质押资产</strong> <span></span></div>
      <div class="line"><span>我的RBT</span> <span>Balance: {{RBT}} RBT</span></div>
      <div class="input-box">
        <el-input class="input2" :class="{'active':subAmount[0]>0}" size="small" v-model="amount"></el-input>
        <el-button @click="setMax(0)">MAX</el-button>
      </div>
      <!-- <div class="line"><span>种子轮兑换矿池：</span> <span>Balance:  {{ balanceArr[1] ? balanceArr[1] : 0 | formatNumberTo }}  RBT</span>
      </div>
      <div class="input-box">
        <el-input class="input2" :class="{'active':subAmount[1]>0}" size="small" v-model="subAmount[1]"></el-input>
        <el-button @click="setMax(1)">MAX</el-button>
      </div>
      <div class="line"><span>共识挖矿矿池：</span> <span>Balance:  {{
          balanceArr[2] > 0 ? balanceArr[2] : 0 | formatNumberTo
        }}  RBT</span></div>
      <div class="input-box">
        <el-input class="input2" :class="{'active':subAmount[2]>0}" size="small" v-model="subAmount[2]"></el-input>
        <el-button @click="setMax(2)">MAX</el-button>
      </div>
      <div class="line"><span>邀请挖矿矿池：</span> <span>Balance:  {{
          balanceArr[3] > 0 ? balanceArr[3] : 0 | formatNumberTo
        }}  RBT</span></div>
      <div class="input-box">
        <el-input class="input2" :class="{'active':subAmount[3]>0}" size="small" v-model="subAmount[3]"></el-input>
        <el-button @click="setMax(3)">MAX</el-button>
      </div>
      <div class="line"><span>我的活期存款：</span> <span>Balance:  {{
          balanceArr[4] > 0 ? balanceArr[4] : 0 | formatNumberTo
        }}  RBT</span></div>
      <div class="input-box">
        <el-input class="input2" :class="{'active':subAmount[4]>0}" size="small" v-model="subAmount[4]"></el-input>
        <el-button @click="setMax(4)">MAX</el-button>
      </div> -->
      <div class="line">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button @click="pledge">质押</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Moment from 'moment'
import {mapGetters} from "vuex";
import {RainbowBank} from "@/utils/address.json"
export default {
  name: "RBTBank",

  data() {
    return {
      updateTable: false,
      subAmount: [0, 0, 0, 0, 0],
      balanceArr: [0, 0, 0, 0, 0],
      amount: 0,
      RBT:0,
      arr1: [],//锁仓挖矿质押哪几笔
      arr2: [],//锁仓挖矿质押哪几笔 多少钱
      dialogVisible: false,
      monthsArr: [{label: "活期", value: 0}, {label: "三个月", value: 3}, {label: "六个月", value: 6},
      {label: "十二个月", value: 12}, {label: "二十四个月", value: 24}, {label: "三十六个月", value: 36}],
      chooseMonth: null,
      selectIndex: null,
      allowance: 0,
      isShowRecord: false,//过期dialog
      accountData: [],
      isLoadingT: false,
      isLoadingT2: false
    }
  },
  created() {
    this.initData()
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account',
      'btcPrice',
      'web3'
    ]),
    bankTokenArr() { //发布借款信息表格
      let arr = []
      this.$store.state.rainbowBank.records.forEach((item, index) => {
        let obj = {
          index: index + 1,
          nameObj: {
            title: "令牌编号",
            data: item.tokenId
          },
          infoArr: [
            {
              title: "锁仓类型",
              data: item.month + "个月"
            },
            {
              title: "包含RBT数量",
              data: item.amount
            },
            {
              title: "生成社区治理令牌总额度",
              data: ""
            },
            {
              title: "目前还可以生成社区治理令牌额度",
              data: ""
            },
          ],
          detailArr: [
            {
              title: "初始生成人",
              data: item.depositor.substr(0, 3) + '...' + item.depositor.substr(item.depositor.length - 3, 3)
            },
            {
              title: "现在所有人",
              data: item.depositor.substr(0, 3) + '...' + item.depositor.substr(item.depositor.length - 3, 3)
            },
            {
              title: "生成时间",
              data: Moment(item.created_at).format('YYYY-MM-DD')
            },
            {
              title: "到期时间",
              data: Moment(item.updated_at).format('YYYY-MM-DD')
            },
            {
              title: "剩余天数",
              data: item.month*30

            },
          ],
          withdrawa:
            {
              address: item.depositor,
              tokenid: item.tokenId

            }

        }
        arr.push(obj)

      })
      return arr
    },

    excRecords() {
      return this.$store.state.seedExc.records
    },
    consensusRecords() {
      return this.$store.state.consensus.records;
    },
    contributionRecords() {
      return this.$store.state.contribution.records
    },
    inviteRecords() {
      return this.$store.state.invite.records
    },
    seedExcA() {
      return this.$store.state.seedExc.totalExc * 0.9 - this.$store.state.seedExc.extracted
    },
    consensusA() {
      return this.$store.state.consensus.getRbtRecord.lockNum + this.$store.state.consensus.getRbtRecord.extractable
    },
    contributionA() {
      return this.$store.state.contribution.getRbtRecord.lockNum + this.$store.state.contribution.getRbtRecord.extractable
    },

  },

  watch: {
    isConnected() {
      this.initData()
    },
  },
  methods: {
    monthChange() { //月份改变可用改变
      switch (this.chooseMonth) {
        case 0:
          this.balanceArr[1] = 0;
          this.balanceArr[2] = 0;
          this.balanceArr[3] = 0;
          break;
        case 3:
          this.balanceArr[1] = Math.floor((this.seedExcA) / 3);
          this.balanceArr[2] = Math.floor(this.consensusA / 3);
          this.balanceArr[3] = Math.floor(this.contributionA / 3);
          break;
        case 6:
          this.balanceArr[1] = Math.floor((this.seedExcA) / 2);
          this.balanceArr[2] = Math.floor(this.consensusA / 2);
          this.balanceArr[3] = Math.floor(this.contributionA / 2);
          break;
        case 9:
          this.balanceArr[1] = Math.floor((this.seedExcA) * 2 / 3);
          this.balanceArr[2] = Math.floor(this.consensusA * 2 / 3);
          this.balanceArr[3] = Math.floor(this.contributionA * 2 / 3);
          break;
        case 12:
        case 24:
        case 36:
          this.balanceArr[1] = this.$store.state.seedExc.totalExc - this.$store.state.seedExc.extracted
          this.balanceArr[2] = this.$store.state.consensus.getRbtRecord.allRbt
          this.balanceArr[3] = this.$store.state.contribution.getRbtRecord.allRbt
      }
    },
    setMax() {
      this.amount = this.RBT
    },
    async getDeposit() {
      this.isLoadingT2 = true
      await this.$store.dispatch("RbtDeposit721/tokenMetadata", 1)
      this.isLoadingT2 = false
    },
    async getRecord() {
      this.getDeposit()
      this.isLoadingT = true
      // await this.$store.dispatch("seedExc/getSubData")
      // await this.$store.dispatch("consensus/getRbtRecord")
      // await this.$store.dispatch("consensus/getSubData")
      // await this.$store.dispatch("contribution/getRbtRecord")
      // await this.$store.dispatch("contribution/getSubData")
      this.isLoadingT = false

      this.balanceArr[0] = this.$store.state.erc20.RBT

      this.accountData = [
        {
          name: "钱包",
          available: this.$store.state.erc20.RBT,
          waitExtract: 0,
          locked: 0,
        },
        {
          name: "种子轮兑换矿池",
          available: this.$store.state.seedExc.totalExc - this.$store.state.seedExc.extracted,
          waitExtract: this.$store.state.seedExc.released - this.$store.state.seedExc.extracted,
          locked: this.$store.state.seedExc.totalExc - this.$store.state.seedExc.released,
        },
        {
          name: "共识挖矿矿池",
          available: this.$store.state.consensus.getRbtRecord.allRbt,
          waitExtract: this.$store.state.consensus.getRbtRecord.extractable,
          locked: this.$store.state.consensus.getRbtRecord.lockNum,
        },
        {
          name: "贡献挖矿矿池",
          available: this.$store.state.contribution.getRbtRecord.allRbt,
          waitExtract: this.$store.state.contribution.getRbtRecord.extractable,
          locked: this.$store.state.contribution.getRbtRecord.lockNum,
        },
      ]

    },
    initData() {
      if (!this.isConnected) {
        return;
      }
      this.$store.dispatch("rainbowBank/getInfo").then(() => {
        this.updateTable = true
      })
      this.$store.dispatch('RBT/balanceOf', this.account).then(res=>{
        this.RBT = res/10**18
      })
    },
    checkLimit() {
      if (this.accountData[0].extract > this.accountData[0].available) {
        this.accountData[0].extract = this.accountData[0].available
      }
    },
    chooseMax(index) {
      this.accountData[index].extract = this.accountData[index].available
      this.$set(this.accountData, index, this.accountData[index])
    },
    chooseRecord() { // 根据质押钱数选择哪几笔
      let arrIdx = [], arrAmount = [], templateAmount = 0
      if (parseFloat(this.subAmount[1]) > 0) { //种子轮兑换
        this.excRecords.forEach(record => {
          templateAmount += (record.amount * 0.9 - record.extracted) * this.chooseMonth / 12
          if (templateAmount < parseFloat(this.subAmount[1])) {
            arrIdx.push(record.xuhao)
            arrAmount.push((record.amount * 0.9 - record.extracted) * this.chooseMonth / 12)
            return
          } else {
            arrIdx.push(record.xuhao)
            arrAmount.push(parseFloat(this.subAmount[1]) - templateAmount + (record.amount * 0.9 - record.extracted) * this.chooseMonth / 12)
          }

        })
      }
      this.arr1 = []
      this.arr2 = []
      this.arr1.push(arrIdx)
      this.arr2.push(arrAmount)
      arrIdx = [], arrAmount = [], templateAmount = 0
      if (parseFloat(this.subAmount[2]) > 0) { // 共识挖矿
        this.consensusRecords.forEach(record => {
          templateAmount += (record.amount * 0.9 - record.extracted) * this.chooseMonth / 12
          if (templateAmount < parseFloat(this.subAmount[2])) {

            arrIdx.push(record.xuhao)
            arrAmount.push((record.amount * 0.9 - record.extracted) * this.chooseMonth / 12)
            return
          } else {
            arrIdx.push(record.xuhao)
            arrAmount.push(parseFloat(this.subAmount[2]) - templateAmount + (record.amount * 0.9 - record.extracted) * this.chooseMonth / 12)
          }

        })
      }
      this.arr1.push(arrIdx)
      this.arr2.push(arrAmount)
      arrIdx = [], arrAmount = [], templateAmount = 0
      if (parseFloat(this.subAmount[3]) > 0) { // 邀请挖矿
        this.inviteRecords.forEach(record => {
          templateAmount += (record.amount * 0.9 - record.extracted) * this.chooseMonth / 12
          if (templateAmount < parseFloat(this.subAmount[3])) {
            arrIdx.push(record.xuhao)
            arrAmount.push((record.amount * 0.9 - record.extracted) * this.chooseMonth / 12)
            return
          } else {
            arrIdx.push(record.xuhao)
            arrAmount.push(parseFloat(this.subAmount[3]) - templateAmount + (record.amount * 0.9 - record.extracted) * this.chooseMonth / 12)
          }

        })
      }
      this.arr1.push(arrIdx)
      this.arr2.push(arrAmount)
    },
    pledge() {
      if (this.account && this.account.length <= 0) {
        this.$message("请先连接钱包")
        return
      }
      if (this.chooseMonth == null) {
        this.$message("请选择存几个月")
        return
      }
      let account = this.account
      this.$store.dispatch("RBT/allowance", {
        owner: account,
        spender: RainbowBank
      }).then(res => {
        if (res < this.amount) {
          this.isLoading = true
          this.$store.dispatch("RBT/approve", {
            spender: RainbowBank,
            amount: this.web3.utils.toWei((10**18).toString())
          }).then(() => {
            this.isLoading = false
            this.subPledge()
          }).catch(() => {
            this.isLoading = false
            this.$message({
              type: 'error',
              message: '授权失败'
            })
          })
          return
        } else {
          this.subPledge()
        }
      });

    },
    operateRClick(tableData) {
      this.release(tableData.withdrawa.tokenid)
    },
    release(tokenId) {
      console.log(tokenId,this.account);
      this.$store.dispatch("RainbowBank/withdrawa", {to: this.account, tokenId}).then(() => {
        this.$message.success("提取成功")
      }).catch((err) => {
        this.$message.error("提取失败" + err)
      })
    },
    subPledge() {
      this.$store.dispatch("RainbowBank/depositToken", {to: this.account, month: this.chooseMonth, value:this.amount }
      ).then(() => {
        this.$message.success("质押成功")
        this.dialogVisible = false
        let arr = this.$store.state.rainbowBank.records
        arr.push({
          month:this.chooseMonth,
          tokenId:this.bankTokenArr.length +1,
          created_at:new Date(),
          depositor:this.account,
          amount:this.amount
        })
        this.$store.commit("rainbowBank/SET_RECORDS",arr)
        this.subAmount = [0, 0, 0, 0, 0]
      }).catch((err) => {
        console.log(err)
        this.$message.error("质押失败" + err)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.rbt-bank {
  .rbt-deposit {
    margin-top: 20px;
  }
  .r-panel{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .icon{
      width: 40px;
      img{
        width: 100%;
      }
    }
    .rbt-info{
      padding: 0 60px 0 20px;
      .name{
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;
      }
      .data{
        font-size: 24px;
        font-weight: bold;
        color: #db1f7e;
        line-height: 28px;
      }
    }
    .rbt-value{
      flex-grow: 1;
      .name{
        font-size: 12px;
        color: #a98ebd;
        line-height: 30px;
      }
      .data{
        font-size: 20px;
        color: #f7921b;
        line-height: 24px;
        .btc-value{
          font-size: 12px;
          color: #0c9732;
          line-height: 14px;
        }
      }
    }
    .stake-btn{
      cursor: pointer;
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px;
      box-shadow: 0px 3px 6px 0px rgba(128,4,149,0.30);
      color: white;
    }
  }
  .dialog {
    .select {
      width: 120px;
    }

    .line {
      padding: 8px 0;
      display: flex;
      justify-content: space-between;

      .el-button {
        width: 210px;
        height: 42px;
        border-radius: 10px;
      }

      .el-button:last-child {
        color: white;
        background: linear-gradient(225deg, #7700ff, #c4c4c4);
      }
    }

    .input-box {
      padding: 2px 4px;
      border-radius: 4px;
      border: 1px solid #eee;
      background: #F8F8F8;
      display: flex;

      .active {
        ::v-deep .el-input__inner {
          font-weight: bold;
          font-size: 14px;
        }
      }

      .el-button {
        width: 40px;
        font-size: 10px;
        height: 32px;
        padding: 6px;
        color: white;
        background: linear-gradient(225deg, #7700ff, #ed6868);
        border-radius: 5px;
      }
    }

  }

  .my-assets-info {
    margin: 10px auto;
    height: 100px;
    width: 300px;
    text-align: center;
    justify-content: center;
    font-size: 14px;

    .rbt-number {
      font-size: 22px;
      margin: 4px 0;

      span {
        font-size: 16px;
      }
    }
  }

  .pre-button {
    width: 96px;
  }

  .account-data {
    margin: 40px auto;
    width: 60%;
    min-width: 800px;
  }

  .pledge {
    margin: 40px auto;
    min-width: 450px;

    .operating {
      display: flex;
    }

    .submit-button {
      margin-top: 20px;
      min-width: 300px;
    }

    .allow {
      margin-top: 20px;
      min-width: 200px;
      width: 36%;

    }
  }
}
</style>
