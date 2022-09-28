<template>
  <div class="demo">
    <RainbowPanel>
      <template slot="content">
        <h1>demo</h1>
        <h1>demo</h1>
        <h1>demo</h1>
        <h1>demo</h1>
        <el-button @click="init" class="button1">
          init nonpayable方法
        </el-button>
        <el-button @click="grantGovernor" class="button-view">
          grantGovernor view方法
        </el-button>
        <el-button @click="dialogVisible=true" class="button2">dialogVisible</el-button>
      </template>

    </RainbowPanel>
    <div class="r-panel r-active-shadow r-border">
      asdsa
      <el-button @click="handle">
        handle
      </el-button>
      <el-button @click="query">
        rbt
      </el-button>
      <tableItem :table-data="tableData" operate-r-name="购买"></tableItem>
    </div>

    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
    >
      <span>这是一段信息</span>

    </el-dialog>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import abiUtil from "../utils/abiUtil.js";
import {api1} from "@/api/test";
import {apiuserList} from "@/api/rbtVip";
import {apivipList} from "@/api/rbtVip";
import {apiuserCount} from "@/api/rbtVip";
import {apiqueryNewId} from "@/api/rbtVip";

export default {
  name: "demo",
  data() {
    return {
      dialogVisible: false,
      tableData: null
    }
  },
  created() {
    api1().then(res => {
      console.log(res)
    })
     apiuserList().then(res => {
      console.log(res)
    })
     apivipList().then(res => {
      console.log(res)
    })
     apiuserCount().then(res => {
      console.log(res)
    })
    apiqueryNewId({}).then(res => {
      console.log(res)
    }) 
    this.tableData = {
      "index": "1",
      name: "彩虹测试",
      code: "0001",
      startTime: "20000000",
      endTime: "654654665",
      day: "220",
      price: "asd"
    }
  },
  methods: {
    getData() {
      //测试 vuex
      this.contract = abiUtil.getContractByName("ERC20Orchestrator", this.$store.state.app.web3)
    },
    grantGovernor() {
      this.$store.dispatch("Core/grantGovernor", {}).then(res => {
        console.log(res)
        this.$message.success(res.toString())
      }).catch(err => {
        console.log(err)
        this.$message.error(err.toString())
      })
    },
    init() {
      this.$store.dispatch("Core/init").then(res => {
        console.log(res)
        this.$message.success("成功")
      }).catch(err => {
        console.log(err)
        this.$message.error(err.toString())
      })
    },
    handle() {
      this.$store.dispatch("ERC20Orchestrator/init", "0x844BE1C5B2181BeBb54CD0164A91F35397f31c30").then(res => {
        console.log(res)
      })
    },
    query() {
      this.$store.dispatch("ERC20Orchestrator/rbt").then(res => {
        console.log(res)
      })
      this.$store.dispatch("ERC20Orchestrator/rbd").then(res => {
        console.log(res)
      })
      this.$store.dispatch("ERC20Orchestrator/rbtex").then(res => {
        console.log(res)
      })
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account',
      'isRegister'
    ]),
  },
  watch: {
    account() {
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  overflow: hidden;
}
</style>
