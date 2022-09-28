<template>
  <!--  社区治理令牌申请-->
  <div class="communityToken">
    <singleNav style="width: 1200px;margin: 20px auto" :nav-list="navList" v-model="activeIndex"></singleNav>
    <div class="applyPanel" v-show="activeIndex==0">
      <RainbowPanel>
        <template v-slot:name>
          社区治理令牌申请 <span class="erc-info">ERC721</span>
        </template>
        <template v-slot:content>

          <el-table
              ref="multipleTable"
              border
              v-loading="isLoadingT1"
              :data="bankTokenArr"
              :default-sort="{prop: 'tokenId', order: 'ascending'}"
          >
            <el-table-column
                prop="tokenId"
                label="令牌编号"
            >
            </el-table-column>
            <el-table-column
                label="初始生成人"
                prop="depositor"
            >
            </el-table-column>
            <el-table-column
                prop="ownerName"
                label="现在持有人"
            >
            </el-table-column>
            <el-table-column
                prop="month"
                label="质押周期"
            >
            </el-table-column>
            <el-table-column
                prop="amount"
                label="包含RBT数量"
            >
              <div slot-scope="scope">
                {{ scope.row.amount  |formatNumberTo }}
              </div>
            </el-table-column>
            <el-table-column
                prop="usedAmount"
                label="已使用社区 治理令牌额度"
                width="120px;"
            >
              <template slot="header">
                <div style="text-align: center">
                  已使用社区<br/>治理令牌额度
                </div>
              </template>
              <div slot-scope="scope">
                {{ scope.row.amount |formatNumberTo }}
              </div>
            </el-table-column>
            <el-table-column
                label="剩余社区 治理令牌额度"
                width="120px;"
            >
              <template slot="header">
                <div style="text-align: center">
                  剩余社区<br/>治理令牌额度
                </div>
              </template>
              <div slot-scope="scope">
                {{ scope.row.amount |formatNumberTo }}
              </div>
            </el-table-column>

            <el-table-column
                label="生成时间">
              <div slot-scope="scope">
                {{ new Date(scope.row.created_at) | formatDate }}
              </div>
            </el-table-column>
            <el-table-column
                label="到期时间">
              <div slot-scope="scope">
                {{
                  new Date((new Date(scope.row.created_at)).getTime() + (2592000 * scope.row.month) * 10 ** 3) | formatDate
                }}
              </div>
            </el-table-column>
            <el-table-column
                prop="expireTime"
                label="剩余天数">
              <div slot-scope="scope">
                {{
                  parseInt((new Date((new Date(scope.row.created_at)).getTime() + (2592000 * scope.row.month) * 10 ** 3).getTime() - (new Date()).getTime()) / 86400000)
                }}
              </div>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="申请"
            >
              <template scope="scope">
                <el-button class="button1" size="mini" @click="applyToken(scope.row)">申请</el-button>
              </template>
            </el-table-column>

          </el-table>
          <br>
        </template>
      </RainbowPanel>
      <RainbowPanel class="my-token">
        <template v-slot:name>
          <div class="header">
            <div class="name">我的社区治理令牌<span class="erc-info">ERC721</span></div>
            <el-button class="button-view" size="mini" @click="isShowRecord = true">已过期</el-button>
          </div>
        </template>
        <template v-slot:content>
          <el-table border v-loading="isLoadingT2" :data="communityTokenArr" stripe>
            <el-table-column label="我的令牌" width="140">
              <template slot-scope="scope">
                <div class="idx">{{ scope.$index }}</div>
                <div class="token-name">
                  <img class="token-icon" style="margin-right: 6px" :src="getImgByType(scope.row.type)" alt="">
                  {{ scope.row.type }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="令牌编号">
              <template slot-scope="scope">
                <span>{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column label="初始生成人">
              <template slot-scope="scope">
                <span>{{ scope.row.firstOwnerName }}</span>
              </template>
            </el-table-column>
            <el-table-column label="现在持有人">
              <template slot-scope="scope">
                <span>{{ scope.row.ownerName }}</span>
              </template>
            </el-table-column>
            <el-table-column label="生成城市节点令牌数量">
              <template slot="header">
                <div style="text-align: center">
                  生成城市<br/>节点令牌数量
                </div>
              </template>
              <div slot-scope="scope">
                {{ getCityNodeNum(scope.row.type) }}
              </div>
            </el-table-column>
            <el-table-column label="生成时间">
              <template slot-scope="scope">
                <span>{{ new Date(scope.row.created_at) | formatDate }}</span>
              </template>
            </el-table-column>
            <el-table-column label="到期时间">
              <template slot-scope="scope">
                <span>{{ new Date(scope.row.updated_at) | formatDate }}</span>
              </template>
            </el-table-column>
            <el-table-column label="剩余天数">
              <template slot-scope="scope">
                <span>{{
                    parseInt(((new Date(scope.row.updated_at).getTime()) - (new Date().getTime())) / 86400000) + 364
                  }}</span>
              </template>
            </el-table-column>
            <el-table-column label="历史交易信息" width="130px">

              <template scope="scope">
                <el-button size="mini" class="button-view" @click="viewHistory(scope.row)">查看</el-button>
              </template>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="转让"
            >
              <template scope="scope">
                <el-button size="mini" class="button1" style="float:right;margin-bottom:10px"
                           @click="transferOpen(scope.row)"> 转让
                </el-button>
              </template>
            </el-table-column>

          </el-table>

        </template>
      </RainbowPanel>
    </div>
    <div class="marketPanel" v-show="activeIndex==1">
      <marketPanel></marketPanel>
    </div>
    <div class="mySellPanel" v-show="activeIndex==2">
      <mySellPanel></mySellPanel>
    </div>
    <!--    申请弹窗 =》 rbt-desposit 申请 社区令牌 -->
    <el-dialog width="400px" title="请填写您的令牌申请方案" :visible.sync="dialogFormVisible">
      <div class="transfer">
        <div class="r-intro-box">
          <div><span>令牌编号</span><span>{{ useToken ? useToken.tokenId : 0 }}</span></div>
          <div><span>包含rbt数量</span><span>{{ useToken ? useToken.mortgageAmount - useToken.usedAmount : 0 }}</span></div>
          <div><span>可用余额</span><span>{{ overrage }}</span></div>
        </div>
        <div v-for="i in 4" :key="i">
          <div class="token"><img :src="tokens[i-1]" alt="">{{ tokenType[i - 1] }}</div>
          <div class="price-box">
            <span>生成数量</span>
            <div class="input-box">
              <el-input class="input2" size="mini" type="number" :min="0" @change="numberCheck"
                        v-model="tokenArr[i-1]"></el-input>
            </div>
          </div>
        </div>
        <div>
          生成令牌数量可自定义修改，剩余RBT小于2000将不可生成令牌。
        </div>
        <div class="operating">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button class="button1" @click="handleApply()">申请</el-button>
        </div>
      </div>
    </el-dialog>
    <!-- 转让弹窗-->
    <el-dialog
        title="兑换记录"
        :visible.sync="isShowTransfer"
        width="400px"
    >
      <div class="transfer">

        <div >
          <div class="tip">
            <span>{{ transferTokenInfo.name }} - {{ transferTokenInfo.id }}</span>
            <span>
            {{  parseInt(((new Date(transferTokenInfo.updated_at).getTime()) - (new Date().getTime())) / 86400000) + 364}}天
          </span>
          </div>
          <div class="price-box">
            <span>价格</span>
            <div class="input-box">
              <el-input class="input2" size="mini" typr="number" v-model="transferTokenInfo.price"></el-input>
              <!--              <ChooseToken @changeToken="changeToken"></ChooseToken>-->
            </div>
          </div>
        </div>

        <div class="intro">
          转让成功后，将扣除您 <span class="r-p-color">5%</span>的平台服务费
        </div>
        <div class="operating">
          <el-button class="button3" @click="isShowTransfer=false">Cancel</el-button>
          <el-button class="button1" @click="transferToken">转让</el-button>
        </div>
      </div>
    </el-dialog>
    <!--    过期令牌弹窗-->
    <el-dialog
        title="过期令牌"
        :visible.sync="isShowRecord"
        width="400px"
    >
      <div class="record-list">
        <div class="item" v-for="(item,index) in expiredTokenArr" :key="index">
          <div class="token"><img :src="tokens[item.type]" alt="">{{ item.type }}{{ item.code }}</div>
          <div class="time">
            到期时间 {{ item.time | formatDate }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import superNode from "@/assets/img/superNode.png"
import partner from "@/assets/img/partner.png"
import ambassador from "@/assets/img/ambassador.png"
import elves from "@/assets/img/elves.png"
import {mapGetters} from "vuex";
import { imgByType} from "@/utils/maps";
import marketPanel from "./communityToken/marketPanel";
import mySellPanel from "./communityToken/mySellPanel";
import token721 from "../../../../abi/ExchangeGovernance721.json"
import {getCoinBalance} from "../../../api/goverbabce721";
import {getList} from "../../../api/rbtBank"

export default {
  name: "communityToken",
  components: {marketPanel, mySellPanel},
  data() {
    return {
      activeIndex: 0, //nav
      bankTokenArr: [],
      navList: [{
        name: '申请',
        index: 0
      }, {
        name: '市场',
        index: 1
      }, {
        name: '我的',
        index: 2
      }],
      useToken: null,//要用于兑换的令牌
      tokens: [elves, ambassador, partner, superNode],
      tokenType: ['RBTElf', 'RBTEnvoy', 'RBTPartner', 'RBTNode'],
      isShowRecord: false,//是否显示过期令牌
      tokenArr: [0, 0, 0, 0],//兑换社区令牌数量
      overrage: 0,//rbt-deposit可用额度
      isShowTransfer: false,//是否显示转让弹窗
      transferTokenInfo: {
        number: 0,
      },//转让令牌信息数组
      dialogFormVisible: false, //令牌兑换弹窗
      activeTokenAmount: '', //令牌可用于兑换的额度
      isLoading: false,
      isLoadingT2: false,
      isLoadingT1: false,
      communityTokenArr: [],//社区治理令牌
      expiredTokenArr: [],//过期令牌
    }
  },

  created() {
    this.getData()
  },

  methods: {
    viewHistory() {//查看历史信息

    },
    getImgByType(type) {
      return imgByType[type]
    },
    getCityNodeNum(type) {
      switch (type) {
        case 'RBTElf':
          return 0
        case 'RBTEnvoy':
          return 1
        case 'RBTPartner':
          return 3
        case 'RBTNode':
          return 5
      }
    },
    async getData() {
      if (this.isConnected) {
        this.isLoadingT2 = true
        await this.getTable1Data()
        await getCoinBalance().then(res => {
          this.communityTokenArr = res
        })
        this.isLoadingT2 = false
      }
    },
    async getTable1Data() {
      this.isLoadingT1 = true
      getList().then(res => {
        this.bankTokenArr = res
      })
      this.isLoadingT1 = false
    },
    changeToken(param) { //选择用哪种币去兑换
      console.log(param)
    },
    transferOpen(token) {//打开转让弹窗
      this.isShowTransfer = true
      this.transferTokenInfo = token
    },
    async transferToken() { //转让令牌
      let token = this.transferTokenInfo
      if (!(token.price > 0)) {
        this.$message.error("请填写价格")
        return
      }
      // await this.$store.dispatch("rbtFactory721/allowance", {
      //   name: token.name,
      // }).then(async res => {
      //   if (!res) {
      this.isLoading = true
      await this.$store.dispatch("rbtFactory721/approve", {
        name: token.name,
        tokenId: token.id
      }).then(() => {
        this.$store.dispatch("LoanMarket/lend", {
          id:token.id,
          value:token.price
        }).then(() => {
          this.$message.success("已成功转让到市场")
        })
        this.isLoading = false
      }).catch((err) => {
        console.log(err)
        this.isLoading = false
        this.$message({
          type: 'error',
          message: '授权失败'
        })
      })

    },
    applyToken(token) { //申请令牌
      this.dialogFormVisible = true
      this.useToken = token
      this.countToken()
    },
    handleApply() { //申请
      console.log(
          {tokenId: this.useToken.tokenId, _address: token721.networks["elf"].address}
      )
      this.$store.dispatch("ExchangeGovernance721/addNftToken", {
        tokenId: this.useToken.tokenId,
        _address: token721.networks["elf"].address
      }).then(() => {
        this.$message.success("兑换成功")
        this.dialogFormVisible = false
      }).catch(err => {
        console.log(err)
        this.$message.error("兑换失败" + err)
      })
    },
    numberCheck() {//计算令牌数量不能超过可用余额
      let total = 0
      total = this.tokenArr[0] * 2000 + this.tokenArr[1] * (1 * 10 ** 4) + this.tokenArr[2] * (5 * 10 ** 4) + this.tokenArr[3] * (10 * 10 ** 4)
      this.overrage = (this.useToken.mortgageAmount - this.useToken.usedAmount) - total
      if (this.overrage < 0) {
        this.$message.error("超出余额")
      }
    },
    countToken() {//计算令牌数量
      this.tokenArr = [0, 0, 0, 0]
      let amount = this.useToken.mortgageAmount - this.useToken.usedAmount
      if (amount > 10 * 10 ** 4) {
        this.tokenArr[3] = parseInt(amount / (10 * 10 ** 4))
        amount = amount % (10 * 10 ** 4)
      }
      if (amount > 5 * 10 ** 4) {
        this.tokenArr[2] = parseInt(amount / (5 * 10 ** 4))
        amount = amount % (5 * 10 ** 4)
      }
      if (amount > 1 * 10 ** 4) {
        this.tokenArr[1] = parseInt(amount / (1 * 10 ** 4))
        amount = amount % (1 * 10 ** 4)
      }
      if (amount > 2000) {
        this.tokenArr[0] = parseInt(amount / 2000)
        amount = amount % 2000
      }
      this.overrage = amount
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),

  },


  watch: {
    account() {
      this.getData()
    },
  }
};
</script>
<style lang="scss" scoped>
.communityToken {
  margin: 0 auto;

  .button1 {
    box-shadow: 0px 2px 5px 0px rgba(128, 4, 149, 0.30);
  }

  .button-view {
    color: #736DFF;
    background: rgba(115, 109, 255, 0.20);
    border: 1px solid rgba(115, 109, 255, 0.20);
    border-radius: 21px;
  }

  .my-token {
    margin-top: 30px;

    .token-icon {
      width: 16px;
    }

    .token-name {
      display: flex;
      align-items: center;
    }

    .header {
      display: flex;
    }
  }

  .transfer {
    .token {
      display: flex;
      align-items: center;
      color: #736DFF;
      margin-bottom: 4px;

      img {
        margin-right: 8px;
        width: 16px;
      }
    }

    .tip {
      display: flex;
      justify-content: space-between;

      span:first-child {
        color: #736DFF;
      }
    }

    > div {
      margin-top: 10px;
    }

    .price-box {
      width: 380px;
      background: #f8f8f8;
      border: 1px solid #eaeaea;
      border-radius: 11px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 20px;

      .input-box {
        width: 260px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        border-radius: 6px;
        display: flex;
      }
    }

    .operating {
      display: flex;
      justify-content: space-between;

      .el-button {
        border-radius: 10px;
        width: 210px;
      }
    }
  }

  .record-list {
    .item {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 0 20px;
      justify-content: space-between;
      border-radius: 20px;
      box-shadow: 0px 3px 10px 0px rgba(48, 48, 77, 0.08);
      margin-top: 10px;

      .token {
        display: flex;
        align-items: center;
        color: #736dff;
      }

      img {
        width: 20px;
      }

      .time {
        color: #999999;
        font-size: 12px;
      }
    }
  }
}
</style>

