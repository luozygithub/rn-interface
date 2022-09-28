<template>
  <div class="exchange-card">
    <div class="exchange-card-header">
      <div class="exchange-card-name">
        {{cardName}}
      </div>
      <div class="record">
        record
      </div>
    </div>
    <div class="exchange-card-content">
      <div class="slippage" style="position: relative" v-if="type=='consensus'">
        <el-button @click="isShowSet=!isShowSet" class="setting">
          <strong><i class="el-icon-setting"></i> Settings</strong>
        </el-button>
        <div
            class="set-dialog"
            @click.stop
            :style="isShowSet?'display:block':'display:none'"
        >
          <div>滑点价格
            <el-tooltip effect="dark" class="item" placement="bottom">
              <i class="el-icon-question"></i>
              <div slot="content">为保证更高的兑换效率，滑点设置最低<br/>
                100% ，实际兑换价格在 100% 范围内<br/>
                都予以成交, 超过100%以设置实际滑<br/>
                点价格为准
              </div>
            </el-tooltip>
          </div>
          <div style="margin-top: 10px;text-align: center">
            <el-radio-group size="small" v-model="slipPrice">
              <el-radio-button label="2" value="2" border>100%</el-radio-button>
              <el-radio-button label="2.5" value="2.5" border>150%</el-radio-button>
              <el-radio-button label="3" value="3" border>200%</el-radio-button>
              <el-radio-button label="0" value="0" border>默认</el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 30px;">
            <el-button @click="isShowSet = false" style="width: 100%;" class="button1">确定</el-button>
          </div>
        </div>
      </div>
      <div class="exchange">

        <div class="part1">
          <div class="floor1">
            <strong style="color: #333">FROM</strong>
            <span style="color:#B0B0B0">Balance:<span>{{ balance ? balance : 0 | formatNumberTo }}</span>
                </span>
          </div>
          <div class="floor2">
            <div>
              <div class="coin-choose" v-if="type=='seedSub'||type=='consensus'">
                <img src="@/assets/img/DAI.png" alt="">
                <div class="name">
                  {{ chooseName }}
                </div>
              </div>
              <div class="coin-choose" v-if="type=='seedExc'">
                <img src="@/assets/img/SEED.png" alt="">
                <div class="name">
                  RBT-Seed
                </div>
              </div>
              <div class="coin-choose" v-if="type=='contribution'">
                <img src="@/assets/img/RBD.png" alt="">
                <div class="name">
                  RBD
                </div>
              </div>
              <div class="coin-choose" v-if="type=='invite'">
                <img src="@/assets/img/EX.png" alt="">
                <div class="name">
                  RBT-EX
                </div>
              </div>
            </div>
            <div class="value-box">
              <el-input type="number" :class="{'is-zero':amount==0}" class="input2" v-model="amount"/>
              <el-button size="mini" class="max-button" @click="handleMax">max</el-button>
            </div>
          </div>
        </div>
        <div class="arrow">
          <i class="el-icon-bottom"></i>
        </div>
        <div class="part2">
          <div class="floor1">
            <strong style="color: #333">TO</strong>
            <span></span>
          </div>
          <div class="floor2">
            <div class="coin-choose" v-if="type=='seedSub'">
              <img src="@/assets/img/SEED.png" alt="">
              <div class="name">
                RBT-Seed
              </div>
            </div>
            <div class="coin-choose" v-if="type=='seedExc'||type=='contribution'||type=='consensus'||type=='invite'">
              <img src="@/assets/img/RBT.png" alt="">
              <div class="name">
                RBT
              </div>
            </div>

            <div class="value-box">
              <span class=" amount" :class="{'is-zero':amount==0}">{{ excNumber }}</span>
            </div>
          </div>
        </div>
        <el-button  class="button1" :class="{'disabled':allowanceNumber>amount}" :loading="isLoading"
                   :disabled="allowanceNumber>amount" @click="approve">
          {{ isLoading ? '授权中' : '授权' }}
        </el-button>
        <el-button style="margin-left: 0px" class="button1" :class="{'disabled':amount<=0||isLoading}" :loading="isLoading"
                   :disabled="amount<=0||isLoading" @click="exchange">
          {{ isLoading ? '授权中' : '购买' }}
        </el-button>
      </div>
    </div>
    <!--    兑换记录-->
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
              <img src="@/assets/img/SEED.png" alt="">
              <strong class="r-p-color">{{ allUsdAmount |formatNumberTo }}</strong> RBT-Seed
            </div>
          </div>
          <div>
            <strong>消耗总量：</strong>
            <div class="coin-info">
              <img src="@/assets/img/DAI.png" alt="">
              <strong class="r-p-color">{{ allAmount  |formatNumberTo }}USDT</strong>
            </div>
          </div>
        </div>
        <div class="record-box">
          <div class="record" v-for="(record,index) in records" :key="index">
            <div class="record-time">
              {{ new Date(record.time * 1000) | formatDate }}
            </div>
            <div class="record-content">
              <div>
                <div>使用：</div>
                <div><img class="icon" src="@/assets/img/SEED.png" alt="">{{ record.amount / 10 ** 18 }}USD</div>
                <div>≈{{ 6.6 * record.price }}</div>
              </div>
              <div>
                <div>兑换：</div>
                <div>
                  <img class="icon" src="@/assets/img/RBT.png" alt=""> {{
                    record.amount / 10 ** 18 / record.price
                  }}RBT-SEED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ExchangeCard",
  props: ["type","balance","curRate","handleExchange","handleApprove","cardName","rbtPirce","allowanceNumber"],
  data() {
    return {
      slipPrice: 2,
      isShowSet: false,
      records: [],
      amount: 0,
      isLoading: false,
      showRecord: false,
      excNumber: 0,
      chooseName: "USD",
      allUsdAmount: 0,
      allAmount: 0
    }
  },
  methods: {
    approve(){
      if (!this.isConnected) {
        this.$message("请先连接账户")
        return
      }
      this.$emit("handleApprove")
    },
    exchange(){
      if (!this.isConnected) {
        this.$message("请先连接账户")
        return
      }

      if (!this.amount || this.amount == 0) {
        this.$message("输入数值有误！");
        return;
      }
      this.$emit("handleExchange",{amount:this.amount ,slipPrice:this.slipPrice})
    },
    handleMax() {
      if (this.balance > 10000) {
        this.amount = this.$decimal(1000000).div( this.rbtPirce).mul(100)
      } else {
        this.amount = this.balance
      }
    },

  },
  computed:{
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  watch:{
    amount() {
      console.log(this.rbtPirce)
      this.rbtPirce > 0 ? this.excNumber = this.$decimal(this.amount).div( this.rbtPirce).mul(100) : this.excNumber = this.$decimal(this.amount).mul(10);
    },
  }
}
</script>

