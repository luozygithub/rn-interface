<template>
  <div class="mineNode">
    <div class="mine-node r-shadow">
      <div class="nodeLH_background">
        <div class="right-btn">
          <div class="btn-back" @click="$router.push({name:'nodeList'})">
            返回我的节点
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
              <span class="strong">{{nodeInfo ?nodeInfo.name : "" }}</span>
              <div class="status">
                已成立
              </div>
            </div>
            <strong class="nodeId">{{nodeInfo ?nodeInfo.id : "" }}</strong>

          </div>
          <div class="right">
            <el-button size="small" @click="$router.push({name:'financialManagement'})">财政管理</el-button>
            <el-button size="small" @click="$router.push({name:'committeeDetail'})">委员会</el-button>
          </div>
        </div>
        <div class="node-info-bottom">
          <div>
            节点创始人：
            <strong class="r-purple-color">{{nodeInfo ?nodeInfo.ownerName : "" }}</strong>
          </div>
          <div>
            <i class="el-icon-position"></i>
            节点地址：
            <strong class="r-purple-color">East Asia - CN - {{
                nodeInfo ?nodeInfo.cityId : ""
              }}</strong>
          </div>
          <div>
            人数
            <strong class="r-purple-color">{{nodeInfo ?nodeInfo.peopleLth : 0 }}</strong>
          </div>
          <div>
            成立时间
            <strong>{{
                nodeInfo ? new Date(nodeInfo.creationTime * 1000) : 0 | formatDate
              }}</strong>
          </div>
          <div>
            管理员到期时间
            <strong>{{
                nodeInfo ? new Date(nodeInfo.expireTime * 1000) : 0 | formatDate
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
        </div>
      </template>
      <template v-slot:content>

        <el-table
            class="node-list-content"
            :data="proposalArr"
        >
          <el-table-column
              label="#"
              type="index"
          >
          </el-table-column>
          <el-table-column
              prop="proposalOwnerName"
              label="提案者"
          >
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
            <div slot-scope="scope">{{ scope.row.isStop ? "通过" : "未通过" }}</div>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="checkProposal({
                ...scope.row,
                nodeId:nodeInfo.id
              })">
                查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </RainbowPanel>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "mineNode",
  data() {
    return {
      nodeInfo:{},
      curNodeIdx: 0,
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    proposalArr() {
      return this.$store.state.proposal.proposalArr
    },
  },
  watch: {

  },
  created() {
    this.nodeInfo = this.$route.params
    console.log(this.$route.params)
    this.getData()
  },
  methods: {
    getData() {
      if (this.isConnected) {
        this.$store.dispatch("proposal/getNodeProposal", this.nodeInfo.managerAddress)
        this.$store.dispatch("vote/getPriorVotes", {blockNumber: this.nodeInfo.blockNumber})
        this.$store.dispatch("vote/getUserCampaignVotes", this.nodeInfo.currentCampaignManagerId)
        this.$store.dispatch("vote/getCampaignTotalVotes", this.nodeInfo.currentCampaignManagerId)
      }

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

          .info {
            display: flex;

            > div {
              margin-right: 8px;
            }

          }
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
            color: $green;
            line-height: 17px;
            width: 60px;
            height: 20px;
            background: rgba(94, 219, 166, 0.20);
            border: 1px solid rgba(95, 220, 167, 0.50);
            border-radius: 6px;
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
