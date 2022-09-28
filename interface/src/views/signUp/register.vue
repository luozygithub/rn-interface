<template>
  <div class="register">
    <div class="header">
      <div class="logo">
        <img src="../../assets/img/DAO.png" alt="">
      </div>
      <div style="display: flex;">
        <ConnectWallet></ConnectWallet>
        <el-button size="mini" round class="button2">
          English
        </el-button>
      </div>
    </div>
    <div class="box">
      <div class="box-content" :style="hasInvitationCode?'animation:mymove 0.5s;animation-fill-mode:forwards;':''">
        <div class="panel1">
          <div class="heading">
            <img src="../../assets/img/rainbow_dao.png" alt="">
            <div class="intro">Rainbow decentralized communtiy governance platform</div>
          </div>
          <div class="content">
            <div>填写邀请码</div>
            <div class="input-area">
              <el-input class="input1" size="mini" v-model="invitationCode" placeholder="邀请码"></el-input>
              <el-button class="button1" round size="mini" @click="changeState">sign up</el-button>
            </div>
            <div>Invitation code advantage</div>
            <div class="introduction">Fill in the invitation code and you will get 10 RBTs immediately, and the inviter
              will
              get 10 RBTs. After you become a member of Rainbow City, you will get the same benefits if you invite
              others.
            </div>
          </div>
        </div>
        <div class="panel2">
          <div class="heading">
            <span>You have become the</span>
            <span>{{ rainbowUserSize }}th</span>
            <span>Rainbow Warrior in Rainbow City</span>
          </div>
          <div class="content">
            <div class="nickname">
              Nickname
              <el-input class="input1" size="mini" v-model="nickname" placeholder="nickname"></el-input>
            </div>
            <div class="area">
              <div class="item">
                Country
                <div class="choose-item" @click="chooseItem(0)">
                  <span>{{ searchArr[0] }}</span>
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
              <div class="item">
                City
                <div class="choose-item" @click="chooseItem(1)">
                  <span>{{ searchArr[1] }}</span>
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
              <div class="item">
                City node
                <div class="choose-item" @click="chooseItem(2)">
                  <span>{{ searchArr[2] }}</span>
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
              <div class="item">
                Area
                <div class="choose-item" @click="chooseItem(3)">
                  <span>{{ searchArr[3] }}</span>
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
            </div>
            <el-button class="button1" round size="mini" @click="register">sign up Rainbow City</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="link">
        <a href=""><img src="../../assets/img/link1.png" alt=""></a>
        <a href=""><img src="../../assets/img/link2.png" alt=""></a>
        <a href=""><img src="../../assets/img/link3.png" alt=""></a>
        <a href=""><img src="../../assets/img/link4.png" alt=""></a>
        <a href=""><img src="../../assets/img/link5.png" alt=""></a>
      </div>
      <!--      <div class="content">-->
      <!--        <img src="../../assets/img/triangle.png" alt="">-->
      <!--        <h3>RBT种子轮认购矿池</h3>-->
      <!--        RBT-seed认购规则：每轮100万枚，一共3000万枚，一共分为30轮，价格0.1U起，每一轮结束后新一轮比上一轮价格 递增0.01U，最高0.39U，单次最低认购100枚，最高认购10000枚。-->
      <!--      </div>-->
    </div>
    <el-dialog
        :title="dialog.name"
        :visible.sync="chooseItemDialog"
        class="dialog"
    >
      <div>
        <div class="dialog-choose">
          <el-input
              class="input1"
              :placeholder="'搜索' + dialog.name.substr(2,4)"
              suffix-icon="el-icon-search"
              v-model="searchArr[chooseItem]">
          </el-input>
        </div>
        <div class="dialog-list">

        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ConnectWallet from "@/components/ConnectWallet";
import {apiqueryNewId,userCount} from "@/api/rbtVip";

