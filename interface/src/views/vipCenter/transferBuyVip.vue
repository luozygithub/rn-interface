<template>
  <div class="transferBuyVip">
    <singleNav style="width: 1200px;margin: 20px auto" :nav-list="navList" v-model="activeIndex"/>

    <!--    我的令牌-->
    <RainbowPanel class="rainCard-box" v-show="activeIndex==0">
      <template v-slot:name>
        <div class="seedSub-panel-header">
          <span>VIP令牌转让</span>
          <span class="erc-info">ERC721</span>
        </div>
      </template>

      <template v-slot:content>
        <div class="search-word">
          <div>
            <el-select v-model="selectContent" size="mini"
                       placeholder="请选择">
            </el-select>
            <el-select v-model="selectContent" size="mini"
                       placeholder="请选择">
            </el-select>
            <el-select v-model="selectContent" size="mini"
                       placeholder="请选择">
            </el-select>
          </div>
          <el-input
              size="mini"
              placeholder="搜索"
              suffix-icon="el-icon-search"
              v-model="searchContent">
          </el-input>
        </div>

        <div class="table-data" style="width:100%">
          <el-table
              :data="vipTokenArr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              border
              style="width: 100%">

            <el-table-column
                label="令牌编号"
                align="center"
                width="160"
            >
              <div slot-scope="scope" style="display: flex;align-items: center;">
                <div class="idx">{{scope.$index + 1}}</div>
                <img style="width: 24px;" src="../../assets/img/VIP.png" alt="">rbVIP-{{ scope.row.tokenId }}
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
            >
              <template slot-scope="scope">
                {{ new Date(scope.row.crtTime * 1000) | formatDate }}
              </template>
            </el-table-column>
            <el-table-column
                label="到期时间"
                width="120">
              <template slot-scope="scope">
                {{ new Date(scope.row.crtTime * 1000 + 31536000000)  | formatDate }}
              </template>
            </el-table-column>

            <el-table-column
                label="剩余天数">
              <div slot-scope="scope">
                {{ parseInt(((new Date()).getTime() + 31536000000 - scope.row.crtTime * 1000) / 86400000) }}
              </div>
            </el-table-column>
            <el-table-column
                label="历史成交信息" width="120px">
              <template slot-scope="scope" v-if="scope.row.type!=6">
                <el-button class="button-view" size="mini" @click="check(scope.row)">查看</el-button>
              </template>
            </el-table-column>
            <el-table-column label="选择">
              <template scope="scope">
                <div v-if="scope.row.status==0">
                  <el-checkbox v-model="myTokenTransferArr[scope.$index]"></el-checkbox>
                </div>
                <div v-else>
                  正在出售
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-button class="button1" size="small" @click="transferOpen">转让</el-button>
          <div style="text-align: center;margin-top: 30px;">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="vipTokenArr.length">
            </el-pagination>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <!--    转让市场-->
    <RainbowPanel class="rainCard-box" v-show="activeIndex==1">
      <template v-slot:name>
        <div class="seedSub-panel-header">
          <span>VIP令牌转让市场</span>
          <span class="erc-info">ERC721</span>
        </div>
      </template>

      <template v-slot:content>
        <div class="search-word">
          <div>
            <el-select v-model="selectContent" size="mini"
                       placeholder="请选择">
            </el-select>
            <el-select v-model="selectContent" size="mini"
                       placeholder="请选择">
            </el-select>
            <el-select v-model="selectContent" size="mini"
                       placeholder="请选择">
            </el-select>
          </div>
          <el-input
              size="mini"
              placeholder="搜索"
              suffix-icon="el-icon-search"
              v-model="searchContent">
          </el-input>
        </div>

        <div class="table-data" style="width:100%">
          <el-table
              :data="sellTokenArr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              border
              style="width: 100%">
            <el-table-column
                label="令牌编号"
                align="center"
                width="160"
            >
              <div slot-scope="scope" style="display: flex;align-items: center;">
               <div class="idx">{{scope.$index + 1}}</div>
                <img style="width: 24px;" src="../../assets/img/VIP.png" alt="">rbVIP-{{ scope.row.tokenId }}
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
            >
              <template slot-scope="scope">
                {{ new Date(scope.row.crtTime * 1000) | formatDate }}
              </template>
            </el-table-column>
            <el-table-column
                label="到期时间"
                width="120">
              <template slot-scope="scope">
                {{ new Date(scope.row.crtTime * 1000 + 31536000000)  | formatDate }}
              </template>
            </el-table-column>

            <el-table-column
                label="剩余天数">
              <div slot-scope="scope">
                {{ parseInt(scope.row.crtTime + 31536000000 - ((new Date()).getTime() * 1000) / 86400000) }}
              </div>
            </el-table-column>
            <el-table-column
                label="历史成交信息" width="120px">
              <template slot-scope="scope" v-if="scope.row.type!=6">
                <el-button class="button-view" size="mini" @click="check(scope.row)">查看</el-button>
              </template>
            </el-table-column>
            <el-table-column label="购买">
              <template slot-scope="scope">
                <el-button size="mini" class="button1" @click="buyVip(scope.row)">购买</el-button>
              </template>
            </el-table-column>
          </el-table>

          <div style="text-align: center;margin-top: 30px;">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 20, 40]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="sellTokenArr.length">
            </el-pagination>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <!-- 转让弹窗-->
    <el-dialog
        title="令牌转让发布"
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
            <span>rbVIP - {{ token.tokenId }}</span>
            <span>
               {{ parseInt(((new Date()).getTime() + 31536000000 - token.crtTime * 1000) / 86400000) }}天
            </span>
          </div>
          <div class="price-box">
            <span>价格</span>
            <div class="input-box">
              <el-input class="input2" size="mini" v-model="token.price"></el-input>
              <ChooseToken @changeToken="changeToken"></ChooseToken>
            </div>
          </div>
        </div>
        <div class="intro">
          转让成功后，将扣除您 <span class="r-p-color">5%</span>的平台服务费
        </div>
        <div class="operating">
          <el-button size="small" class="button3" @click="isShowTransfer=false">Cancel</el-button>
          <el-button size="small " class="button1" @click="transferVip">转让</el-button>
        </div>
      </div>
    </el-dialog>
    <!--  购买弹窗-->
    <el-dialog
        title="购买令牌确认"
        :visible.sync="isShowBuy"
        width="400px"
        class="transfer"
    >
      <div class="order">
        <div class="r-intro-box">
          <div>
            <span>编号</span>
            <span>{{ buyToken.tokenId }}</span>
          </div>
          <div>
            <span>初始生成者</span>
            <span>{{ buyToken.creatorName }}</span>
          </div>
          <div>
            <span>现在持有者</span>
            <span>{{ buyToken.ownerName }}</span>
          </div>
          <div>
            <span>生成时间</span>
            <span> {{ new Date(buyToken.crtTime * 1000) | formatDate }}</span>
          </div>
          <div>
            <span>到期时间</span>
            <span> {{ new Date(buyToken.crtTime * 1000 + 31536000000)  | formatDate }}</span>
          </div>
          <div>
            <span>剩余天数</span>
            <span> {{ parseInt(((new Date()).getTime() + 31536000000 - buyToken.crtTime * 1000) / 86400000) }}</span>
          </div>
        </div>

        <div class="operating">
          <el-button size="small" class="button3" @click="isShowBuy=false">Cancel</el-button>
          <el-button size="small " class="button1" @click="subBuy">确认购买</el-button>
        </div>
      </div>
    </el-dialog>
    <!--  代币历史信息-->
    <TransferLogs v-if="isConnected" v-model="isShowHistory" :transfer-record="transferRecord" :params="logParams"></TransferLogs>
  </div>
