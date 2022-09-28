<template>
<!--发起提案-->
  <div class="initiate">
    <RainbowPanel>
      <template v-slot:name>
        发起提案
      </template>
      <template v-slot:content>
        <div class="initiate-content">
          <div class="item">
            <span>提案名称</span>
            <el-input size="mini" placeholder="请输入" v-model="proposal.name"></el-input>
          </div>
          <div class="item">
            <span>提案详情</span>
            <el-input type="textarea" :rows="10" v-model="proposal.description"></el-input>
          </div>
          <div class="item">
            <div class="left">
              <span>申请金额</span>
              <el-input size="mini" v-model="proposal.withdrawalNumber"></el-input>
            </div>
            <div class="right">
              <span>阶段个数</span>
              <el-input  size="mini" v-model="proposal.withdrawalCount"></el-input>
            </div>
            <div class="right">
              <span>每个阶段时间</span>
              <el-input  size="mini" v-model="proposal.interval"></el-input>
            </div>
          </div>
          <div class="item">
            <div class="left">
<!--              （100rbt/申请金额5%）-->
              <span>押金类型</span>
              <el-select v-model="proposal.depositType" placeholder="请选择">
                <el-option
                    label="100RBT"
                    value="1">
                </el-option>
                <el-option
                    label="5%申请金额"
                    value="2">
                </el-option>
              </el-select>
            </div>


          </div>
          <div class="operating">
            <el-button size="normal" class="button3" @click="$router.push('nodeList')">
              返回
            </el-button>
            <el-button size="normal" class="button1" @click="subProposal">
              发起
            </el-button>
          </div>
        </div>
      </template>
    </RainbowPanel>
  </div>
</template>

<script>
export default {
  name: "initiate",
  data(){
    return {
      proposal:{//提案form

      }
    }
  },
  created() {
    if(!this.$route.params.nodeId){
      this.$router.push({name:"nodeList"})
    }
    this.proposal.nodeId = this.$route.params.nodeId
    this.proposal.govAddress = this.$route.params.govAddress
  },
  methods:{
    subProposal(){//发起提案
      if(!this.$route.params.nodeId){
        this.$message.error("请先选择在哪个城市节点发起提案")
      }
      this.$store.dispatch("proposal/doProposal", this.proposal).then(()=>{
        this.$message.success("成功")
      }).catch((err)=>{
        this.$message.error("失败" + err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.initiate{
  .initiate-content{
    width: 600px;
    margin: 0 auto;
    .item{
      text-align: left;
      ::v-deep .el-input__inner ,::v-deep .el-textarea__inner{
        background: #f8f8f8!important;
        border: 1px solid #eaeaea;
      }
      span{
        margin: 8px 0;
        display: block;
      }
      &:nth-child(3){
        display: flex;
        justify-content: space-between;
        .left, .right{
          width: 48%;
        }
      }
    }
    .operating{
      padding: 20px;
        .el-button{
          height: 36px;
          border-radius: 40px;
          width: 130px;
        }
    }
  }
}
</style>
