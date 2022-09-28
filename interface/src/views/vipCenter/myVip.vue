<template>
  <div class="buy-vip">
    <RainbowPanel class="rainCard-box">
      <template v-slot:name>
        <div class="seedSub-panel-header">
          <span>VIP令牌购买</span>
          <el-button class="button-view" @click="showRecord = true" size="mini">
            <i class="el-icon-time"></i>购买记录
          </el-button>
        </div>
      </template>
      <template v-slot:content>
        <div class="rainCard">
          <div style="display: flex;align-items: center;padding-bottom:10px;justify-content: space-between">
            <div style="display: flex;align-items: center"><img style="width: 24px;" src="../../assets/img/VIP.png"
                                                                alt=""> <strong>VIP</strong></div>
            <strong>$100.00/枚</strong>
          </div>
          <div class="exchange">
            <div class="part1">
              <div class="floor1">
                <strong>Buy</strong>
                <span></span>
              </div>
              <div class="floor2">
                <el-input type="number" class="input2" v-model="amount" :min="0" :step="1"/>
                <div style="line-height: 30px;">
                  <img src="../../assets/img/VIP.png" alt="">
                  <span>RBVIP</span>
                </div>
              </div>
            </div>
            <div class="arrow">
              <i class="el-icon-bottom"></i>
            </div>
            <div class="part2">
              <div class="floor1">
                <strong>Total price</strong>
                <span></span>
              </div>
              <div class="floor2">
                <div class="amount"> $ {{ amount * 100 }}</div>
                <div></div>
              </div>
            </div>
            <el-button style="width: 100%;" class="button1" :class="{'disabled':isLoading||amount<=0}"
                       :loading="isLoading" @click="buyVip" :disabled="amount<=0||isLoading">购买
            </el-button>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <div class="vip-list">
      <div class="vip-list-header">
        <img class="vip-panel-bg" :src="backgroundArr[currentLevel]"/>
        <div class="vip-panel">
          <div class="panel-content">
            <div class="my-info">
              <div class="header-box">
                <img class="header" :src="header" alt="">
              </div>
              <div class="name">{{ nickName }}</div>
            </div>
            <div class="bottom">
              <div class="detail">
                <img class="vip-gold-logo" :src="logoArr[currentLevel]" alt="">
                <div class="vip-info">
                  <template v-for="i in RBTVIP">
                    <img src="../../assets/img/VIP.png" alt="" :key="i">
                  </template>
                  <template v-for="i in 9 - RBTVIP">
                    <img src="../../assets/img/VIP_shadow.png" alt="" :key="i+100">
                  </template>
                </div>
              </div>
              <div style="display: flex;justify-content: center">
                <div class="vip-user-infobox">
                  <div class="info-box">
                    <div class="info">
                      <div v-if="RBTVIP<9">再购买 {{ (RBTVIP >= 9) ? 0 : ((RBTVIP % 3) > 0 ? (RBTVIP % 3) : 3) }}
                        枚VIP令牌您将成为
                        {{ nftName[parseInt(RBTVIP / 3 + 1)] }}VIP
                      </div>
                      <div v-else>您已成为白金VIP</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="intro">拥有<span class="r-p-color">1枚</span>为<span class="r-p-color">青铜VIP</span>,拥有<span
                  class="r-p-color">3枚</span>为<span class="r-p-color">白银VIP</span>,拥有<span
                  class="r-p-color">6枚</span>为<span class="r-p-color">黄金VIP</span> ,拥有<span class="r-p-color">9</span>枚为<span
                  class="r-p-color">白金VIP</span>
              </div>
              <div class="intro">
                One RVIP=Bronze VIP；Three RVIP=Silver VIP；Six RVIP=Golden VIP；Nine RVIP=Platinum VIP
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="vip-table">
        <div class="vip-table-title">
          <div class="name">
            My RVIP Token <span class="erc-info">ERC721</span>
          </div>
          <el-button class="button-view" @click="showExpired=true"> 已过期</el-button>
        </div>
        <el-table
            border
            :data="vipTokenArr"
            v-loading="isLoadingT"
        >
          <el-table-column
              label="#"
              type="index">
          </el-table-column>
          <el-table-column
              prop="tokenId"
              label="令牌编号"
              width="130">
            <div slot-scope="scope" style="display: flex;align-items: center;">
              <img src="../../assets/img/VIP.png" alt="">
              rbVIP-{{ scope.row.tokenId }}
            </div>
          </el-table-column>
          <el-table-column
              prop="creatorName"
              label="初始生成者"
          >
          </el-table-column>
          <el-table-column
              prop="ownerName"
              label="现在持有者">
          </el-table-column>
          <el-table-column
              label="生成时间"
              width="120">
            <template slot-scope="scope">
              {{ scope.row.created_at |formatDate }}
            </template>
          </el-table-column>

          <el-table-column
              label="到期时间"
              width="120">
            <template slot-scope="scope">
              {{ scope.row.expireTime|formatDate }}
            </template>
          </el-table-column>

          <el-table-column
              label="剩余天数">
            <div slot-scope="scope">
              {{ scope.row.remaining }}
            </div>
          </el-table-column>
          <el-table-column
              label="历史成交信息" width="120px">
            <template slot-scope="scope" v-if="scope.row.type!=6">
              <el-button class="button-view" size="mini" @click="check(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>

      <div class="vip-right">
        <div class="title">
          <img src="../../assets/img/vip_right_x.png" alt="">
          <span style="font-weight: bold;color:#E1BF2D;font-size: 18px">RBT全球VIP生态居民8项基础权益</span>
          <img src="../../assets/img/vip_right_x.png" alt="">
        </div>
        <div class="content">
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon1.png" alt="">
            <div>RBT生态产品推广权益</div>
          </div>
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon2.png" alt="">
            <div>RBT生态居民专项基金奖励</div>
          </div>
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon3.png" alt="">
            <div>优质资产优先认购权益</div>
          </div>
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon4.png" alt="">
            <div>优质项目优先投资权益</div>
          </div>
        </div>
        <div class="content">
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon5.png" alt="">
            <div>私密高端圈层权益</div>
          </div>
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon6.png" alt="">
            <div>线下沙龙权益</div>
          </div>
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon7.png" alt="">
            <div>优质项目空投权益</div>
          </div>
          <div class="vip-right-item">
            <img src="../../assets/img/vip_icon8.png" alt="">
            <div>其他各项专项权益</div>
          </div>
        </div>
      </div>
    </div>
    <!--    购买记录弹窗-->
    <el-dialog
        title="购买记录"
        :visible.sync="showRecord"
        width="30%"
    >
      <div class="buyVip-record">
        <div class="record-item" v-for="(item,index) in vipTokenArr" :key="index">
          <div class="content">
            <div class="time">购买时间：{{ new Date(item.created_at) | formatDate }}</div>
            <div>令牌编号：{{ item.tokenId }}</div>
            <div>
              剩余天数：
              {{ Math.round((new Date(item.expireTime,).getTime() - new Date()) / (24 * 3600 * 1000)) }}
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <!--    过期令牌弹窗-->
    <el-dialog
        title="过期令牌"
        :visible.sync="showExpired"
        width="30%"
    >
      <div class="buyVip-record">
        <div class="record-item" v-for="(item,index) in expiredVipTokenArr" :key="index">
          <div class="content">
            <div>令牌编号：{{ item.tokenId }}</div>
            <div class="time">过期时间：{{ item.expireTime | formatDate}}</div>
          </div>
        </div>
      </div>
    </el-dialog>
    <!--  代币历史信息-->
    <TransferLogs v-model="isShowHistory" :transfer-record="transferRecord" :params="logParams"></TransferLogs>
  </div>
