<template>
  <div class="invite">
    <RainbowPanel>
      <template v-slot:name>
        RBT邀请挖矿兑换规则
      </template>
      <template v-slot:content>
        <div class="my-invite-info">
          <div class="left">
            <div class="line">
              <img class="header" src="../static/img/img.png" alt="">
              <!--              <div class="name" style="padding: 0 10px;">{{ nickName }}</div>-->
              <img class="level" src="../../assets/img/platinum.png" alt="">
              <el-button class="button1" size="mini" @click="$router.push({name:'myVip'})"> 升级</el-button>
            </div>
            <div class="my-invite-intro">
              您目前的等级为 <span class="r-p-color">{{ nftName[currentLevel + 1] }}</span>，您当前可兑换的RBT数量为 <span
                class="r-p-color">3,000,000</span>枚。
              如果您升级 <span class="r-p-color">白金VIP</span>，那么您可兑换的RBT数量为 <span class="r-p-color">6,000,000</span>枚
            </div>
          </div>
          <div class="announcement">
            <div class="announcement-item">
              <img src="../../assets/img/EX.png" alt="">
              <div class="item-content">
                <strong>
                  我的RBT-ex数量
                </strong>
                <div class="number-box">
                  数量
                  <span class="number r-green-color">{{ balance ? balance : 0 | formatNumberTo }} RBT-EX</span>
                </div>
                <div class="market-value">
                  <div class="title">
                    市值
                  </div>
                  <div style="padding-left: 8px;">
                    <strong> <span class="r-y-color">BTC</span> :{{ 60000000 |formatNumber }}</strong>
                    <strong> <span class="r-g-color">USDT</span> :${{ 60000000 |formatNumber }}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="announcement-item">
              <img src="../../assets/img/RBT.png" alt="">
              <div class="item-content">
                <strong>可兑换的RBT数量</strong>
                <div class="number-box">
                  数量
                  <span class="number r-orange-color">{{ balance ? balance : 0 | formatNumberTo }} RBT</span>
                </div>
                <div class="market-value">
                  <div class="title">
                    市值
                  </div>
                  <div style="padding-left: 8px;">
                    <strong> <span class="r-y-color">BTC</span> :{{ 60000000 |formatNumber }}</strong>
                    <strong> <span class="r-g-color">USDT</span> :${{ 60000000 |formatNumber }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-table
            :data="VIPData"
            border
            style="width: 100%"
            class="vip-data"
            :cell-style="styleBack"
        >
          <el-table-column label="VIP等级" align="center" width="220">
            <template slot-scope="scope">
              <div class="level">
                <div class="idx">{{ scope.$index + 1 }}</div>
                <img class="level-img" :src="scope.row.img" alt="">
                <span>{{ scope.row.level }}</span>

              </div>
            </template>
          </el-table-column>
          <el-table-column prop="releaseLevel" label="可释放层级（包含自己）" align="center">
          </el-table-column>
          <el-table-column prop="miningNum" label="本层累计共识挖矿数量" align="center">
          </el-table-column>
          <el-table-column prop="exchangeRatio" label="兑换比例" align="center">
          </el-table-column>
          <el-table-column prop="exchangeNum" label="可兑换数量" align="center">
          </el-table-column>
        </el-table>
      </template>
    </RainbowPanel>
    <RainbowPanel>
      <template v-slot:name>
        推荐共识挖矿业绩
      </template>
      <template v-slot:content>
        <el-table
            :data="inviteData"
            border
            style="width: 100%"
            class="vip-data"
        >
          <el-table-column label="层级" align="center" width="220">
            <template slot-scope="scope">
              <div class="level">
                <div class="idx">{{ scope.$index + 1 }}</div>
                <span>{{ scope.row.level }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="number" label="人数" align="center">
          </el-table-column>
          <el-table-column prop="amount" label="累计共识挖矿数量" align="center">
          </el-table-column>
          <el-table-column prop="increase" label="新增累计共识挖矿数量" align="center">
          </el-table-column>
        </el-table>
      </template>
    </RainbowPanel>
    <RainbowPanel class="rainCard-box">
      <template v-slot:name>
        <div class="invite-panel-header">
          <span>RBT邀请挖矿矿池</span>
          <el-button class="button-view" @click="showRecord=!showRecord" size="mini">
            <i class="el-icon-time"></i>兑换记录
          </el-button>
        </div>
      </template>
      <template v-slot:content>
        <div class="rainCard">
          <div class="intro-box">
            <div>
              <span>矿池总数量</span>
              <strong> <span class="r-p-color">200M</span> RBT</strong>
            </div>
            <div>
              <span>矿池已挖数量</span>
              <strong> <span class="r-p-color">{{ (digOutAmount)|formatNumberTo }}</span> RBT</strong>
            </div>
            <div>
              <span>矿池剩余数量</span>
              <strong> <span class="r-p-color">{{ (200000000 - digOutAmount)| formatNumberTo }}</span> RBT</strong>
            </div>
          </div>
          <div class="intro">
            RBT-ex可与RBT进行 <span class="r-p-color">1:1</span>兑换，兑换后的RBT将直接存入您的钱包，兑换成功后请到钱包查看
          </div>
        </div>
        <ExchangeCard cardName="兑换"  @handleApprove="handleApprove" :balance="balance" type="invite" :cur-rate="curRate" :allowanceNumber="allowanceNumber"
                      @handleExchange="handleExchange"></ExchangeCard>
      </template>
    </RainbowPanel>
    <!--  弹窗-->
    <el-dialog
        title="兑换记录"
        :visible.sync="showRecord"
        width="400px"
    >
      <div class="exchange-record">
        <div class="exchange-record-header">
          <div>
            <strong>兑换总量：</strong>
            <div class="coin-info">
              <img src="../../assets/img/RBT.png" alt="">
              <strong class="r-p-color">{{ 20000|formatNumber }}</strong> RBT
            </div>
          </div>
          <div>
            <strong>消耗总量：</strong>
            <div class="coin-info">
              <img src="../../assets/img/EX.png" alt="">
              <strong class="r-p-color">{{ 200000|formatNumber }}</strong>
            </div>
          </div>
        </div>
        <div class="record-box">
          <div class="record" v-for="(record,index) in records" :key="index">
            <div class="record-time">
              {{ new Date(record.StartTime * 1000) | formatDate }}
            </div>
            <div class="record-content">
              <div>
                <div>使用：</div>
                <div><img class="icon" src="../../assets/img/DAI.png" alt="">{{ record.usdtAmount }}USD</div>
                <div>≈{{ 6.6 * record.usdtAmount }}</div>
              </div>
              <div>
                <div>兑换：</div>
                <div><img class="icon" src="../../assets/img/RBT.png" alt=""> {{ record.amount }}RBT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </el-dialog>
    <el-dialog
        title="提取RBT"
        :visible.sync="showExtract"
        width="30%"
    >
      <div>
        <div>
          <el-button size="mini">提取全部</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import L1IMG from '../../assets/img/normal.png'
import L2IMG from '../../assets/img/bronze.png'
import L3IMG from '../../assets/img/silver.png'
import L4IMG from '../../assets/img/gold.png'
import L5IMG from '../../assets/img/platinum.png'

import ExchangeCard from "@/components/ExchangeCard";
import addressArr from "@/utils/address.json"

export default {
  name: "invite",
  components: {
    ExchangeCard
  },
  data() {
    return {
      nftName: ['普通', '青铜', '白银', '黄金', '白金'],
      balance: 0,
      allowanceNumber:0,//剩余授权额度
      isLoading: false,
      showExtract: false,
      showRecord: false,
      records: [],
      amount: 0,
      curRate: 1000,
      curCoin: 'RBT-EX',
      totalExc: null,//用户总共
      userHasReleased: 0,//用户已提取
      waitReceived: 0,//待提取
      VIPData: [{
        level: "彩虹DAO普通成员",
        releaseLevel: 3,
        img: L1IMG,
        miningNum: 50000,
        exchangeRatio: 0.5,
        exchangeNum: 50000
      },
        {
          level: "彩虹青铜VIP居民",
          releaseLevel: 5,
          img: L2IMG,
          miningNum: 50000,
          exchangeRatio: 1,
          exchangeNum: 50000
        }, {
          level: "彩虹白银VIP居民",
          releaseLevel: 6,
          img: L3IMG,
          miningNum: 50000,
          exchangeRatio: 1,
          exchangeNum: 50000
        }, {
          level: "彩虹黄金VIP居民",
          releaseLevel: 7,
          img: L4IMG,
          miningNum: 50000,
          exchangeRatio: 1.5,
          exchangeNum: 50000
        }, {
          level: "彩虹白金VIP居民",
          releaseLevel: 8,
          img: L5IMG,
          miningNum: 50000,
          exchangeRatio: 1.5,
          exchangeNum: 50000
        }],//VIP数据
      inviteData: [{
        level: "0级邀请人",
        number: "自己",
        amount: 5000,
        increase: 5000,
      }, {
        level: "1级邀请人",
        number: 0,
        amount: 5000,
        increase: 5000,
      }, {
        level: "2级邀请人",
        number: "0",
        amount: 5000,
        increase: 5000,
      }, {
        level: "3级邀请人",
        number: "0",
        amount: 5000,
        increase: 5000,
      }, {
        level: "4级邀请人",
        number: "0",
        amount: 5000,
        increase: 5000,
      }, {
        level: "5级邀请人",
        number: "0",
        amount: 5000,
        increase: 5000,
      }, {
        level: "6级邀请人",
        number: "0",
        amount: 5000,
        increase: 5000,
      }, {
        level: "7级邀请人",
        number: "0",
        amount: 5000,
        increase: 5000,
      }, {
        level: "8级邀请人",
        number: "0",
        amount: 5000,
        increase: 5000,
      },],
    }
  },
  computed: {
    ...mapGetters([
      'account',
      'isConnected',
      'web3'
    ]),
    currentLevel() {
      return this.$store.state.rbtVip.level > 0 ? this.$store.state.rbtVip.level - 1 : 0
    },

    excNumber() {
      return this.amount
    },
    digOutAmount() {
      return this.$store.state.invite.digOutAmount
    },
    exchangeRatio() {
      return this.$store.state.consensus.exchangeRatio
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    handleApprove(){
      this.$store.dispatch("RBD/approve", {
        spender: addressArr["Rbinvite"],
        amount:this.web3.utils.toWei(( 10 ** 20).toString())
      }).then(() => {
        this.$message("授权成功")
        this.allowanceNumber = 10**22
      })
    },
    styleBack({rowIndex}) {
      if (rowIndex == (parseInt(this.currentLevel)) + 1) {
        return {
          backgroundColor: "rgba(81, 74, 242, 0.2)",
          fontWeight: 'bold'
        };
      }
    },
    initData() {
      if (this.isConnected) {
        this.$store.dispatch('RBTEX/balanceOf', this.account).then(res => {
          this.balance = res / 10 ** 18
        });
        this.$store.dispatch("RBTEX/allowance", {
          owner: this.account,
          spender:addressArr["Rbinvite"]
        }).then((res) => {
          this.allowanceNumber = res
        })
        // this.$store.dispatch("rbtVip/getVipLevel")

        // this.$store.dispatch('invite/getSubData')
        // this.$store.dispatch('consensus/exchangeRatio', null, {root: true})
        // this.$store.dispatch('consensus/exchangeRatio', null, {root: true})
      }

    },

    handleExchange({amount}) {
      this.executeEXC(amount)
    },
    executeEXC(amount) {
      this.$store.dispatch("Rbinvite/getRBT", amount).then(() => {
        this.isLoading = false
        this.$message.success("兑换成功")
        this.initData()
      }).catch((err) => {
        console.log(err)
        this.isLoading = false
        this.$message.error("兑换失败" + err)
      });
    },

  },

}
</script>

<style lang="scss" scoped>
.invite {
  .rainbowPanel {
    margin-top: 20px;
  }

  .my-invite-info {
    padding: 10px;
    display: flex;
    text-align: left;
    justify-content: space-between;

    .my-invite-intro {
      margin-top: 10px;
      line-height: 20px;
    }

    .left {
      width: 345px;

      .line:first-child {
        display: flex;
        align-items: center;
        position: relative;

        .el-button {
          position: absolute;
          right: 0;
        }

        .header {
          width: 50px;
          height: 50px;
          border-radius: 25px;
        }

        .level {
          width: 20px;
        }

        .name {
          margin-left: 10px;
        }

        .button1 {
          width: 80px;
          margin-left: 20px;
        }
      }

      .line {

      }
    }

    .announcement {
      background: white;

      padding: 0 0 30px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item-line {
        width: 1px;
        height: 40px;
        opacity: 1;
        background: #d8d8d8;
      }

      .announcement-item {
        text-align: left;
        align-items: center;
        margin-right: 10%;
        height: 120px;
        display: flex;

        .item-content {
          margin-left: 10px;
        }

        .number-box {
          display: flex;
          align-items: center;
          padding: 4px 0;
        }

        .number {
          font-size: 20px;
          font-weight: bold;
          padding: 0 0 0 10px;
        }

        > p {
          height: 50px;
          line-height: 60px;
        }

        img {
          width: 40px;
          height: 40px;
        }

        .market-value {
          .title {
            width: 30px;
          }

          strong {
            display: block;
            margin-bottom: 6px;
          }

          display: flex;
        }
      }

      .announcement-item:nth-child(1) .header {
        background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
      }

      .announcement-item:nth-child(3) .header {
        background: linear-gradient(90deg, #44dec5, #4ebcfa);
      }

      .announcement-item:last-child {
        margin-right: 0;
      }
    }
  }

  .vip-data {
    .level {
      display: flex;
      align-items: center;
      justify-content: center;

      .level-img {
        margin: 0 4px 0 0px;
        width: 20px;
      }
    }

  }

  .invite-panel-header {
    display: flex;
    justify-content: space-between;
  }

  .intro {
    margin-top: 20px;
  }

  .rainCard-box {
    .intro-box {
      display: contents;

      > div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }

    }
  }
}
</style>
