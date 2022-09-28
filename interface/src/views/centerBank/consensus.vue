<template>
  <div class="consensus">
    <RainbowPanel class="rainCard-box">
      <template v-slot:name>
        <div class="seedSub-panel-header">
          <span>RBT共识挖矿矿池</span>
          <el-button class="button-view" size="mini">
            <i class="el-icon-time"></i>兑换记录
          </el-button>
        </div>
      </template>
      <template v-slot:content>
        <ExchangeCard type="consensus" cardName="兑换" :allowanceNumber="allowanceNumber"  :cur-rate="1212" @handleApprove="handleApprove" @handleExchange="handleExchange" :balance="balance" :rbt-pirce="rbtPirce"></ExchangeCard>
        <div class="rainCard">
          <div class="rainCard-header-info">
            <div>
              <span>矿池总数量</span>
              <span><strong>1.4B</strong> RBT</span>
            </div>
            <div>
              <span>矿池已挖数量</span>
              <span><strong>{{ digOutAmount |formatNumberTo }}</strong> RBT</span>
            </div>
            <div>
              <span>矿池剩余数量</span>
              <span><strong>{{ 14*10**8-digOutAmount |formatNumberTo }}</strong> RBT</span>
            </div>
            <div class="r-line" style="background: #eee">
            </div>
            <div>
              <span> <strong>第{{turn}}轮</strong>数量</span>
              <span><strong>500,000</strong> RBT</span>
            </div>
            <div>
              <span><strong>第{{turn}}轮</strong>剩余数量</span>
              <span><strong>{{turnAmount|formatNumberTo }}</strong> RBT</span>
            </div>
            <div>
              <span>单次限购</span>
              <span><strong>100 ～ 1,000,000</strong> RBT</span>
            </div>
          </div>


          <div class="rainCard-header-info">
            <div>
              <span style="color: #999999">Maximum price slippage</span>
              <strong>100%</strong>
            </div>
            <div>
              <span style="color: #999999">Gas price</span>
              <strong>100GWEI</strong>
            </div>
          </div>
          <div class="r-line" style="background: #eee;height: 2px;margin: 10px 0"/>
          <div class="introduction">
            <div style="display: contents">
              根据社区共识，全球通证交换，进行“共识挖矿”，一共分为 <span class="r-p-color">2000轮</span>，
              每轮 <span class="r-p-color">50万</span>枚RBT，整体 <span class="r-p-color">10亿</span>枚，
              RBT初始共识价格为 <span class="r-p-color">$0.4</span>，然后新一轮比旧一轮共识挖矿价格增加 <span class="r-p-color">$0.01</span>，
              直至2000轮结束，最高共识价格为 <span class="r-p-color">$20.4</span>
            </div>
          </div>
          <div class="show-card">
            <div class="wheel-list">
              <div class="curRate-row" :style="'left:'+ (((500000-1212 )/(500000) * 308) - 52 )+ 'px;top: 18px;'">
                <div class="row-content">
                  Remaining: {{ ((500000 - 12121) / (500000) * 100).toFixed(2) }}%
                </div>
              </div>
              <template v-for="(index) in 30">
                <div class="wheel-item" v-if="index> (round - 20) / 20 && index<( round - 20) / 20+20"
                     :class="{active: round +1==index}" :key="index">
                  <div class="wheel-active-background" v-if="round +1==index"
                       :style="'width:'+ 308*((500000-turnAmount)/(500000)) +'px;'"
                  ></div>
                  <div class="content">
                    <span style="color:#D2277C">{{ index }} Round Price: {{
                        (0.4 + (index - 1) * 0.005).toFixed(3)
                      }} USD</span>
                    <div v-if="(20 - 20) / 20 +1==index" style="margin: 0;color:#7700FF;">
                      {{ turnAmount.toFixed(2) | formatNumber }}
                    </div>
                    <div v-else style="margin: 0;color:#7700FF; font-weight: bold;">500,000</div>
                  </div>
                </div>
              </template>
              <div class="wheel-item-bottom"></div>
              <div class="wheel-item-bottom"></div>
            </div>
          </div>

          <div class="introduce r-intro-box">
            共识挖矿获取的RBT立即释放 <span class="r-p-color">20%</span> 数量到用户钱包为可用数量，剩余
            <span class="r-p-color">80%RBT</span>按年释放，一年
            <span class="r-p-color">365</span>天释放完毕，每天释放
            <span class="r-p-color">365分之一</span>，未释放额度可以通过RBT银行转换成固定期限锁仓的Token——RBT-Deposit，享受更多存款收益和社区治理收益。
          </div>
        </div>
        <div class="consensus-description">
          <h2> 共识挖矿资金说明 </h2>
          <div>
            共识挖矿交换资金分为三部分，<span class="r-r-color">10%</span> 用作推荐奖励，奖励给直接推荐人与间接推荐人，<span class="r-r-color">20%</span>
            以社区收入的形式分配给不同层级的社区治理DAO组织与彩虹城财政部。剩余<span class="r-r-color">70%</span>进入彩虹城基金会母基金。彩虹城基金会母基金资金由创始团队管理和使用，进行整个生态的建设与投资，通过投资不同的生态子项目，共建整个彩虹城生态。
          </div>
        </div>

        <div class="announcement">
          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                已挖出
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number">{{
                      userAmount | formatNumberTo
                    }} RBT</span>

                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                </div>
              </template>
            </SimplePanel>
          </div>

          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                锁定中
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number"> {{
                      1
                    }}RBT</span>

                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 | formatNumber }}</span>
                </div>
              </template>
            </SimplePanel>
          </div>
          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                已提取
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number"> {{
                      (1111) | formatNumberTo
                    }}   RBT</span>

                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                </div>
              </template>
            </SimplePanel>
          </div>

          <div class="announcement-item">
            <SimplePanel>
              <template v-slot:name>
                待提取
                <img src="../../assets/img/RBT.png" alt="">
              </template>
              <template v-slot:content>
                <div style="padding-bottom: 20px;">
                  数量
                  <span class="number">  {{
                      0 | formatNumberTo
                    }}RBT</span>

                </div>
                <div>
                  市值 <span style="padding-left: 8px;">${{ 60000000 |formatNumber }}</span>
                  <el-button size="mini" class="button1"
                             style="background:linear-gradient(90deg,#44dec5, #4ebcfa);float:right"
                             >提取
                  </el-button>
                </div>
              </template>
            </SimplePanel>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <!--    弹窗-->
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
              <strong class="r-p-color">{{ 0 |formatNumberTo }}</strong> RBT
            </div>
          </div>
          <div>
            <strong>消耗总量：</strong>
            <div class="coin-info">
              $ <strong class="r-p-color">{{ 0 |formatNumberTo }} </strong>USDT
            </div>

          </div>
        </div>
        <div class="record-box">
          <div class="record" v-for="(record,index) in records" :key="index">
            <div class="record-time">
              {{ 0 | formatDate }}
            </div>
            <div class="record-content">
              <div>
                <div>使用：</div>
                <div><img class="icon" src="../../assets/img/DAI.png" alt="">{{ 0 }}USD</div>
                <div>≈{{ 0 }}</div>
              </div>
              <div>
                <div>兑换：</div>
                <div><img class="icon" src="../../assets/img/RBT.png" alt=""> {{ 0 }}RBT</div>
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
        <span>可提取额度:{{ 0| formatNumberTo }}</span><br><br>
        <div>
          <el-button size="mini" >提取</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ExchangeCard from "@/components/ExchangeCard";
