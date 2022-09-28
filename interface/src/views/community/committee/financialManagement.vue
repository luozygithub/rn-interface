<template>
  <!--财政管理-->
  <div class="financialManagement">
    <RainbowPanel>
      <template v-slot:name>
        全球治理委员会财政收入
      </template>
      <template v-slot:content>
        <div class="info">
          <SimplePanel>
            <template v-slot:name>
              财政总收入
            </template>
            <template v-slot:content>
              <div class="info-item">
                <div class="line1">
                  <div>数量</div>
                  <div class="mount r-orange-color">
                    <strong>{{ 15520 | formatNumber }}RBT</strong>
                  </div>
                </div>
                <div class="line2">
                  <div>价值</div>
                  <div class="mount">
                    <div><strong class="r-y-color">BTC:</strong> {{ 15520 | formatNumber }}</div>
                    <div><strong class="r-r-color">USDT:</strong> {{ 2.1551515 | formatNumber }}</div>
                  </div>
                </div>
              </div>
            </template>
          </SimplePanel>
          <SimplePanel>
            <template v-slot:name>
              可用资金
            </template>
            <template v-slot:content>
              <div class="info-item">
                <div class="line1">
                  <div>数量</div>
                  <div class="mount r-purple-color">
                    <strong>{{ 15520 | formatNumber }}RBT</strong>
                  </div>
                </div>
                <div class="line2">
                  <div>价值</div>
                  <div class="mount">
                    <div><strong class="r-y-color">BTC:</strong> {{ 15520 | formatNumber }}</div>
                    <div><strong class="r-r-color">USDT:</strong> {{ 2.1551515 | formatNumber }}</div>
                  </div>
                </div>
              </div>
            </template>
          </SimplePanel>
          <SimplePanel>
            <template v-slot:name>
              管理员薪资
            </template>
            <template v-slot:content>
              <div class="info-item">
                <div class="line1">
                  <div>数量</div>
                  <div class="mount r-yellow-color">
                    <strong>{{ 15520 | formatNumber }}RBT</strong>
                  </div>
                </div>
                <div class="line2">
                  <div>价值</div>
                  <div class="mount">
                    <div><strong class="r-y-color">BTC:</strong> {{ 15520 | formatNumber }}</div>
                    <div><strong class="r-r-color">USDT:</strong> {{ 2.1551515 | formatNumber }}</div>
                  </div>
                </div>
              </div>
            </template>
          </SimplePanel>
          <SimplePanel>
            <template v-slot:name>
              委员会薪资
            </template>
            <template v-slot:content>
              <div class="info-item">
                <div class="line1">
                  <div>数量</div>
                  <div class="mount r-green-color">
                    <strong>{{ 15520 | formatNumber }}RBT</strong>
                  </div>
                </div>
                <div class="line2">
                  <div>价值</div>
                  <div class="mount">
                    <div><strong class="r-y-color">BTC:</strong> {{ 15520 | formatNumber }}</div>
                    <div><strong class="r-r-color">USDT:</strong> {{ 2.1551515 | formatNumber }}</div>
                  </div>
                </div>
              </div>
            </template>
          </SimplePanel>
        </div>
      </template>
    </RainbowPanel>
    <RainbowPanel class="financial-detail">
      <template v-slot:name>
        全球治理委员会财政详情
      </template>
      <template v-slot:content>
        <el-table :data="financialData">
          <el-table-column
              label="#"
              type="index"
          >
          </el-table-column>
          <el-table-column
              prop="name"
              label="使用者"
          >
          </el-table-column>
          <el-table-column
              prop="type"
              label="类型"
          >
          </el-table-column>
          <el-table-column
              prop="use"
              label="用途"
          >
          </el-table-column>
          <el-table-column
              prop="amount"
              label="金额"
          >
          </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="currentChange">
        </el-pagination>
      </template>
    </RainbowPanel>
  </div>
</template>

<script>
export default {
  name: "financialManagement",
  data() {
    return {
      total: 0,
      financialData: [{}]
    }
  },
  methods: {
    currentChange() {

    }
  }
}
</script>

<style lang="scss" scoped>
.financialManagement {
  .info {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;

    .simplePanel {
      width: 260px;
    }
  }

  .info-item {
    .line1, .line2 {
      display: flex;

      .mount {
        padding-left: 10px;
        line-height: 18px;
      }
    }

    .line1 {
      .mount {
        font-size: 18px;
      }
    }

    .line2 {
      margin-top: 10px;

      .mount {
        > div {
          margin-bottom: 6px;
        }
      }
    }
  }

  ::v-deep .simplePanel:nth-child(1) .header {
    background: linear-gradient(270deg, #f15887, #fe9b86);
  }

  ::v-deep .simplePanel:nth-child(3) .header {
    background: linear-gradient(90deg, #f7c598, #ff8886);
  }

  ::v-deep .simplePanel:nth-child(4) .header {
    background: linear-gradient(90deg, #44dec5, #4ebcfa);
  }

  .financial-detail {
    margin: 30px 0;
  }
}
</style>
