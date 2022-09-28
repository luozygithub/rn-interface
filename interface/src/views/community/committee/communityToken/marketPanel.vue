<template>
  <div class="marketPanel">
    <RainbowPanel>
      <template v-slot:name>
        社区令牌购买市场
      </template>
      <template v-slot:content>
        <el-table
            ref="multipleTable"
            :data="marketTokenArr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            :default-sort="{prop: 'tokenId', order: 'ascending'}"
            border
        >
          <el-table-column
              prop="tokenId"
              label="令牌编号"
          >
            <div slot-scope="scope">
              <div class="idx">{{scope.$index}}</div>
              <div class="coin-info">
                <img class="token-icon" style="margin-right: 6px" :src="getImgByType(scope.row.addressGovernanceToken)" alt="">
                {{ typeByToken.get(scope.row.addressGovernanceToken) }}
              </div>
            </div>
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
import {imgByType,typeByToken} from "@/utils/maps";

export default {
  name: "marketPanel",
  data(){
    return{
      typeByToken,
      currentPage:1, //初始页
      pagesize:5,    //    每页的数据
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    marketTokenArr(){//市场令牌数组
      return this.$store.state.governanceTokenMarket.marketTokenArr
    }
  },
  created() {
    this.getData()
  },
  methods:{
    getImgByType(token){
      return imgByType[typeByToken.get(token)]
    },
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
        contractName: 'GovernanceTokenMarket'
      }).then(res => {
        if (res < token.price) {
          this.isLoading = true
          this.$store.dispatch("erc20/approve", {
            contractName: 'GovernanceTokenMarket',
            coinName: 'USD',
            amount: (token.price * 10 ** 12).toString()
          }).then(() => {
            this.isLoading = false
            this.$store.dispatch("governanceTokenMarket/buy",id).then(res=>{
              console.log(res)
            })
          }).catch(()=>{
            this.isLoading = false
            this.$message({
              type:'error',
              message:'授权失败'
            })
          })
          return
        }else{
          this.$store.dispatch("governanceTokenMarket/buy",id).then(res=>{
            console.log(res)
          })
        }
      });

    },
    getData(){
      if(this.isConnected){
        // this.$store.dispatch("governanceTokenMarket/sellRecords")
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