import {mapGetters} from "vuex";
import {RbConsensus,RBD } from "../../utils/address.json"
import addressArr from "@/utils/address.json"
export default {
  name: "consensus",
  components: {
    ExchangeCard
  },
  data() {
    return {
      rbtPirce:0,
      userAmount:0,
      turn:0,
      turnAmount:0,
      digOutAmount:0,
      round:0,//第几轮
      isLoading: false,// 是否正在交易
      gasPrice: 'Slow',//Gas价格
      slipPrice: 0, //滑点价格
      excDisabled: true,//是否可以点击按钮兑换
      showRecord: false,
      showExtract: false,
      allowance: 0,
      curCoin: "USDT",
      takeAmount: 0,
      isShowSet: false,//滑点设置
      records:[],
      balance:0,
      allowanceNumber:0,
    };
  },
  computed: {
    web3(){
      return this.$store.state.app.web3?this.$store.state.app.web3:{}

    },
    ...mapGetters([
      'web3',
      'isConnected',
      'account'

    ]),
  },

  created() {
    this.initData()
  },

  mounted() {

  },

  methods: {
    initData() {
      if (!this.isConnected) {
        return
      }
      this.$store.dispatch("RBD/allowance", {
        owner: this.account,
        spender:addressArr["RbConsensus"]
      }).then((res) => {
         this.allowanceNumber = res
      })
      this.$store.dispatch('RBT/balanceOf', RbConsensus).then((res) => {
        console.log(res)
      })
      this.$store.dispatch('consensus/getRbtPrice').then((res) => {
        console.log(res)
      })

      this.$store.dispatch('RBD/balanceOf', this.account).then((res) => {
        this.balance = parseInt(res) / 10 ** 18
      })
      this.$store.dispatch('RbConsensus/getUserAmount', this.account).then((res) => {
        this.userAmount = res / 10 ** 18
      })

      this.$store.dispatch('RbConsensus/getRbtRecord').then((res) => {
        console.log(res)
      })
      this.$store.dispatch('RbConsensus/getUserLockNum').then((res) => {
        console.log(res)
      })
      this.$store.dispatch('RbConsensus/digOutAmount').then((res) => {
        this.digOutAmount = res / 10 ** 18
        this.turnAmount = 500000 - this.digOutAmount % 500000
        console.log(this.turnAmount)
        this.turn = parseInt(this.digOutAmount / 500000) + 1
      })
    },
    handleApprove(){
      this.$store.dispatch("RBD/approve", {
        spender: addressArr["RbConsensus"],
        amount:this.web3.utils.toWei(( 10 ** 20).toString())
      }).then(() => {
        this.$message("授权成功")
        this.allowanceNumber = 10**22
      })
    },
    handleExchange({amount}) {
      this.getRbt(amount)
    },
    getRbt(amount) {
      this.$store.dispatch("RbConsensus/getRBT", {
        amount:this.web3.utils.toWei(amount),
        token:RBD,
        slip:0,
        tokenName:"RBD"
      }).then(() => {
        this.isLoading = false
        this.$message.success("兑换成功")
        this.initData()
      }).catch((err) => {
        this.isLoading = false
        this.$message.error("兑换失败" + err)
      });
    },
  },
  watch: {
    // amount() {
    //   if (this.amount <= 0) {

    //   } else {    //     this.excDisabled = true
    //     this.excDisabled = false
    //   }
    // },
    isConnected(){
      this.initData()
    },
    account() {

    },
  },
};
</script>

