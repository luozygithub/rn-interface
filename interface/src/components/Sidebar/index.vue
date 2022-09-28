<template>
  <div class="sidebar">
    <Logo v-if="showLogo" :collapse="isCollapse"></Logo>
    <el-menu router mode="vertical"
             class="menu"
             text-color="#999"
             style="text-align: left"
             :default-active="$route.path"
             :collapse="isCollapse"
             background-color="rgba(0,0,0,0)"
             unique-opened
             @select="currentIndexChange"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>市政大厅</span>
        </template>
        <el-menu-item index="/issuePublicity">发行公示</el-menu-item>
        <el-menu-item index="/lockedAnnouncement">锁仓公示</el-menu-item>
      </el-submenu>
      <el-submenu index="2" :route="'/'">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>中央银行</span>
        </template>
        <el-menu-item index="/seedExc">种子轮兑换矿池</el-menu-item>
        <el-menu-item index="/consensus">共识挖矿矿池</el-menu-item>
        <el-menu-item index="/contribution">贡献挖矿矿池</el-menu-item>
        <el-menu-item index="/invite">邀请挖矿矿池</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>彩虹银行</span>
        </template>
        <el-menu-item index="/RBTBank">RBT银行</el-menu-item>
        <el-menu-item index="/mortgageMarket">抵押借款市场</el-menu-item>
        <el-menu-item index="/tokenTransfer">令牌转让市场</el-menu-item>
      </el-submenu>

      <el-menu-item index="9"  :route="'/foundation'" :class="{'is-active':$route.path == '/foundation'}">
        <div class="nav-single-item">
          <i class="el-icon-menu"></i>
          <span>基金会</span>
        </div>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-box"></i>
          <span>彩虹财政部</span>
        </template>
        <el-menu-item index="/sourceOfIncome">收入来源公示</el-menu-item>
        <el-menu-item index="/incomeDistribution">收入分配公示</el-menu-item>
        <el-menu-item index="/incomeDividends">收入分红公示</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-medal"></i>
          <span>VIP中心</span>
        </template>
        <el-menu-item index="/myVip">购买VIP</el-menu-item>
        <el-menu-item index="/transferVip">VIP令牌转让</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-chat-round"></i>
          <span>议会中心</span>
        </template>
        <el-menu-item index="/communityToken">社区治理令牌</el-menu-item>
        <el-menu-item index="/cityNodeTokenMarket">城市节点令牌</el-menu-item>
        <el-menu-item index="/nodeList">城市节点</el-menu-item>
        <el-menu-item index="/globalGovernance">全球治理体系</el-menu-item>
<!--        <el-menu-item index="/forum">论坛</el-menu-item>-->
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
import variables from '@/styles/variables.scss'
import Logo from './Logo'

export default {
  name: "sidebar",
  components: {Logo},
  data() {
    return {
      navArr: [[
        {
          path: '/issuePublicity',
          name: '发行公示'
        },
        {
          path: '/lockedAnnouncement',
          name: '锁仓公示'
        },
      ], [
        {
          path: '/seedSub',
          name: '种子轮认购矿池'
        },
        {
          path: '/seedExc',
          name: '种子轮兑换矿池'
        },
        {
          path: '/consensus',
          name: '共识挖矿矿池'
        },
        {
          path: '/contribution',
          name: '贡献挖矿矿池'
        },
        {
          path: '/invite',
          name: '邀请挖矿矿池'
        },
      ], [
        {
          path: '/RBTBank',
          name: 'RBT银行'
        },
        {
          path: '/mortgageMarket',
          name: '抵押借款市场'
        },
        {
          path: '/tokenTransfer',
          name: '令牌转让市场'
        },
      ], [
        {
          path: '/sourceOfIncome',
          name: '收入来源公示'
        },
        {
          path: '/incomeDistribution',
          name: '收入分配公示'
        },
        {
          path: '/incomeDividends',
          name: '收入分红公示'
        }
      ], [
        {
          path: '/myVip',
          name: '购买VIP'
        },
        {
          path: '/transferVip',
          name: 'VIP令牌转让'
        }
      ], [
        {
          path: '/communityToken',
          name: '社区治理令牌'
        },
        {
          path: '/cityNodeTokenMarket',
          name: '城市节点令牌'
        },
        {
          path: '/nodeList',
          name: '城市节点'
        },
        {
          path: '/globalGovernance',
          name: '全球治理体系'
        },
        {
          path: '/forum',
          name: '论坛'
        }
      ],
      ]
    }
  },
  methods: {
    currentIndexChange(e) {
      let indexName = ["Rainbow DAO", "市政大厅", "中央银行", "彩虹银行", "彩虹财政部", "VIP中心", "议会中心"]
      this.navArr.forEach((nav, index) => {
        nav.forEach((item) => {
          if (item.path == e) {
            console.log(index, indexName[index + 1])
            this.$store.commit('app/SET_NAVNAME', indexName[index + 1])
            this.$store.commit('app/SET_NAVARR', nav)
          }
        })
      })
    }
  },
  computed: {
    isCollapse() {
      return !this.$store.state.app.sidebar.opened
    },
    activeMenu() {
      const route = this.$route
      const {meta, path} = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return true
    },
    variables() {
      return variables
    },

  },
  created() {
    this.navArr.forEach(nav => {
      nav.forEach(item => {
        if (item.path == this.$route.path) {
          this.$store.commit('app/SET_NAVARR', nav)
        }
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.sidebar {
  user-select: none;
}

.el-menu {
  border-right: solid 0px #e6e6e6;
}

.sidebar-container {
  background-size: 126% 110%;
  background: url("../../assets/img/silider_bg.png") 50% 40%;
  padding: 0!important;
  transition: width 0.28s;
  width: $sideBarWidth !important;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow-x: hidden;

  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }

  .el-scrollbar {
    height: 100%;
  }

  &.has-logo {
    .el-scrollbar {
      height: calc(100% - 50px);
    }
  }

  .is-horizontal {
    display: none;
  }

  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .svg-icon {
    margin-right: 16px;
  }

  .sub-el-icon {
    margin-right: 12px;
    margin-left: -2px;
  }

  .el-menu-item{
    height: 40px !important;
    &.is-active{
      .nav-single-item{
        color:$menuHoverColor!important;
        background-color: rgba(255,255,255,0.05)!important;
      }
    }
    .nav-single-item{
      padding-left: 16px !important;
      margin-left: -8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      width: 300px;
      height: 40px !important;
      line-height: 40px !important;
      margin-top: 10px;
      transition: 0.3s;
      &:hover{
        color: #A519BB !important;
        background-color: #f0effe !important;
        i{
          color: #A519BB !important;
        }
      }
    }
    &:hover{

      background: rgba(0,0,0,0) !important;
    }
  }
  & .nest-menu .el-submenu > .el-submenu__title,
  & .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
  }
}

</style>
