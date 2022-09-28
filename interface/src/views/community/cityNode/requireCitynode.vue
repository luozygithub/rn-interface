<template>
  <div class="requireCityNode">
    <RainbowPanel style="padding-bottom: 20px;">
      <template v-slot:name>
        申请城市节点
      </template>
      <template v-slot:content>
        <div class="require-city-content">
          <div>
            <el-button @click="isShowChooseToken=true">{{tokenId? '令牌ID' +tokenId:'选择要使用的城市令牌'}}</el-button>
          </div>
          <div class="node-name">
            <div style="padding-bottom: 10px">node name</div>
            <el-input class="name_input input2" size="small" v-model="nodeName" placeholder="nodeName"></el-input>
          </div>
          <div class="area">
            <div class="item">
              Country
              <div class="choose-item" @click="chooseItem(0)">
                <span>{{ tableData[0] }}</span>
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
            <div class="item">
              City
              <div class="choose-item" @click="chooseItem(1)">
                <span>{{ tableData[1] }}</span>
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
            <div class="item">
              City node
              <div class="choose-item" @click="chooseItem(2)">
                <span>{{ tableData[2] }}</span>
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
            <div class="item">
              Area
              <div class="choose-item" @click="chooseItem(3)">
                <span>{{ tableData[3] }}</span>
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>

          </div>
          <div class="introduction">
            Introduction
            <div class="intro-content">
              <el-input class="input2" size="small" v-model="Introduction" placeholder="Introduction"></el-input>
            </div>
          </div>
          <el-button class="button1" round size="small" @click="application">申请</el-button>
        </div>
      </template>
    </RainbowPanel>
    <el-dialog
        :title="dialog.name"
        :visible.sync="chooseItemDialog"
        class="dialog"
    >
      <div>
        <div class="dialog-choose">
          <el-input
              class="input1"
              :placeholder="'搜索' + dialog.name.substr(2,4)"
              suffix-icon="el-icon-search"
              v-model="searchArr[chooseItem]">
          </el-input>
        </div>
        <div class="dialog-list">

        </div>
      </div>
    </el-dialog>
    <!--    选择令牌-->
    <el-dialog
        title="选择令牌"
        :visible.sync="isShowChooseToken"
    >
      <div class="token-list">
        <div class="token-item"  @click="tokenId= token.tokenId;isShowChooseToken=false" v-for="token in governanceToken" :key="token.tokenId">
          <div class="token-id">
            令牌ID{{token.tokenId}}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import nodeAddress from "@/utils/nodeAddress.json"
import {getCoinBalance} from "../../../api/goverbabce721";
export default {
  name: "requireCityNode",
  data() {
    return {
      tokenId:"",//要使用的令牌ID
      isShowChooseToken: false,
      fullScreen: false,
      searchArr: [],
      chooseItemDialog: false,
      dialog: {
        name: '选择国家',
        list: [],
        label: 'city'
      },
      nodeName: '',
      Introduction: null,
      tableData: [],
      governanceToken:[],
    }
  },
  watch:{
    isConnected(){
      this.getData()
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account',
      'isRegister'
    ]),
  },
  created() {
    if(this.$route.params){
      this.tokenId=this.$route.params.tokenId
    }
    this.getData()
  },
  methods: {
    async getData() {
      if (this.isConnected) {
        await getCoinBalance().then(res => {
          this.governanceToken = res
        })
      }
    },
    chooseItem(index) {
      this.chooseItemDialog = true
      switch (index) {
        case 0:
          this.dialog = {
            name: "选择国家"
          }
          break;
        case 1:
          this.dialog = {
            name: "选择城市",
          }
          break;
        case 2:
          this.dialog = {
            name: "选择城市节点"
          }
          break;
        case 3:
          this.dialog = {
            name: "选择区域"
          }
          break;
      }
    },
    application() {
      this.$store.dispatch("CityNode/createNode", {
        tokenId: 1,
        name: this.nodeName,
        hash:  '0x8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f',
        y:4,
        a:1
      }).then((res) => {
        console.log(res)
        this.$message.success("申请成功")
        this.$store.dispatch("CityNode/userNode",this.account).then((nodeId)=>{
          this.$store.dispatch("CityNode/getCityNodeFMAddress",nodeId).then((cfm)=>{
            console.log(cfm)
            let obj = {}
            obj[nodeId] = cfm
            nodeAddress.push(obj)
          }).catch(()=>{
            // this.$message.error("加入失败"+err)
          })
        }).catch(()=>{
          // this.$message.error("加入失败"+err)
        })
        // this.$parent.getData()

      }).catch(err=>{
        this.$message.error("申请失败" + err)
      })
    },

  }
}
</script>

<style lang="scss" scoped>
.requireCityNode {
  .require-city-content{
    text-align: center;
  }
  .token-list{
    .token-item{
      padding: 10px;

      cursor: pointer;
    }
  }
  .dialog ::v-deep {
    color: white;

    .el-dialog {
      width: 400px;
      height: 560px;
      .el-dialog__title {
        color: white;
      }
    }

    .dialog-choose {

    }

    .dialog-list {

    }
  }


  .choose-item {
    display: flex;
    padding: 0 10px;
    background: #f8f8f8;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 36px;
    border: 1px solid #eaeaea;
    border-radius: 26px;
  }

  .introduction {
    text-align: center;
    .intro-content {
      background: #f8f8f8;
      width: 850px;
      margin: 0 auto;
      border: 1px solid #eaeaea;
      border-radius: 26px;
    }
  }

  .node-name {
    text-align: center;
    .name_input {
      background: #f8f8f8;
      width: 650px;
      margin: 0 auto;
      border: 1px solid #eaeaea;
      border-radius: 26px;
    }
  }

  .area {
    margin: 30px auto;
    width: 900px;
    display: flex;

    .item {
      text-align: left;
      margin-left: 20px;
      width: 220px;
      line-height: 30px;
    }
  }

  .button1 {
    margin: 30px auto;
    width: 300px;
    height: 40px;
  }
}
</style>
