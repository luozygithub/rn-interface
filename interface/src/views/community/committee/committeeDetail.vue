<template>
  <!--委员会详情-->
  <div class="committeeDetail">
    <RainbowPanel class="committee-member">
      <template v-slot:name>
        <div style="display: flex;justify-content: space-between">
          委员会成员
          <el-button size="small" class="button-view" @click="activateCampaignMsManager">竞选委员会</el-button>
        </div>
      </template>
      <template v-slot:content>
        <el-table :data="myMsManager">
          <el-table-column prop="user" label="委员会成员"></el-table-column>
          <el-table-column prop="created_at" label="加入时间"></el-table-column>
<!--          <el-table-column prop="days" label="加入天数"></el-table-column>-->
          <el-table-column prop="expire_at" label="任职到期时间"></el-table-column>
<!--          <el-table-column prop="remaining" label="任职剩余天数"></el-table-column>-->
          <el-table-column prop="amount" label="交易额"></el-table-column>
          <el-table-column prop="amount" label="持仓RBT"></el-table-column>
          <el-table-column prop="remaining" label="投票详情"></el-table-column>
          <el-table-column  label="弹劾">
            <template slot-scope="scope">
              <el-button class="button1" size="mini" @click="impeach(scope)">
                弹劾
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </RainbowPanel>
    <RainbowPanel class="committee-candidate">
      <template v-slot:name>
        委员会候选人
      </template>
      <template v-slot:content>
        <el-table :data="campaignMsUsers">

        </el-table>
      </template>
    </RainbowPanel>
    <el-dialog
        title="抵押RBT"
        :visible.sync="showRecord"
        width="400px"
    >
      <div class="impeach-record">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="RBT数量">
            <el-input v-model="form.rbtAmount"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onImpeach">立即弹劾</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>

    </el-dialog>
  </div>
</template>

<script>
import {parliamentList} from "@/api/citynode";
import {CityNode} from "@/utils/address.json";
export default {
  name: "committeeDetail",
  data(){
    return{
      cityNode:0,
      users:[],
      myMsManager:[],
      showRecord:false,
      currentUser:'',
      form:{
        rbtAmount:0,
      }
    }
  },
  methods:{
    impeach(row){

      this.currentUser = row.user;
      this.showRecord = true;
    },
    onImpeach(){
      this.$store.dispatch("Impeach/impeach",CityNode,this.cityNode,this.currentUser,this.form.rbtAmount).then((msg)=>{
        console.log(msg)
      }).catch(err=>{
        this.$message.error("竞选失败"+err)
      })
    },
    getParliamentLength(){
      this.$store.dispatch("CityNode/getParliamentLength",this.cityNode).then((msg)=>{
        return msg
      }).catch(err=>{
        this.$message.error("竞选失败"+err)
      })
    },
    getParliamentByIndex(index){
      this.$store.dispatch("CityNode/getParliamentByIndex",this.cityNode,index).then((msg)=>{
        this.users.push(msg)
      }).catch(err=>{
        this.$message.error("竞选失败"+err)
      })
    },
    activateCampaignMsManager(){ //竞选多签管理员
      console.log(this.cityNode)
      this.$store.dispatch("cityNode/activateCampaignManager",this.cityNode.id).then(()=>{
        this.$message.success("竞选成功")
      }).catch(err=>{
        this.$message.error("竞选失败"+err)
      })
    }
  },
  computed:{
    // myMsManager(){ //多签管理员
    //   // return this.$store.state.cityNode.myMsManager
    //   return []
    // },
    campaignMsUsers(){ //当前多签竞选候选人
      // return this.$store.state.cityNode.campaignMsUsers
      return []
    }
  },
  created() {
    this.cityNode = this.$route.params.nodeId
    console.log(CityNode)
    parliamentList({type:'node',data_id:this.cityNode,address:CityNode}).then(res => {
      this.myMsManager = res.data
    })
  },


}
</script>

<style lang="scss" scoped>
.committeeDetail{
  .committee-candidate{
    margin-top: 20px;
  }
}
</style>