<style lang="scss" scoped>
// 兑换样式
.exchange-card {
  margin: 20px auto;
  width: 360px;
  border-radius: 11px;
  text-align: left;
  box-shadow: 0px 30px 30px 3px rgba(156, 156, 156, 0.15);
  .exchange-card-header{
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg,#12c2e9 0%, #c471ed 64%, #f64f59 100%);
    border-radius: 10px 10px 0px 0px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .exchange-card-name{
      font-size: 18px;
      text-transform: uppercase;
    }
    .record{
      width: 80px;
      height: 32px;
      background: rgba(255,255,255,0.10);
      border: 1px solid #ffffff;
      border-radius: 10px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
    }
  }
  .exchange-card-content{
    padding: 20px;
    .slippage{
      .setting{
        color: #DB1F7E;
      }
    }
    .exchange {
      padding-top: 10px;

      .exchange-header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .exchange-round {
          width: 90px;
          height: 25px;
          font-size: 18px;
          font-weight: 500;
          text-align: left;
          color: #a519bb;
          line-height: 21px;
        }

        .record-button {
          width: 60px;
          height: 28px;
          font-size: 12px;
          border: 1px solid rgba(165, 25, 187, 0.50);
          border-radius: 10px;
          padding: 6px 12px !important;
          color: #a519bb;
        }
      }

      .part1, .part2 {
        margin: 0 auto;
        width: 326px;
        height: 90px;
        opacity: 1;

        .floor1, .floor2,.floor2 .value-box, .floor2 .coin-choose{
          display: flex;
          justify-content: space-between;
        }

        .floor1 {
          padding-bottom: 10px;
        }

        .floor2 {
          align-items: center;
          background: #f8f8f8;
          border-radius: 10px;
          box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.01);
          padding: 10px;
          border: 1px solid #eaeaea;

        }
      }

      > .button1 {
        width: 100%;
        height: 48px;
        border-radius: 10px;
        margin-top: 20px;
        color: white;
        margin-bottom: 8px;
      }

      .arrow {
        width: 40px;
        height: 40px;
        background: #f8f8f8;
        border: 1px solid #eaeaea;
        border-radius: 50%;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        margin: 14px auto;
      }

      .input2 {
        font-size: 20px;
        font-weight: bold;
        line-height: 30px;

        ::v-deep.el-input__inner {
          padding-left: 6px;
        }
      }

      .value-box {
        flex: 1;
        background: white;
        border-radius: 5px;
        padding: 0 6px;
        line-height: 40px;
        margin-left: 10px;
        .max-button{
          width: 40px;
          height: 30px;
          background: linear-gradient(90deg,#12c2e9, #c471ed 53%, #f64f59);
          border-radius: 5px;
          color: white;
          text-align: center;
          padding: 0;
          margin-top: 6px;
          box-shadow: 0px 3px 6px 0px rgba(128,4,149,0.30);
          &:active{
            transform: translate(2px,1px);
          }
        }
        .button1 {
          margin-top: 6px;
          width: 40px;
          height: 26px;
          border-radius: 6px;
          padding: 0 !important;
        }

        .amount {
          font-size: 20px;
          color: #333;
          max-width: 200px;
          overflow: hidden;
          padding-left: 6px;

          &.is-zero {
            color: #bbb;
          }
        }
      }

      .coin-choose {
        font-weight: bold;
        cursor: pointer;
        width: 110px;
        align-items: center;
        justify-content: space-around;
        line-height: 40px;

        .name {
          width: 80px;
          text-align: center;
        }

        img {
          width: 26px;
          height: 26px;
        }
      }


      > span:nth-child(1) {
        width: 38px;
        height: 19px;
        font-size: 16px;
        font-family: Roboto, Roboto-Bold;
        font-weight: 700;
        line-height: 19px;
      }

    }
  }
}

</style>
