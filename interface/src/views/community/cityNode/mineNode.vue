<template>
  <div class="mineNode">
    <div class="mine-node r-shadow">
      <div class="nodeLH_background">
        <div class="right-btn">

          <div class="btn-check" @click="isShowCheckNode=true">
            切换节点
          </div>
        </div>
      </div>
      <div class="node-info">
        <div class="header-img">
          <img src="@/views/static/img/img.png" alt="">
        </div>
        <div class="go-button">
          <i class=""></i>
        </div>
        <div class="line1">
          <div class="left">
            <div class="node-name">
              <span class="strong">{{ myNode[curNodeIdx] ? myNode[curNodeIdx].name : "" }}</span>
              <div class="status" :class="{'active':myNode[curNodeIdx]&&myNode[curNodeIdx].isEffect}">
                {{myNode[curNodeIdx]?(myNode[curNodeIdx].isEffect?'已成立':'筹备中'):'筹备中'}}
              </div>
            </div>
            <strong class="nodeId">{{ myNode[curNodeIdx] ? myNode[curNodeIdx].id : "" }}</strong>

          </div>
          <div class="right">
            <el-button size="small" @click="$router.push({name:'financialManagement'})">财政管理</el-button>
            <el-button size="small" @click="$router.push({name:'committeeDetail',params:{nodeId:curNodeIdx}})">委员会</el-button>
          </div>
        </div>
        <div class="node-info-bottom">
          <div>
            节点创始人mineNode：
            <strong class="r-purple-color">{{ this.myNode[2] ? this.myNode[2]: "" }}</strong>
          </div>
          <div>
            <i class="el-icon-position"></i>
            节点地址：
            <strong class="r-purple-color">East Asia - CN - {{
                myNode[curNodeIdx] ? myNode[curNodeIdx].cityId : ""
              }}</strong>
          </div>
          <div>
            人数
            <strong class="r-purple-color">{{ myNode[curNodeIdx] ? myNode[curNodeIdx].peopleLth : 0 }}</strong>
          </div>
          <div>
            成立时间
            <strong>{{
                myNode[curNodeIdx] ? new Date(myNode[curNodeIdx].creationTime * 1000) : 0 | formatDate
              }}</strong>
          </div>
          <div>
            管理员到期时间
            <strong>{{
                myNode[curNodeIdx] ? new Date(myNode[curNodeIdx].expireTime * 1000) : 0 | formatDate
              }}</strong>
          </div>
        </div>
      </div>
      <div class="r-line" style="background: #eaeaea;height: 1px;width: 94%;margin: 30px auto 0"></div>
      <div class="node-info-detail">
        <div class="node-item">
          <div>节点收入</div>
          <div class="amount">125,004,000</div>
          <div class="val">价值：$ 120,152,124.00</div>
        </div>
        <div class="node-item">
          <div>已使用</div>
          <div class="amount">125,004,000</div>
          <div class="val">价值：$ 120,152,124.00</div>
        </div>
        <div class="node-item">
          <div>剩余</div>
          <div class="amount">125,004,000</div>
          <div class="val">价值：$ 120,152,124.00</div>
        </div>
      </div>
    </div>
    <RainbowPanel>
      <template v-slot:name>
        <div class="proposal-header">
          <span> 提案</span>
          <el-button size="mini" class="button1" @click="initiateAProposal">发起提案</el-button>
        </div>
      </template>
      <template v-slot:content>
        <div class="proposal-info-detail">
          <div class="proposal-item">
            <div>我的票数</div>
            <div class="number r-purple-color">{{ myVote }}</div>

          </div>
          <div class="proposal-item">
            <div>已接受委托票数</div>
            <div class="number r-orange-color">{{ myCampaignVote }}</div>
          </div>
          <div class="proposal-item">
            <div>委托出票数</div>
            <div class="number r-green2-color">0</div>
          </div>
        </div>
        <el-table
            class="node-list-content"
            :data="proposalArr"
        >
          <el-table-column
              prop="proposalOwnerName"
              label="提案者"
              align="center"
          >
            <div slot-scope="scope">
              <div class="idx">{{scope.$index+1}}</div>
              {{scope.row.proposalOwnerName}}
            </div>
          </el-table-column>
          <el-table-column
              prop="proposalId"
              label="提案编号"
          >
          </el-table-column>
          <el-table-column
              prop="date"
              label="提案日期"
          >
            <div slot-scope="scope">
              {{ new Date(scope.row.creationTime * 1000) | formatDate }}
            </div>
          </el-table-column>
          <el-table-column
              prop="description"
              label="提案内容"
          >
          </el-table-column>
          <el-table-column
              prop="withdrawalNumber"
              label="提案金额"
          >
          </el-table-column>
          <el-table-column
              label="提案状态"
          >
            <div slot-scope="scope">{{ stageByIdx.get(scope.row.status)}}</div>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="checkProposal({
                ...scope.row,
                nodeId: myNode[curNodeIdx].id
              })">
                查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </RainbowPanel>
    <!--  切换节点弹窗 -->
    <el-dialog
        title="切换节点"
        :visible.sync="isShowCheckNode"
        width="400px"
    >
      <div class="my-node-list">
        <div class="node-item r-shadow" @click="curNodeIdx=index;isShowCheckNode=false" v-for="(node,index) in myNode"
             :key="index">
          {{ node.name }}
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {tokenApplyList} from "@/api/citynode";

