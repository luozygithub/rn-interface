<template>
  <!--  城市节点令牌申请-->
  <div class="cityNodeToken">
    <singleNav style="width: 1200px;margin: 20px auto" :nav-list="navList" v-model="activeIndex"/>
    <div class="applyPanel" v-show="activeIndex==0">
      <RainbowPanel>
        <template v-slot:name>
          城市节点令牌申请 <span class="erc-info">ERC721</span>
        </template>
        <template v-slot:content>
          <el-table
              ref="multipleTable"
              :data="communityTokenArr"
              v-loading="isLoadingT1"
              :default-sort="{prop: 'tokenId', order: 'ascending'}"
          >
            <el-table-column label="我的令牌" width="160">
              <template slot-scope="scope">
                <div class="idx">{{scope.$index}}</div>
                <div class="coin-info">
                  <img class="token-icon" :src="getImgByType(scope.row.type)" alt="">
                  {{ scope.row.type }}
                </div>
              </template>
            </el-table-column>
            <el-table-column
                prop="tokenId"
                label="令牌编号"
            >
            </el-table-column>
            <el-table-column
                label="初始生成人"
                prop="owner"
            >
            </el-table-column>
            <el-table-column
                prop="owner"
                label="现在持有人"
            >
            </el-table-column>


            <el-table-column
                prop="usedAmount"
                label="共生成城市 节点令牌数量"
            >
              <template slot="header">
                <div style="text-align: center">
                  共生成城市<br/>节点令牌数量
                </div>
              </template>
              <div slot-scope="scope">
                {{ scope.row.totalToken | formatNumber}}
              </div>
            </el-table-column>
            <el-table-column
                label="可生成城市 节点令牌数量"
            >
              <template slot="header">
                <div style="text-align: center">
                  可生成城市<br/>节点令牌数量
                </div>
              </template>
              <div slot-scope="scope">
                {{ scope.row.amount  }}
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
                  new Date((new Date(scope.row.created_at)).getTime() + (2592000 * 12) * 10 ** 3) | formatDate
                }}
              </div>
            </el-table-column>
            <el-table-column
                prop="expireTime"
                label="剩余天数">
              <div slot-scope="scope">
                {{ parseInt((new Date(scope.row.created_at).getTime() - new Date().getTime()) / 86400000)  + 364}}
              </div>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="申请"
            >
              <template scope="scope">
                <el-button  class="button1" size="mini" @click="applyToken(scope.row)">申请</el-button>
              </template>
            </el-table-column>

          </el-table>
        </template>
      </RainbowPanel>
      <RainbowPanel class="my-token">
        <template v-slot:name>
          <div class="header">
            <div class="name">我的城市节点令牌<span class="erc-info">ERC721</span></div>
            <el-button  class="button-view"  size="mini" @click="isShowRecord = true">已过期</el-button>
          </div>
        </template>
        <template v-slot:content>
          <el-table :data="cityNodeArr" stripe v-loading="isLoadingT2">
            <el-table-column label="令牌编号" width="160" align="center">
              <template slot-scope="scope">
               <div class="idx">{{scope.$index +1 }}</div>
                <span>RBT-Citynode-{{ scope.row.tokenId }}</span>
              </template>
            </el-table-column>
            <el-table-column label="初始生成人">
              <template slot-scope="scope">
                <span>{{ scope.row.creater }}</span>
              </template>
            </el-table-column>
            <el-table-column label="现在持有人">
              <template slot-scope="scope">
                <span>{{ scope.row.owner }}</span>
              </template>
            </el-table-column>
            <el-table-column label="  初始生成的  社区治理令牌">
              <template slot="header">
                <div style="text-align: center">
                  初始生成的<br/>社区治理令牌
                </div>
              </template>
              <div slot-scope="scope">
                {{scope.row.tokenType }}
              </div>
            </el-table-column>
            <el-table-column label="申请城市节点">
              <template slot-scope="scope">
                <el-button size="mini" class="button1" @click="$router.push({name:'nodeList',params:scope.row})">申请</el-button>
              </template>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="转让"
            >
              <template scope="scope">
                <el-checkbox v-model="myTokenTransferArr[scope.$index]"></el-checkbox>
              </template>
            </el-table-column>
          </el-table>
          <el-button size="mini" class="button1" style="float:right;margin-bottom: 10px;" @click="transferOpen"> 转让</el-button>
        </template>
      </RainbowPanel>
    </div>
    <div class="marketPanel" v-show="activeIndex==1">
      <marketPanel></marketPanel>
    </div>

    <!--    申请弹窗 =》 rbt-desposit 申请 社区令牌 -->
    <el-dialog width="400px" title="城市节点令牌申请" :visible.sync="dialogFormVisible">
      <div class="transfer">
        <div class="r-intro-box">
          <div><span>令牌编号</span><span>{{ useToken ? useToken.id : 0 }}</span></div>
          <div><span>共生成城市节点数量</span><span>{{ useToken.totalToken }}</span></div>
          <div><span>可生成城市节点数量</span><span>{{ useToken.totalToken - useToken.createdToken }}</span></div>
          <div><span>剩余天数</span><span>    {{ (useToken.expireTimes - useToken.createTimes) / 86400 }}</span></div>
        </div>

        <div class="price-box">
          <span>生成数量</span>
          <div class="input-box">
            <el-input class="input2" size="mini" type="number" :min="0" @change="numberCheck"
                      v-model="amount"></el-input>
          </div>
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
        <div class="r-intro-box">
          <div>
            <span>转让数量</span>
            <span>{{ transferTokenInfo.number }} 枚</span>
          </div>
        </div>
        <div v-for="(token,index) in transferTokenInfo.arr" :key="index">
          <div class="tip">
            <span>RBT-Citynode - {{ token.tokenId }}</span>
            <span></span>
          </div>
          <div class="price-box">
            <span>价格</span>
            <div class="input-box">
              <el-input class="input2" size="mini" typr="number" v-model="token.price"></el-input>
              <ChooseToken @changeToken="changeToken"></ChooseToken>
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
          <div class="token"><img :src="tokens[item.type]" alt="">{{ item.type}}{{ item.code }}</div>
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
import {imgByType, tokenByType} from "@/utils/maps";
import marketPanel from "./marketPanel";
import {getCoinBalance} from "../../../api/goverbabce721"
import {getCitynode721List} from "../../../api/citynode721"
export default {
  name: "communityToken",
  components:{marketPanel},

  data() {
    return {
      activeIndex: 0, //nav
      navList: [{
        name: '申请',
        index: 0
      }, {
        name: '市场',
        index: 1
      }],
      useToken: {},//要用于兑换的令牌
      tokens: [elves, ambassador, partner, superNode],
      tokenType:['RBTElf','RBTEnvoy','RBTPartner','RBTNode'],
      isShowRecord: false,//是否显示过期令牌
      amount: 0,//兑换社区令牌数量
      overrage: 0,//rbt-deposit可用额度
      isShowTransfer: false,//是否显示转让弹窗
      myTokenTransferArr: [], //转让数组
      transferTokenInfo: {
        number: 0,
        arr: []
      },//转让令牌信息数组
      dialogFormVisible: false, //令牌兑换弹窗
      activeTokenAmount: '', //令牌可用于兑换的额度
      isLoadingT2:false,
      isLoadingT1:false,
      cityNodeArr:[],//城市节点令牌
      communityTokenArr:[],//社区治理令牌
      expiredTokenArr:[],//过期令牌
    }
  },

  created() {
    if (this.isConnected) {
      this.getData()
    }
  },

  methods: {
    viewHistory() {//查看历史信息

    },
    getImgByType(type){
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
     if(this.isConnected){
       this.getCityTokens()
       this.isLoadingT1=true
       await getCoinBalance().then(res=>{
         this.communityTokenArr = res
       })
       this.isLoadingT1 = false
     }
    },
    async getCityTokens(){
      this.isLoadingT2 = true
      await getCitynode721List().then(res=>{
        this.cityNodeArr = res
      })
      this.isLoadingT2 = false
    },
    changeToken(param) { //选择用哪种币去兑换
      console.log(param)
    },
    transferOpen() {//打开转让弹窗
      this.isShowTransfer = true
      this.transferTokenInfo = {number: 0, arr: []}
      this.myTokenTransferArr.forEach((item, index) => {
        if (item) {
          this.transferTokenInfo.number++
          this.transferTokenInfo.arr.push(this.cityNodeArr[index])
        }
      })
    },
    async transferToken() { //转让令牌
      let params = []
      for (let i = 0; i < this.transferTokenInfo.arr.length; i++) {
        let token = this.transferTokenInfo.arr[i]
        if (!(token.price > 0)) {
          this.$message.error("请填写价格")
          return
        }
        params.push({
          tokenId: token.tokenId,
          price: token.price,
        })
        await this.$store.dispatch("erc721/allowance", {
          tokenId: token.tokenId,
          coinName: "RbtCityNode",
          contractName: 'CityNodeTokenMarket'
        }).then(async res => {
          if (!res) {
            this.isLoading = true
            await this.$store.dispatch("erc721/approve", {
              contractName: 'CityNodeTokenMarket',
              coinName: "RbtCityNode",
              tokenId: token.tokenId
            }).then(() => {
              this.isLoading = false
            }).catch(() => {
              this.isLoading = false
              this.$message({
                type: 'error',
                message: '授权失败'
              })
            })
            return
          }
        });
        this.$store.dispatch("cityNodeTokenMarket/sell", params).then(() => {
          this.$message.success("已成功转让到市场")
          this.isShowTransfer=false
          this.getData()
        })
      }


    },
    applyToken(token) { //申请令牌
      this.dialogFormVisible = true
      this.useToken = token
    },
    handleApply() { //申请
      this.$store.dispatch("governanceTokenMarket/applyNode", {
        tokenId:parseInt(this.useToken.id),
        token: tokenByType[this.useToken.type],
        amount: parseInt(this.amount),
    }).then(res => {
        console.log(res)
        this.$message.success("兑换成功")
        this.getData()
        this.dialogFormVisible = false
      }).catch(err => {
        console.log(err)
        this.$message.error("兑换失败" + err)
      })
    },
    numberCheck() {//计算令牌数量不能超过可用余额
      this.overrage = (this.useToken.mortgageAmount - this.useToken.usedAmount) - this.amount
      if (this.overrage < 0) {
        this.$message.error("超出余额")
      }
    },
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
.cityNodeToken {
  margin: 0 auto;
  .button1{
    box-shadow: 0px 2px 5px 0px rgba(128,4,149,0.30);
  }
  .button-view{
    color:#736DFF;
    background: rgba(115,109,255,0.20);
    border: 1px solid rgba(115,109,255,0.20);
    border-radius: 21px;
  }
  .my-token {
    margin-top: 30px;
    .token-icon{
      width: 16px;
    }
    .token-name{
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