</template>

<script>
import header from "../static/img/img.png"
import {mapGetters} from "vuex";
import goldB from "../static/img/gold_b.png"
import silverB from "../static/img/silver_b.png"
import normalB from "../static/img/normal_b.png"
import platinumB from "../static/img/platinum_b.png"
import goldL from "../../assets/img/gold.png"
import silverL from "../../assets/img/silver.png"
import normalL from "../../assets/img/normal.png"
import platinumL from "../../assets/img/platinum.png"
import TransferLogs from "@/components/dialogs/TransferLogs";
import addressArr from "@/utils/address.json"

export default {
  name: "myVip",
  components: {TransferLogs},
  data() {
    return {
      isLoadingT: false,


      header: header,
      currentVip: 0,
      logoArr: [normalL, silverL, goldL, platinumL],
      nftName: ['青铜', '白银', '黄金', '钻石'],
      currentLevel: 0,
      backgroundArr: [normalB, silverB, goldB, platinumB],
      isLoading: false,
      isShowHistory: false, // 令牌历史
      showRecord: false,//兑换记录 是否显示
      showExpired: false,//过期令牌 是否显示
      balance: 0,
      amount: 0,
      RBTVIP: 0,
      curCoin: 'USDT',
      logParams: { //查询代币历史参数
        contractName: "RainbowRbtVip",
        eventName: "Transfer",
      },
      transferRecord: []
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    records() {
      return this.$store.state.rbtVip.records
    },
    nickName() {
      return this.$store.state.rainbow.nickName
    },
    vipTokenArr() {
      let arr =   []
      this.$store.state.rbtVip.vipTokenArr.forEach(element => {
        let dt1 = new Date(element.created_at);
        dt1.setFullYear(dt1.getFullYear() + 1)
        element.expireTime = dt1;
        if (new Date(element.expireTime).getTime() - new Date() > 0){

          element.remaining = Math.round((new Date(element.expireTime).getTime() - new Date()) / (24 * 3600 * 1000));
          arr.push(element)
        }
      });
      return arr
    },
    expiredVipTokenArr() {
      let arr = []
      arr = this.$store.state.rbtVip.vipTokenArr.filter(element => {
        const dt1 = new Date(element.created_at);
        dt1.setFullYear(dt1.getFullYear() + 1)
        element.expireTime = dt1
        if (parseInt(new Date(element.expireTime).getTime() - new Date() ) < 0){
          element.expireTime = dt1;
          return element
        }
      });
      return arr
    },
  },
  mounted() {
    this.initData()
  },
  methods: {
    check(row) { //查看令牌交易历史
      this.isShowHistory = true
      this.logParams.filter = {
        tokenId: row.tokenId,
      }
      this.transferRecord = []
      this.$store.dispatch("rbtVip/getTransferRecord", row.tokenId).then(res => {
        this.transferRecord = res
      })
    },
    initData() {
      this.$store.dispatch("RainbowRbtVip/getVipRecord")
      this.isLoadingT = true
      if (this.account && this.isConnected) {
        this.$store.dispatch("RainbowRbtVip/getVipLevel", this.account.toString()).then(res => {
          if(res>0){
            this.currentLevel = res-1;
          }
          this.isLoadingT = false
        });

        this.$store.dispatch("RainbowRbtVip/balanceOf", this.account.toString()).then(res => {
          this.RBTVIP = res>9?9:parseInt(res);
          this.isLoadingT = false
        });
      }
    },
    buyVip() {
      if (!this.isConnected) {
        this.$message.error("请连接账户")
        return
      }
      if (this.amount <= 0) {
        return
      }
      this.$store.dispatch("erc20/allowance", {
        owner: this.account,
        coinName: 'RBTEX',
        contractName: 'RainbowRbtVip'
      }).then(res => {
        if (res < this.amount) {
          this.isLoading = true
          this.$store.dispatch("erc20/approve", {
            contractName: 'RainbowRbtVip',
            coinName: 'RBTEX',
            amount: (this.amount * 10 ** 12).toString()
          }).then(() => {
            this.isLoading = false
            this.handleBuyVip()
          }).catch(err => {
            this.isLoading = false
            console.log(err)
          })
          return
        }
        this.handleBuyVip()
      });
    },
    handleBuyVip() {
      this.$store.dispatch("RainbowRbtVip/exchangeVip", {
        vipNumber: this.amount,
        token: addressArr["RBTEX"] //"0x7020df70444127B4EdF07812E35831Ae0A051A53"
      }).then(() => {
        this.isLoading = false
        this.$message.success("认购成功")
        this.initData()
      }).catch((err) => {
        this.isLoading = false
        this.$message.error("认购失败" + err)
      })
    }
  },
  watch: {
    account() {
      this.initData()
    }
  }
}
</script>

<style lang="scss" scoped>
.buy-vip {
  .seedSub-panel-header {
    display: flex;
    justify-content: space-between;
  }

  .vip-right {
    padding: 20px 16%;

    .content {
      display: flex;
      justify-content: space-between;
      padding: 14px 0;

      .vip-right-item {
        width: 160px;
        text-align: center;

        > div {
          margin-top: 8px;
        }
      }
    }

    .title {
      line-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .vip-list {
    background: #fff;
    width: 1200px;
    margin: 0 auto;
    border-radius: 30px;

    .vip-list-header {
      .vip-panel-bg {
        width: 100%;
      }

      .vip-panel {
        position: relative;
        height: 270px;
        width: 100%;
        left: calc(50% - 600px);
        z-index: 1;

        .panel-content {
          height: 100%;
        }

        .my-info {
          height: 80px;

          .header-box {
            width: 62px;
            height: 62px;
            border-radius: 31px;
            position: relative;
            left: calc(50% - 25px);

            .header {
              margin-top: -50px;
              width: 60px;
              height: 60px;
              border-radius: 30px;
            }
          }

          .name {
            margin-top: 10px;
            margin-left: 12px;
            font-weight: bold;
          }
        }

        .bottom {
          padding: 0px 20px;

          .detail {
            display: flex;
            justify-content: center;

            .vip-gold-logo {
              width: 30px;
              height: 30px;
              margin: 0 6px;
            }

            .vip-info {
              img {
                width: 30px;
              }
            }
          }

          .intro {
            padding-top: 12px;
            text-align: center;
            font-weight: bold;
            color: #d2277c;
          }
        }


        .info-me {
          font-size: 12px;
          margin-left: 12px;
          background: linear-gradient(225deg, #7700ff, #ff3b3b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .vip-user-infobox {
          height: 30px;
          border-radius: 15px;
          overflow: hidden;
          padding: 1px;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);

          .info-box {
            border-radius: 15px;
            height: 100%;
            width: 100%;
            background: linear-gradient(90deg, rgba(255, 255, 250, 0.8) 0%, rgba(250, 250, 250, 0.8) 64%, rgba(250, 250, 250, 0.8) 100%);

            .info {
              top: 6px;
              padding: 0 20px;
              font-size: 12px;
              position: relative;
              text-align: center;
              line-height: 20px;
              background: linear-gradient(225deg, #7700ff, #ff3b3b);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              overflow: hidden;
              border-radius: 16px;

            }
          }
        }
      }
    }
  }

  .vip-table {
    width: 950px;
    margin: 0px auto 20px;
    padding: 0 20px;

    .vip-table-title {
      display: flex;
      justify-content: space-between;
      height: 40px;
      align-items: center;

      .name {
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        color: #333333;
        line-height: 28px;
      }
    }
  }

  .buyVip-record {
    max-height: 430px;
    overflow: auto;

    .record-item {
      padding: 10px;
      margin-top: 20px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0px 3px 10px 0px rgba(48, 48, 77, 0.08);

      .time {
        padding: 10px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