</template>


<script>
import {mapGetters} from 'vuex'
import abi from "@/utils/abiUtil";
import TransferLogs from "@/components/dialogs/TransferLogs";
export default {
  name: "transferBuyVip",
  components:{
   TransferLogs
  },
  data() {
    return {
      currentPage:1, //初始页
      pagesize:5,    //    每页的数据
      isShowHistory:false,//代币历史弹窗
      activeIndex: 0,
      myTokenTransferArr: [], //转让数组
      transferTokenInfo: {
        arr: []
      }, // 转让对象
      buyToken: {//购买令牌对象
      },
      transferRecord:[],//代币历史信息
      navList: [{
        name: '卖',
        index: 0
      }, {
        name: '买',
        index: 1
      }],
      isShowTransfer: false,//发布弹窗
      isShowBuy: false,//购买弹窗
      selectContent: '',
      searchContent: '',
      selectIndex: null,
      total: 1000,
      current_change: [],
      logParams:{
        contractName: "RBTVIP",
        eventName: "Transfer",
      }
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    vipTokenArr() {
      return this.$store.state.rbtVip.vipTokenArr
    },
    sellTokenArr() {
      return this.$store.state.rbtVip.sellTokenArr
    }
  },
  mounted() {
    if (!this.isConnected) {
      this.$message("请先连接钱包");
      return;
    }

    this.initData()
  },
  watch: {
    account() {
      this.initData()
    },
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    transferOpen() {//打开转让弹窗
      this.isShowTransfer = true
      this.transferTokenInfo = {number: 0, arr: []}
      this.myTokenTransferArr.forEach((item, index) => {
        if (item) {
          this.transferTokenInfo.number++
          this.transferTokenInfo.arr.push(this.vipTokenArr[index])
        }
      })
    },
    async check(row) {//查看历史信息
      this.isShowHistory = true
      this.logParams.filter = {
        tokenId : row.tokenId,
      }
    },
    changeToken(param) {
      console.log(param)
    },
    async transferVip() { //转让
      let params = []
      for (let i = 0; i < this.transferTokenInfo.arr.length; i++) {
        let token = this.transferTokenInfo.arr[i]
        if (!(token.price > 0)) {
          this.$message.error("请填写价格")
          return
        }
        const address = abi.getContractAddress("USD")

        params={
          tokenId: token.tokenId,
          price: token.price,
          token: address
        }
        await this.$store.dispatch("erc721/allowance", {
          tokenId: token.tokenId,
          coinName: "RBTVIP",
          contractName: "RBTVIP"
        }).then(async res => {
          if (!res) {
            this.isLoading = true
            await this.$store.dispatch("erc721/approve", {
              contractName: 'RBTVIP',
              coinName: "RBTVIP",
              tokenId: token.tokenId
            }).then(() => {
              this.handleTransfer(params)
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
        this.handleTransfer(params)
      }

    },
    handleTransfer(params) {
      this.$store.dispatch("rbtVip/saleVip", params).then(() => {
        this.isShowTransfer = false
        this.$message.success("已成功转让到市场")
        this.initData()
      })
    },
    initData() {
      this.$store.dispatch("rbtVip/vipArray")
      this.$store.dispatch("rbtVip/sellArray")
    },
    buyVip(row) {
      this.isShowBuy = true
      this.buyToken = row
    },
    subBuy() {
      this.$store.dispatch("rbtVip/transferVip", {
        tokenId: this.buyToken.tokenId,
        token: abi.getContractAddress("USD")
      }).then((res) => {
        if (res != null) {
          this.$message.success("购买成功！")
          this.isShowBuy = false
          this.initData()
        }
      });
    },
    goTo(src) {
      this.$router.push(src);
    }
  }
}
</script>

<style lang="scss" scoped>
.transferBuyVip {
  .button1{
    box-shadow: 0px 2px 5px 0px rgba(128,4,149,0.30);
  }
  .search-word {
    margin-top: 12px;
    padding-bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .el-select {
      margin-left: 10px;
      width: 100px;

      ::v-deep .el-input__inner {
        border-radius: 26px;
        background: #ece8f6;

        &::placeholder {
          color: #4a1fac;
        }
      }
    }

    .el-input {
      width: 280px;

    }
  }

  .table-data {
    .button1 {
      float: right;
    }
  }

  .transfer {
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
      margin-top: 10px;

      .el-button {
        width: 150px;
      }
    }
  }
}
</style>
