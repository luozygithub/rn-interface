<template>
  <div class="votingPeriod">
    <RainbowPanel>
      <template v-slot:name>
        提案投票
      </template>
      <template v-slot:content>
        <div class="voting-panel">
          <div class="panel1">
            <div class="header">
              <div class="left">
                <img src="../../assets/img/RBT.png" alt="">
                <span class="name">imp</span>
              </div>
              <div class="date">
                2021-02-19 15:08
              </div>
            </div>
            <div class="content">
              <p>发起提案“社区治理”，申请金额 12,000 RBT，共三阶段。</p>
              详情：我要治理社区，打造世界宇宙第一彩虹城，打造世界宇宙第一彩虹城，打造世界宇 宙第一彩虹城，打造世界宇宙第一彩虹城，打造世界宇宙第一彩虹城，打造世界宇宙第一
              彩虹城，打造世界宇宙第一彩虹城，打造世界宇宙第一彩虹城。
            </div>
            <div class="stage">

            </div>
          </div>
          <div class="panel2">
            <div class="title">
              投票期剩余 3Day12hour
            </div>
            <div class="info">
              <div class="time">
                2021-02-19 00:00结束
              </div>
              <div class="detail">
                <span class="r-g-color">
                  7
                </span>
                人通过
                <span class="r-r-color">
                  1
                </span>
                人拒绝
              </div>
            </div>
            <div class="content">

            </div>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <div class="list">
      <RainbowPanel>
        <template v-slot:name>
          委员投票
        </template>
        <template v-slot:content>

        </template>
      </RainbowPanel>
    </div>
  </div>
</template>

<script>
export default {
  name: "votingPeriod"
}
</script>

<style lang="scss" scoped>
.votingPeriod {
  text-align: left;

  .voting-panel {
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;

    .panel1, .panel2 {
      padding: 16px;
      width: 500px;
      height: 340px;
      opacity: 1;
      background: #fbfcff;
      border: 1px solid #d7e1ff;
      border-radius: 11px;
      float: left;
    }

    .panel1 {
      .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 20px;
        align-items: center;

        .left {
          display: flex;
          align-items: center;
        }

        img {
          width: 30px;
          height: 30px;
        }

        .name {
          color: #56119e;
        }

        .date {
          color: #aab3f3;
        }
      }

      .content {
        color: #333333;

        p {
          height: 30px;
        }
      }

      .stage {

      }
    }

    .panel2 {
      margin-left: 20px;

      .title {
        font-size: 20px;
        color: #56119e;
      }

      .info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }

  .list {
    margin-top: 30px;
  }
}
</style>
