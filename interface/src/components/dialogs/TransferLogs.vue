<template>
  <el-dialog
      title="令牌历史信息"
      :visible.sync="isShowHistory"
      width="400px"
      class="transfer-history"
      :before-close="handleClose"
  >
    <div class="history-box">
      <div class="history-item" v-for="(item,index) in transferRecord" :key="index">
        <div class="time">
          {{ item.created_at | formatDate }}
        </div>
        <div class="content">
          <div class="from">
            <div>持有者：</div>
            {{ item.holder }}
          </div>
          <div class="to">
            <div>价格：</div>
            {{ item.price }}
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TransferLogs",
  props: {
      isShowHistory:{
      default :()=>{return false}
    },
    transferRecord:{
       default :()=>{return []}
    }

  },
  model:{
    prop: 'isShowHistory',
    event: 'change'
  },
  data() {
    return {
    }
  },
  created() {

  },
  computed:{
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  methods: {
    handleClose(){
      this.$emit('change',false)
    }
  },
  watch: {

  }
}
</script>

<style lang="scss" scoped>
.transfer-history {
  .history-box {
    text-align: left;
    padding: 10px;
    max-height: 500px;
    overflow: auto;

    .history-item {
      margin-top: 10px;
      padding: 10px;
      width: 100%;
      height: 110px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0px 3px 10px 0px rgba(48, 48, 77, 0.08);

      .time {
        font-size: 12px;
        color: #999999;
        line-height: 14px;
        padding: 10px 0;
      }

      .content {
        display: flex;
        justify-content: space-between;

        .from, .to {
          width: 120px;
        }
      }
    }
  }

}
</style>
