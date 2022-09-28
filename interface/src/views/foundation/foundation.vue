<template>
<!--  基金会-->
<div class="foundation">
  <RainbowPanel>
    <template slot="name">
      Sources of Foundation income
    </template>
    <template slot="content">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="type"
            label="Type"
        >
        </el-table-column>
        <el-table-column
            prop="totalRevenue"
            label="Total revenue"
        >
        </el-table-column>
        <el-table-column
            prop="incomeThisMonth"
            label="Income this month">
        </el-table-column>
        <el-table-column
            prop="Distribute"
            label="Distribute">
        </el-table-column>
      </el-table>
    </template>
  </RainbowPanel>
  <RainbowPanel>
    <template slot="name">
      Foundation income allocation
    </template>
    <template slot="content">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="project"
            label="Project"
         >
        </el-table-column>
        <el-table-column
            prop="subtype"
            label="Subtype"
        >
        </el-table-column>
        <el-table-column
            prop="percentage"
            label="Percentage">
        </el-table-column>
        <el-table-column
            prop="percentage"
            label="Percentage">
        </el-table-column>
        <el-table-column
            prop="totalAllocatedAmount"
            label="Total allocated amount">
        </el-table-column>
        <el-table-column
            prop="Amount allocated this month"
            label="Amount allocated this month">
        </el-table-column>
        <el-table-column
            prop="Amount allocated this week"
            label="Amount allocated this week">
        </el-table-column>
        <el-table-column
            prop="Start Value Guardian"
            label="Start Value Guardian">
        </el-table-column>
        <el-table-column
            prop="Generate stablecoin"
            label="Generate stablecoin">
        </el-table-column>
      </el-table>
    </template>
  </RainbowPanel>
</div>
</template>

<script>
export default {
name: "foundation",
  data(){
    return{
      tableData:[]
    }
  }
}
</script>

<style scoped>

</style>
