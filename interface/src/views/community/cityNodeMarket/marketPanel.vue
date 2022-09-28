<template>
  <div class="marketPanel">
    <RainbowPanel>
      <template v-slot:name>
        城市节点令牌购买市场
      </template>
      <template v-slot:content>
        <el-table
            ref="multipleTable"
            :data="marketTokenArr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            :default-sort="{prop: 'tokenId', order: 'ascending'}"
        >
          <el-table-column
              prop="tokenId"
              label="令牌编号"
          >
          </el-table-column>

          <el-table-column
              prop="ownerName"
              label="出售人"
          >
          </el-table-column>

          <el-table-column
              label="上架时间">
            <div slot-scope="scope">
              {{ new Date(scope.row.creationTime * 1000) | formatDate }}
            </div>
          </el-table-column>
          <el-table-column
              label="价格"
          >
            <div slot-scope="scope">
              {{ scope.row.price | formatNumber }}
            </div>
          </el-table-column>
          <el-table-column
              label="交易"
          >
            <div slot-scope="scope">
              <el-button size="mini" class="button1" @click="buy(scope.row)">购买</el-button>
            </div>
          </el-table-column>
        </el-table>
        <el-pagination
           @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="marketTokenArr.length">
        </el-pagination>
      </template>
    </RainbowPanel>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "marketPanel",
  data(){
    return{
      currentPage:1, //初始页
      pagesize:5,    //    每页的数据
      marketTokenArr:[],//在售城市节点令牌
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  created() {
    this.getData()
  },
  methods:{
     handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    buy(token){
      let id = token.tokenId
      this.$store.dispatch("erc20/allowance", {
        owner: this.account,
        coinName: 'USD',
        contractName: 'CityNodeTokenMarket'
      }).then(res => {
        if (res < token.price) {
          this.isLoading = true
          this.$store.dispatch("erc20/approve", {
            contractName: 'CityNodeTokenMarket',
            coinName: 'USD',
            amount: (token.price * 10 ** 18).toString()
          }).then(() => {
            this.isLoading = false
            this.subBuy(id)
          }).catch(()=>{
            this.isLoading = false
            this.$message({
              type:'error',
              message:'授权失败'
            })
          })
          return
        }else{
          this.subBuy(id)
        }
      });

    },
    subBuy(id){
      this.$store.dispatch("cityNodeTokenMarket/buy",id).then(()=>{
        this.$message.success("成功购买")
        this.isShowTransfer=false
      })
    },
    getData(){
      if(this.isConnected){
        // this.$store.dispatch("cityNodeTokenMarket/sellRecords")
      }
    }
  },
  watch: {
    marketTokenArr(){


    },
    account() {
      this.getData()
    },
  }
}
</script>

<style scoped>

</style>