<style lang="scss">
.consensus {
  .wheel-list {
    height: 480px !important;
  }

  .setting {
    width: 326px;
    margin: 10px auto;
    background: #f8f8f8;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.01);
  }

  .set-dialog {
    padding: 20px;
    position: absolute;
    top: 50px;
    left: -10px;
    z-index: 1000;
    width: 360px;
    height: 290px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 11px;
    box-shadow: 0px 0px 15px 0px rgba(48, 48, 77, 0.10);
  }

  .introduction {
    display: contents !important;
    text-align: left !important;
  }

  .seedSub-panel-header {
    display: flex;
    justify-content: space-between;
  }

  .consensus-description {
    h2 {
      padding: 0px 0 20px 0;
      text-align: center;
    }

    text-align: left;
    width: 700px;
    border: 1px solid #d7e1ff;
    border-radius: 11px;
    padding: 20px;
    background: #fbfcff;
    margin: 50px auto 0;
  }

  .announcement {
    flex-wrap: wrap;
    padding: 20px 0 30px 0;
    display: flex;
    justify-content: space-between;

    .announcement-item {
      .simplePanel {
        width: 240px;

        .content {
          padding-top: 10px;
        }
      }

      .number {
        font-size: 20px;
        font-weight: bold;
        padding: 0 8px;
      }
    }

    .announcement-item:nth-child(1) {
      .header {
        background: linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
      }

      .number {
        background-image: -webkit-linear-gradient(311deg, #f7c598 6%, #ff8886 98%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .announcement-item:nth-child(2) {
      .number {
        background: linear-gradient(270deg, #736dff, #a97fff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .announcement-item:nth-child(3) {
      .header {
        background: linear-gradient(135deg, #f9b4bd, #9573db);
      }

      .number {
        background: linear-gradient(135deg, #f9b4bd, #9573db);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .announcement-item:nth-child(4) {
      .header {
        background: linear-gradient(90deg, #44dec5, #4ebcfa);
      }

      .number {
        background: linear-gradient(90deg, #44dec5, #4ebcfa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .announcement-item:last-child {
      margin-right: 0;
    }
  }

}
</style>
