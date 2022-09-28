<template>
  <!--  借款市场-->
  <div class="borrowingMarket">
    <RainbowPanel>
      <template v-slot:name>
        借款市场
      </template>
      <template v-slot:content>
        <div v-for="item in bankTokenArr" :key="item.index">
          <TableItem :tableData="item" operateRName="借给他" @operateRClick="operateRClick"/>
        </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="market">
      <template v-slot:name>
        借款市场
      </template>
      <template v-slot:content>
        <el-table :data="mortgageMarketTokenArr.slice((currentPage2-1)*pagesize2,currentPage2*pagesize2)">
          <el-table-column label="令牌编号">
            <template slot-scope="scope">
              <span>{{ scope.row.tokenId }}</span>
            </template>
          </el-table-column>
          <el-table-column label="借款人">
            <template slot-scope="scope">
              <span>{{ scope.row.ownerName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="包含RBT数量">
            <template slot-scope="scope">
              <span>{{ scope.row.rbtAmount|formatNumberTo }}</span>
            </template>
          </el-table-column>
          <el-table-column label="借款金额">
            <template slot-scope="scope">
              <span>{{ scope.row.rbtAmount|formatNumberTo }}</span>
            </template>
          </el-table-column>

          <el-table-column label="借款时间">
            <template slot-scope="scope">
              <span>{{ scope.row.day }}</span>
            </template>
          </el-table-column>
          <el-table-column label="还款时间">
            <template slot-scope="scope">
              <span>{{ new Date(scope.row.expireTime * 1000)|formatDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="剩余天数">
            <template slot-scope="scope">
              <span>{{ parseInt((scope.row.expireTime * 1000 - (new Date()).getTime()) / 86400000) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="年化利息">
            <template slot-scope="scope">
              <span>{{ scope.row.apy }}</span>
            </template>
          </el-table-column>
          <el-table-column label="利息费">
            <template slot-scope="scope">
              <span>{{ scope.row.amount * parseInt(scope.row.day) / 360 * scope.row.apy |formatNumberTo }}</span>
            </template>
          </el-table-column>

          <el-table-column label="借款">
            <template slot-scope="scope">
              <el-button size="mini" @click="lend(scope.row.tokenId)" class="button1">借给他</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange2"
            @current-change="handleCurrentChange2"
            :current-page="currentPage2"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize2"
            layout="total, sizes, prev, pager, next, jumper"
            :total="mortgageMarketTokenArr.length">
        </el-pagination>
      </template>
    </RainbowPanel>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Moment from 'moment'

export default {
  name: "borrowingMarket",
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 5,    //    每页的数据
      currentPage2: 1, //初始页
      pagesize2: 5,    //    每页的数据
    }
  },
  created() {
    if (this.isConnected) {
      // this.getData()
    }
  },
  methods: {
    operateRClick() {
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleSizeChange2(val) {
      this.pagesize2 = val;
    },
    handleCurrentChange2(val) {
      this.currentPage2 = val;
    },
    isLiquidation(token) {
      return ((new Date()).getTime() - token.expireTime * 1000) < 0
    },
    getData() {
      // this.$store.dispatch("mortGageLoan/sellRecords")
    },
    liquidation(id) {//清算
      console.log(id)
      this.$store.dispatch("mortGageLoan/liquidation", id).then(res => {
        console.log(res)
        this.$message.success("清算成功")
      }).catch(err => {
        console.log(err)
        this.$message.error("清算失败" + err)
      })
    },
    borrowAgain(id) {//再次借款
      this.$store.dispatch("mortGageLoan/repayment", id).then(res => {
        console.log(res)
        this.$message.success("再次借款成功")
      }).catch(err => {
        console.log(err)
        this.$message.error("再次借款失败" + err)
      })
    },
    lend(id) {//出借
      this.$store.dispatch("mortGageLoan/lend", id).then(res => {
        console.log(res)
        this.$message.success("借款成功")
      }).catch(err => {
        console.log(err)
        this.$message.error("借款失败" + err)
      })
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    mortgageMarketTokenArr() {
      return []
    },
    bankTokenArr() { //发布借款信息表格
      let arr = []
      this.$store.state.rainbowBank.records.forEach((item, index) => {
        let obj = {
          index: index + 1,
          nameObj: {
            title: "令牌编号",
            data: item.tokenId
          },
          infoArr: [
            {
              title: "锁仓类型",
              data: item.month + "个月"
            },
            {
              title: "包含RBT数量",
              data: item.amount
            },
            {
              title: "生成社区治理令牌总额度",
              data: ""
            },
            {
              title: "目前还可以生成社区治理令牌额度",
              data: ""
            },
          ],
          detailArr: [
            {
              title: "初始生成人",
              data: item.depositor.substr(0, 3) + '...' + item.depositor.substr(item.depositor.length - 3, 3)
            },
            {
              title: "现在所有人",
              data: item.depositor.substr(0, 3) + '...' + item.depositor.substr(item.depositor.length - 3, 3)
            },
            {
              title: "生成时间",
              data: Moment(item.created_at).format('YYYY-MM-DD')
            },
            {
              title: "到期时间",
              data: Moment(item.updated_at).format('YYYY-MM-DD')
            },
          ],
          withdrawa: [
            {
              address: item.depositor,
              tokenid: item.tokenId

            }
          ]
        }
        arr.push(obj)

      })
      return arr
    },
  },
  watch: {
    account() {
      // this.getData()
    },
  },
}
</script>

<style lang="scss" scoped>
.borrowingMarket {
  .market {
    margin-top: 20px;
  }
}
</style>