export default {
  name: "register",
  components: {ConnectWallet},
  data() {
    return {
      rainbowUserSize: 0,//彩虹城人数
      searchArr: [],
      chooseItemDialog: false,
      dialog: {
        name: '选择国家',
        list: [],
        label: 'city'
      },
      invitationCode: null,
      hasInvitationCode: false,
      nickname: '',
      area: '000',
      city: '000',
      cityNode: '000',
      country: '001'
    }
  },
  computed: {
    isConnected() {
      return this.$store.state.app.isConnected
    },
    account() {
      return this.$store.state.app.account
    }
  },
  created() {
    userCount().then(count=>{
      this.rainbowUserSize = count + 1
    })
  },
  methods: {
    // 根据邀请码获取邀请人信息
    async changeState() {
      if (!this.isConnected) {
        this.$message({message: "请先连接钱包", type: 'error'})
        return
      }
      if (!this.$store.state.app.web3) {
        this.$message.warning("请先连接钱包")
        return
      }
      if (!this.invitationCode || this.invitationCode.length < 8) {
        this.$message.error("请填写正确的邀请码")
        return
      }
      // 验证码转为id
      var referrerId = ''
      invitationNumber = parseInt(this.invitationCode)
      this.invitationNumber = invitationNumber

      // 验证码转为id
      let codeArr = this.invitationCode.toString().split('')
      let invitationNumber = ''
      codeArr.forEach(code => {
        invitationNumber += String.fromCharCode(code.charCodeAt(0) - 17)
      })
      console.log(invitationNumber)
      invitationNumber = parseInt(invitationNumber)
      this.invitationNumber = invitationNumber

      await apiqueryNewId({newId: invitationNumber}).then(res => {
        referrerId = res;
      })

      if (referrerId != 0 || invitationNumber == 20090103) {
        if (invitationNumber == 20090103) {
          referrerId = invitationNumber;
        }

        this.hasInvitationCode = true

      } else {
        this.$message.error("请填写正确的邀请码")
      }
    },

    chooseItem(index) {
      this.chooseItemDialog = true
      switch (index) {
        case 0:
          this.dialog = {
            name: "选择国家"
          }
          break;
        case 1:
          this.dialog = {
            name: "选择城市",
          }
          break;
        case 2:
          this.dialog = {
            name: "选择城市节点"
          }
          break;
        case 3:
          this.dialog = {
            name: "选择区域"
          }
          break;
      }
    },
    /**
     *     function getCode(uint256 b) private  returns (string memory){
        bytes memory str =new bytes(7);
        for(uint8 i=0;i<7;i++){
            str[6-i] =pas[(uint8(b % 36))];
            b=b/36;
        }
        return string(str);
    }
     */
    register() {
      this.$store.dispatch("RainbowRbtVip/register", {
        referrerId: this.invitationNumber,
        nickname: this.nickname,
      }).then(() => {
        this.$message.success("注册成功")
        this.$store.dispatch("RainbowRbtVip/getMyUser")
        setTimeout(() => {
          this.$router.push({name: 'home'})
        }, 500)
      }).catch(err => {
        this.$message.error("注册失败" + err)
      })

    }
  }
}
</script>

<style lang="scss">
@keyframes mymove {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: -800px;
  }
}

.register {
  height: 100vh;
  width: 100vw;
  background-image: url("../static/img/beijing.png");
  background-size: cover;
  font-size: 12px;

  color: white;
  overflow: auto;
  min-height: 660px;
  position: relative;

  .dialog {
    color: white;

    .el-dialog {
      width: 400px;
      height: 560px;
      background: linear-gradient(45deg, #232426, #280b61 100%);

      .el-dialog__title {
        color: white;
      }
    }

    .dialog-choose {

    }

    .dialog-list {

    }
  }

  .choose-item {
    display: flex;
    padding: 0 10px;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    height: 36px;
    opacity: 1;
    background: rgba(255, 255, 255, 0.10);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 26px;
  }

  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;

    .link {
      float: left;
      position: absolute;
      bottom: 10px;
      margin-left: 10px;

      a {
        img {
          width: 16px;
        }

        margin-left: 10px;
      }
    }

    .content {
      width: 728px;
      margin: 10px auto;

      img {
        width: 40px;
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 30px 30px 0 30px;

    .logo {
      width: 137px;

      img {
        width: 100%;
      }
    }
  }

  .box {
    height: 600px;
    width: 100%;
    overflow: hidden;

    .box-content {
      text-align: center;
      margin-top: 0px;
    }
  }

  .panel2 {
    margin-top: 400px;

    .heading {
      span {
        padding: 0 10px;
      }

      span:nth-child(2) {
        font-size: 40px;
        font-weight: bold;
      }
    }

    .content {
      font-size: 14px;

      .input1 {
        margin-top: 6px;
      }

      .nickname {
        margin: 0 auto;
        width: 300px;
      }

      .area {
        margin: 30px auto;
        width: 900px;
        display: flex;

        .item {
          text-align: left;
          margin-left: 20px;
          width: 220px;
        }
      }

      .button1 {
        padding: 10px 30px;
        margin-top: 100px;
      }
    }
  }


  .heading {
    margin: 10vh 0 70px;

    img {
      user-select: none;
      width: 950px;
    }

    .intro {
      margin-top: 20px;
      font-family: Roboto;
      font-size: 34px;
      font-weight: bold;
    }
  }

  .content {
    .introduction {
      width: 700px;
      margin: 10px auto 0;
      font-size: 16px;
      color: #F8F8F8;
    }

    .input-area {
      display: flex;
      width: 300px;
      margin: 10px auto;

      .button1 {
        margin: 0 10px;
        padding: 0 30px;
      }

    }
  }
}
</style>