let stageByIdx = new Map([
  ["1", "投票期"],
  ["2", "公示期"],
  ["3", "执行期"],
  ["4", "已执行"],
  ["5", "已拒绝"],
])
export default {
  name: "mineNode",
  data() {
    return {
      stageByIdx,
      isShowCheckNode: false,//是否显示切换节点弹窗
      // curNodeIdx: 0,
      myNode : {

      },
      proposalArr:[]
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    curNodeIdx() {
      return this.$parent.myNodeId
    },
    // proposalArr() {
    //   // return this.$store.state.proposal.proposalArr
    //   return []
    // },
    myVote() {
      // return this.$store.state.vote.myVote
      return 100
    },
    myCampaignVote() {
      // return this.$store.state.vote.myCampaignVote
      return 100
    },
  },
  watch: {
    account() {
      this.getData()
    },
    curNodeIdx() { //根据目前选择的节点获取数据
      // this.getData()
      this.$parent.myNodeId
    },

  },
  created() {
    console.log(this.isConnected)

    // this.curNodeIdx = this.$parent.myNodeId

    console.log(this.$parent.myNodeId)
    this.getData()

    tokenApplyList({data_id:this.$parent.myNodeId}).then(res => {

       this.activeCityNodeArr = res.data
      // for (const resKey in res.data) {
      //
      // }
    })
  },
  methods: {
    async getData() {
      if (this.isConnected && this.$parent.myNodeId != 0) {
        console.log(2222222222222222222)
        // await this.$store.dispatch("cityNode/getAllCityNodes")
        await this.$store.dispatch("CityNode/getCityNodeInfo",this.$parent.myNodeId).then((data) => {

          this.myNode = data
          console.log(  this.myNode)
        })
        // this.$store.dispatch("proposal/getNodeProposal", this.myNode[this.curNodeIdx].managerAddress)
        // this.$store.dispatch("vote/getPriorVotes", {blockNumber: this.myNode[this.curNodeIdx].blockNumber})
        // this.$store.dispatch("vote/getUserCampaignVotes", {campaignId:this.myNode[this.curNodeIdx].currentCampaignManagerId})
        // this.$store.dispatch("vote/getCampaignTotalVotes", this.myNode[this.curNodeIdx].currentCampaignManagerId)
        // this.$store.dispatch("erc20/getBalanceOf",{
        //   owner: "",
        //
        // })
      }
    },
    initiateAProposal() {//发起提案
      this.$router.push({
        name: 'initiate',
        params: {
          nodeId: this.myNode[this.curNodeIdx].id,
          govAddress: this.myNode[this.curNodeIdx].managerAddress,
        }
      })
    },
    checkProposal(proposal) {//查看提案
      this.$router.push({
        name: 'proposal',
        params: {
          proposal
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.mineNode {
  .button1{
    box-shadow: 0px 2px 5px 0px rgba(128,4,149,0.30);
  }
  .my-node-list { //切换节点弹窗
    .node-item {
      margin-top: 20px;
      padding: 10px;
      cursor: pointer;
    }
  }

  .proposal-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .proposal-info-detail {
    margin: 0 0 20px;
    display: flex;
    justify-content: space-around;

    .proposal-item {
      text-align: left;
      width: 430px;
      height: 100px;
      border-radius: 10px;
      box-shadow: 0px 2px 10px 2px rgba(48, 48, 77, 0.05);
      padding: 30px 20px;

      .number {
        font-weight: bold;
        margin-top: 4px;
      }
    }
  }

  .mine-node {
    min-width: 800px;
    height: 380px;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    margin-bottom: 20px;

    .nodeLH_background {
      height: 130px;
      width: 100%;
      background: url("../../static/img/node_background.png");
      background-size: cover;

      .right-btn {
        float: right;
        display: flex;
        margin: 20px 20px;

        > div {
          margin-left: 10px;
          width: 110px;
          cursor: pointer;
          height: 34px;
          line-height: 34px;
          color: white;
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.30);
          border-radius: 21px;
          text-align: center;
        }
      }
    }

    .node-info {
      padding-left: 50px;
      position: relative;
      height: 80px;
      .node-info-bottom{
        display: flex;
        > div {
          margin-right: 8px;
        }

      }
      .header-img {
        position: absolute;
        left: 50px;
        top: -30px;

        img {
          width: 80px;
        }
      }


      .line1 {
        display: flex;
        height: 90px;
        align-items: center;
        line-height: 24px;
        justify-content: space-between;

        .left {
          padding-left: 100px;
          text-align: left;

        }

        .right {
          > div {
            margin-right: 22px;
          }

          display: flex;
          padding-right: 20px;

          .el-button {
            width: 120px;
            height: 40px;
            border-radius: 20px;
            color: white;
          }

          .el-button:nth-child(1) {
            background: linear-gradient(225deg, #736dff, #a97fff);
            box-shadow: 0px 3px 5px 0px rgba(116, 109, 255, 0.30);
          }

          .el-button:nth-child(2) {
            background: linear-gradient(270deg, #f15887, #fe9b86);
            box-shadow: 0px 3px 5px 0px rgba(241, 91, 135, 0.40);
          }
        }

        .node-name {
          margin-top: 20px;
          display: flex;
          align-items: center;

          .strong {
            font-size: 20px;
            padding-right: 10px;
          }

          .status {
            font-size: 12px;
            text-align: center;
            line-height: 17px;
            width: 60px;
            height: 20px;
            border-radius: 6px;
            color: #ff3b3b;
            background: rgba(255,59,59,0.20);
            border: 1px solid rgba(255,59,59,0.50);
          }
          .status .active{
            color: $green;
            background: rgba(94, 219, 166, 0.20);
            border: 1px solid rgba(95, 220, 167, 0.50);
          }
        }

      }

    }

    .node-info-detail {
      display: flex;
      padding: 30px 0;
      justify-content: space-around;

      .node-item {
        text-align: left;
        border-radius: 10px;
        box-shadow: 0px 2px 10px 2px rgba(48, 48, 77, 0.05);
        padding: 14px 16px;
        width: 300px;

        .amount {
          font-size: 16px;
          font-weight: bold;
        }

        > div {
          margin-top: 4px;
        }

        .val {
          color: #2AB24D;
        }
      }

      .node-item:nth-child(1) {
        .amount {
          background-image: linear-gradient(0deg, #736dff, #a97fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .node-item:nth-child(2) {
        .amount {
          background: linear-gradient(180deg, #f7c598, #ff8886);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .node-item:nth-child(3) {
        .amount {
          background: linear-gradient(180deg, #44dec5, #4ebcfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }

  .node-list-content {
    .el-button {
      color: #736DFF;
      background: rgba(115, 109, 255, 0.20);
      border: 1px solid rgba(115, 109, 255, 0.20);
      border-radius: 16px;
    }
  }
}
</style>
