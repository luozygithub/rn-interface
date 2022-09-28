<template>
  <!--  节点列表-->
  <div class="nodeList">
    <div class="nav-box">
      <div class="nav-list">
        <div class="list-box">
          <template v-for="(item,index) in navList">
            <div class="nav-item" :class="{'active':activeIndex==item.index}" @click="activeIndex = item.index" :key="index">
              {{ item.name }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="node-list-content-box">
      <mineNode ref="mineNode" v-show="activeIndex==0"></mineNode>
      <cityNodeToken ref="nodeList" v-show="activeIndex==1"></cityNodeToken>
      <requireCityNode :tokenId="tokenId" v-show="activeIndex==2"></requireCityNode>
      <joinNode v-show="activeIndex==3"></joinNode>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import joinNode from "./joinNode";
import mineNode from "./mineNode";
import cityNodeToken from "./cityNodeToken";
import requireCityNode from "./requireCitynode";


export default {
  name: "nodeList",
  components: {
    mineNode,
    cityNodeToken,
    requireCityNode,
    joinNode
  },
  data() {
    return {
      tokenId:null,
      myNodeId: 0,
      activeIndex: 0,
      arr: [],
      navList: []
    }
  },
  watch: {

    isRegister() {
      if (this.$refs["nodeList"]) {
        // this.getData()
      }
    },
    isConnected() {
      this.getUserNode()
    },
    myNodeId() {
      this.$refs["mineNode"].getData()
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account',
      'isRegister'
    ]),
  },
  mounted() {
    if(this.$route.params){
      this.activeIndex = 2
      this.tokenId = this.$route.params.tokenId
    }
  },
  created() {
    this.getUserNode()
  },

  methods: {
    async getUserNode() {
      if (!this.isConnected) {
        return
      }
      this.$store.dispatch("CityNode/userNode", this.account).then((msg) => {
        this.myNodeId = msg;
        console.log(this.myNodeId)
        if (this.myNodeId == 0) {
          this.navList = [{
            name: "加入城市节点",
            index: 1,
          }, {
            name: "申请城市节点",
            index: 2,
          }]
        } else {
          this.navList = [{
            name: "我的城市节点",
            index: 0,
          }, {
            name: "加入城市节点",
            index: 1,
          }, {
            name: "申请城市节点",
            index: 2,
          }, {
            name: "我加入的节点",
            index: 3,
          },
          ]
        }
        if (this.navList.length == 2 && !this.tokenId) {
          this.activeIndex = 1
        }
      }).catch(err => {
        this.$message.error("申请失败" + err)
      })
    },
    // async getData(){
    //   if(this.isConnected){
    //     this.$refs["nodeList"].isLoadingT = true
    //     this.$store.dispatch("cityNode/getMyJoinNode")
    //     await this.$store.dispatch("cityNode/getAllCityNodes")
    //     this.$refs["nodeList"].isLoadingT = false
    //     this.$refs.mineNode.getData()
    //   }
    // },
    handleClick(param) {
      this.$router.push({name: 'nodeDetail', params: param})
    },
  }
}
</script>

<style lang="scss" scoped>
.nodeList {
  .node-list-content-box {
    width: 1200px;
    margin: 30px auto 0;
  }
  .nav-box {
    display: flex;
    width: 1200px;
    margin: 30px auto 0;

    .nav-list {
      height: 40px;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border: 1px solid rgba(165, 25, 187, 0.20);
      border-radius: 11px;
      padding: 0.5px;

      .list-box {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: linear-gradient(90deg, #8ce5f8 0%, #e4c6f3 64%, #fac2c5 100%);
        display: flex;

        .nav-item {
          width: 160px;
          font-size: 14px;
          height: 100%;
          font-weight: 700;
          line-height: 36px;
          text-align: center;
          color: #db1f7e;
          cursor: pointer;

          &.active {
            background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
            border-radius: 10px;
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.30);
          }
        }
      }
    }


  }

}
</style>
