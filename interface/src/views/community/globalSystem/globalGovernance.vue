<template>
<!--全球治理体系  -->
<div class="globalGovernance">
  <RainbowPanel>
    <template v-slot:name>
      全球治理基金会
    </template>
    <template v-slot:content>
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            label="#"
            type="index"
        >
        </el-table-column>
        <el-table-column
            prop="name"
            label="名称"
            width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button class="button1" size="mini" @click="handleClick(scope)">
              生成
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </RainbowPanel>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "globalGovernance",
  data(){
    return {
      tableData:[]
    }
  },
  computed:{
    ...mapGetters([
      'isConnected',
      'account'
    ]),
  },
  methods:{
    handleClick(){},
  }
}
</script>

<style scoped>

</style>
