<template>
<div class="mySellPanel">
  <RainbowPanel>
    <template v-slot:name>
      我购买的令牌
    </template>
    <template v-slot:content>
      <el-table
          ref="multipleTable"
          :data="marketTokenArr"
          border
          :default-sort="{prop: 'tokenId', order: 'ascending'}"
      >
        <el-table-column
            label="令牌编号"
        >
          <div slot-scope="scope">
            <div class="dix">{{scope.$index}}</div>
            {{scope.row.type + '-' + scope.row.id }}
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
            <el-button size="mini" class="button1" @click="revoke(scope.row)">撤销</el-button>
          </div>
        </el-table-column>
      </el-table>
    </template>
  </RainbowPanel>
</div>
</template>


<script>
import {mapGetters} from "vuex";
import {typeByToken} from "@/utils/maps";

export default {
  name: "mySellPanel",
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    marketTokenArr(){//市场令牌数组
      let arr1 = this.$store.state.governanceTokenMarket.marketTokenArr
      let arr2 =  this.$store.state.rbtFactory721.tokenArr
      let arr = []
      arr2.forEach(token=>{
        arr1.forEach(item=>{
          if(token.ownerName==item.ownerName && token.id == item.tokenId && token.type.trim() == typeByToken.get(item.addressGovernanceToken).trim()){
            arr.push({
              ...token,
              price:item.price,
              creationTime:item.creationTime
            })
          }
        })
      })

      return arr
    },
    tokenArr(){//市场令牌数组
      return this.$store.state.rbtFactory721.tokenArr
    },
  },
  created() {
    this.getData()
  },
  methods:{
    revoke(){//撤销出售

    },
    getData(){
      if(this.isConnected){
        // this.$store.dispatch("governanceTokenMarket/sellRecords")
      }
    }
  },
  watch: {
    account() {
      this.getData()
    },
  }
}
</script>

<style lang="scss" scoped>
.mySellPanel{

}
</style>
