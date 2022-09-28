<template>
  <!--提案-->
  <div class="proposal">
    <RainbowPanel>
      <template v-slot:name>
        <div class="proposal-header">
          <div class="name">
            提案详情
            <div class="status">
              {{ proposal.stageName }}
            </div>
          </div>
          <div class="time">
            {{ proposal.stageName }}剩余{{ proposal.stageLastTime }}
          </div>
        </div>
      </template>
      <template v-slot:content>
        <div class="proposal-status">
          <div class="schedule">
            <div class="line1">
              <div class="left">
                <span class="r-g-color">
                  {{ ((voteNumber / 13) * 100).toFixed(0) }}%
                </span>
                <span>
                  <strong class="r-g-color">
                     {{ voteNumber }}人
                  </strong>
                 已通过
                </span>
              </div>
              <div class="right">
                 <span>
                  <strong class="r-orange-color">
                     {{ 13 - voteNumber }}人
                  </strong>
                 未选
                </span>
                <span class="r-orange-color">
                  {{ ((1 - (voteNumber / 13)) * 100).toFixed(0) }}%
                </span>
              </div>
            </div>
            <div class="line2">
              <div class="agree" :style="'width:' + 360* (voteNumber/13) + 'px'"></div>
              <div class="refuse" :style="'width:' + 360* (1-(voteNumber/13))+ 'px'"></div>
            </div>
            <div class="line3" v-if="proposal.status==1">
              <el-button size="mini" @click="agreeProposal"> 同意</el-button>
              <!--              <el-button size="mini"> 拒绝</el-button>-->
            </div>
            <div class="line4" v-if="proposal.status==3">
              <el-button size="mini" @click="isShowOppose=true"> 踩</el-button>
            </div>
          </div>
          <div class="vote-detail">
            <div class="votes-item">
              <div>我的票数</div>
              <strong class="r-purple-color">{{ myVote| formatNumber }}</strong>
            </div>
            <div class="votes-item">
              <div>被委托票数</div>
              <strong class="r-green2-color">{{ myCampaignVote| formatNumber }}</strong>
            </div>
            <div class="votes-item">
              <div>我已委托票数</div>
              <strong class="r-orange-color">{{ 0| formatNumber }}</strong>
            </div>
          </div>
          <div class="proposal-operating" v-if="proposal.status==2">
            <el-button size="mini">撤销</el-button>
            <el-button size="mini">委托</el-button>
            <el-button size="mini">市场</el-button>
          </div>
        </div>
        <div class="r-line" style="background: #eaeaea;margin-top:30px;"></div>
        <div class="proposal-content">
          <div class="content-html">
            <div class="proposal-name">{{ proposal.name }}</div>
            <div v-html="proposal.description"></div>
            <div class="r-line"></div>
            <div class="proposal-detail">
              <div class="left">
                <div class="proposal-people">
                  <div class="title">
                    <div class="dot"></div>
                    <strong>提案者</strong>
                  </div>
                  <div class="title" style="display: flex;align-items: center;">
                    <img class="header"
                         src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2596784910,2026005587&fm=26&gp=0.jpg"
                         alt="">
                    <strong class="name">{{ proposal.proposalOwnerName }}</strong>
                  </div>
                </div>
                <div class="proposal-time">
                  <div class="title">
                    <div class="dot"></div>
                    <strong>提案时间</strong>
                  </div>
                  <div>
                    {{ new Date(proposal.creationTime * 1000) | formatDate }}
                  </div>
                </div>
                <div class="proposal-amount">
                  <div class="title">
                    <div class="dot"></div>
                    <strong>申请金额</strong>
                  </div>
                  <div class="amount">
                    <strong> <span class="r-p-color"> {{ proposal.withdrawalNumber | formatNumber }}</span> RBT</strong>
                  </div>
                  <div class="stage">
                    <div> 第一阶段： <strong class="r-p-color">
                      {{ (proposal.withdrawalNumber / proposal.withdrawalCount).toFixed(4)  |formatNumber }}
                      RBT</strong></div>
                    <div> 第二阶段： <strong class="r-p-color">
                      {{ (proposal.withdrawalNumber / proposal.withdrawalCount).toFixed(4) |formatNumber }} RBT</strong>
                    </div>
                    <div> 第三阶段： <strong class="r-p-color">
                      {{ (proposal.withdrawalNumber / proposal.withdrawalCount).toFixed(4) |formatNumber }} RBT</strong>
                    </div>
                  </div>
                  <div class="operating" v-if="proposal.stageIndex==3">
                    <el-button size="mini">领取</el-button>
                    <el-button size="mini">报告</el-button>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="title">
                  <div class="dot"></div>
                  <strong>提交记录</strong>
                </div>
                <div class="step">
                  <el-steps :active="parseInt(proposal.status)" direction="vertical" finish-status="success">
                    <el-step title="已建立" :description="new Date(proposal.creationTime*1000) | formatDate"></el-step>
                    <el-step title="投票期" :description="new Date((proposal.creationTime)*1000 ) | formatDate"></el-step>
                    <el-step title="公示期"
                             :description="new Date((parseInt(proposal.creationTime)+ 3*86400 )*1000) | formatDate"></el-step>
                    <el-step title="执行期"
                             :description="new Date((parseInt(proposal.creationTime)+10*86400)*1000 ) | formatDate"></el-step>
                    <el-step title="已执行"
                             :description="new Date((parseInt(proposal.creationTime)+20*86400)*1000 ) | formatDate"></el-step>
                  </el-steps>
                </div>
              </div>
            </div>
            <el-button @click="toReport" size="small" style="margin-top: 20px;"
                       v-if="proposal.proposalOwner.toLowerCase()==account.toLowerCase()" class="button1">
              提交报告
            </el-button>
          </div>
          <div class="r-line"></div>
          <div class="discuss">
            <div class="discuss-item" v-for="(item,index) in discussArr" :key="index">
              <div class="user-info">
                <img class="header"
                     :src="item.header"
                     alt="">
                <div>
                  <div class="name r-purple-color">
                    {{ item.name }}
                  </div>
                  <div class="time">
                    2021-03-15 11:01
                  </div>
                </div>
              </div>
              <div class="content">
                {{ item.content }}
              </div>
              <div class="like-drop">
                  <span>
                    <img src="@/assets/img/like.png" alt="">
                    {{ 1000000|formatNumber }}
                  </span>
                <span>
                    <img src="@/assets/img/drop.png" alt="">
                    {{ 1000000|formatNumber }}
                  </span>
              </div>
              <div class="r-line"></div>
            </div>
            <div class="more-box">
              <div class="more">
                MORE
              </div>
            </div>
          </div>
        </div>
        <div class="r-line"></div>
        <div class="submit-comments">
          评论
          <el-input type="textarea" placeholder="请输入" :rows="9"></el-input>
          <div style="text-align: center">
            <el-button class="button1" size="small">发表</el-button>
          </div>
        </div>
      </template>
    </RainbowPanel>
    <!--  踩 投多少票 弹窗 -->
    <el-dialog
        title="输入票数"
        :visible.sync="isShowOppose"
        width="400px"
    >
      <div class="oppose-dialog">
        <el-input v-model="opposeAmount"></el-input>
        我的剩余票数：{{ myCampaignVote }}
        <el-button class="button1" @click="oppose">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

let stageByIdx = new Map([
  ["1", "投票期"],
  ["2", "公示期"],
  ["3", "执行期"],
  ["4", "已执行"],
  ["5", "已拒绝"],
])
export default {
  name: "proposal",
  data() {
    return {
      isShowOppose: false,//踩 弹窗
      opposeAmount: 0,//反对票数
      proposal: {
        status: 3,//提案阶段
        stageName: '投票',//阶段名称
        htmlContent: `<div id="left-container" class="left-container"><div class="item-wrap"><div class="article " id="article" data-islow-browser="0"><div class="article-content"><p><span class="bjh-p"><span class="bjh-strong">撰文：LeftOfCenter</span></span></p><p><span class="bjh-p">随着流动性挖矿越来越火热，越来越多的 DeFi 项目开始加入<span class="bjh-strong">收益耕种</span>（即「流动性挖矿」） 大军，DeFi 链上锁仓总值大幅增长。DeBank 的数据显示，短短一个多月的时间， <span class="bjh-strong">DeFi 锁定总价值</span>已经从 6 月初的 10 亿美元增长至目前<span class="bjh-strong">超过 30 亿美金</span>。</span></p><p><span class="bjh-p">随之而来的是投资者对不断增长的安全风险的担忧。</span></p><p><span class="bjh-p">数据显示，仅在今年过去的大半年中，最少发生了<span class="bjh-strong">10 起黑客事件</span>，导致本就数量寥寥的 DeFi 用户损失大量资金。随着流动性挖矿的增长， <span class="bjh-strong">DeFi 保险业务</span>成为 DeFi 投资者十分迫切的需求，也成为备受关注的 DeFi 细分赛道。</span></p><p><span class="bjh-p">在为数不多的去中心化保险服务中， <span class="bjh-strong">Nexus Mutual</span>是值得关注的一个。短短半个月期间，其原生代币 NXM 价格从 7 月 1 日的 3.8 美金迅速涨至目前的 9.6 美金，并在 7 月 12 日达到峰值，价格高达 21 美金，半个月内最高增长涨幅<span class="bjh-strong">达 6 倍之多</span>。同时，其市值也从 7 月 1 日 1,680 万美元增长到目前的 4680 万美元，并一度高达 9180 万美金，半个月内最高增长幅度为 4.4 倍。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics5.baidu.com/feed/8cb1cb134954092313bb6ac10a8f2e0fb1de4999.jpeg?token=8fb424f29cac7dbad33731ef7c0e23e8" data-loaded="0"></div><p><span class="bjh-p">从市值和币价来看，Nexus Mutual 取得了不错的增长成绩。然而，Nexus Mutual 真的是<span class="bjh-strong">由需求推动</span>的增长，还是<span class="bjh-strong">短期拉盘</span>所致？除了币价和市值之外，还有哪些基本面指标可供参考？这些指标的情况又如何？</span></p><p><span class="bjh-p">想弄懂这些问题，请继续往下看。看懂再买，是一名价值投资人的基本素养。</span></p><p><span class="bjh-h3">Nexus Mutual 究竟是什么？</span></p><p><span class="bjh-p">对于不熟悉 Nexus Mutual 的用户，让我们先简单科普一下 Nexus Mutual 的<span class="bjh-strong">保险模式</span>。</span></p><p><span class="bjh-p">Nexus Mutual 允许用户<span class="bjh-strong">为特定的智能合约购买保险</span>，以针对目前一些主流协议中智能合约漏洞产生的意外投保，比如 <span class="bjh-strong">Compound、Aave 和 Uniswap</span>。用户可在 Nexus Mutual 上对特定智能合约进行 30 天及以上的保期投保，每份保险都用 Nexus Mutual 的<span class="bjh-strong">原生代币 NXM</span> 计价，并允许以 ETH 或 DAI 支付。</span></p><p><span class="bjh-p">与传统的互助保险类似，Nexus Mutual 由 NXM 代币持有人所有，同时也负责提供保险背后的资本。NXM 代币作为维持该系统运转的<span class="bjh-strong">核心资产</span>，代表的是社区成员权益，允许用户购买保险、参与索赔评估、通过质押 （staking） 的方式进行<span class="bjh-strong">风险评估和参与社区治理</span>等。</span></p><p><span class="bjh-p">用户可使用 ETH 购买 NXM 代币，成为风险评估师。需要注意的是，该社区成员必须<span class="bjh-strong">通过 KYC</span>——也就是说，光有 NXM 代币还不足以成为 Nexus Mutual 的成员，而要通过 KYC 后被加入白名单后才能成为风险评估师参与 staking。对于每一份特定的保险，NXM 持有人需对其进行风险评估，并通过 staking 其背后的智能合约来表达<span class="bjh-strong">是否愿意承保</span>的意愿。</span></p><p><span class="bjh-p">可以说， <span class="bjh-strong">Staking 机制</span>是 Nexus Mutual 的核心基础，一份新保险的产生的前提是 NXM 持有人愿意对其进行 staking，而 staking 资产的多少则决定了特定智能合约可满足的购买需求。</span></p><p><span class="bjh-p">社区成员一旦成为<span class="bjh-strong">风险评估师</span>，可通过参与 staking 获得收益，该收益来自用户购买保单的费用。下图是目前各个 DeFi 项目智能合约所产生的保险费用，其中<span class="bjh-strong">保险费收益的 50％</span>会分给 staking 参与者。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics4.baidu.com/feed/d6ca7bcb0a46f21f76508f9f6ff394660e33aef1.jpeg?token=f911387f7c7215d31ba9c0d6562bb031" data-loaded="0"></div><p><span class="bjh-p">当然，有收益的同时也要承担风险：社区成员参与 staking 也是<span class="bjh-strong">有风险</span>的，一旦有因合约导致意外发生且索赔被通过，该风险评估者的抵押代币也将首当其冲会被销毁掉，以对承保人进行补偿。也就是说，他们<span class="bjh-strong">既是奖励获得者，同时也是风险承担者</span>。</span></p><p><span class="bjh-p">必须特别指出的是，Nexus Mutual 目前<span class="bjh-strong">只针对智能合约进行承保</span>，也就是说，只有因智能合约漏洞导致的意外财产损失才有可能通过索赔，而那些因可组合性带来的系统性风险则不在承保范围内。</span></p><p><span class="bjh-p">举例来说，今年 2 月发生的一起 <span class="bjh-strong">bZx 闪贷</span>黑客攻击导致 32 万美元的损失，一开始调查时被认为和 bZx 的智能合约无关，因此该保险索赔未被通过，后来随着更多信息公布，发现确实是一起由智能合约漏洞导致的黑客事件，因此该保险索赔最终被通过。</span></p><p><span class="bjh-p">迄今为止，Nexus Mutual 总共产生过<span class="bjh-strong">25 项保险索赔案例</span>，其中只有 3 项索赔被通过，且这 3 项通过的索赔都与 bZx 黑客攻击相关，其中一笔最大的索赔金额为 30,400 美元，占所有已付索赔的 90.7％。无论是否决还是通过，每一次投票的<span class="bjh-strong">共识率都高达 99％以上</span>。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics0.baidu.com/feed/2cf5e0fe9925bc31910600e5c40872b7ca137056.jpeg?token=30f230a818c65d69a7b96673a70983c2" data-loaded="0"></div><p><span class="bjh-p">当然，谁都不愿意有安全事故发生，因此，对于风险评估者来说，只有在认为该智能合约是安全的情况下才愿意进行 staking 对保单承保，这就相当于是在<span class="bjh-strong">对智能合约的安全性押注</span>。换个角度来看，这意味着资金量越多的 staking 资产池，该智能合约越是被广泛认为是安全的。</span></p><p><span class="bjh-p">Nexus Mutual 创立于 2017 年，是一家在英国设立的担保有限公司基于相互保险组织结构运作，这意味着所有保险理赔均由董事会 （即 Nexus Mutual 成员） 酌情决定。这样， <span class="bjh-strong">NXM 持有者</span>有权决定是否应支付特定的索赔申请。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics4.baidu.com/feed/ac4bd11373f0820233c97ed8e62c04eba9641bd8.jpeg?token=225d47fc9a0fa44cb5bb11ab0173e8ba" data-loaded="0"></div><p><span class="bjh-p"><span class="bjh-strong">Nexus Mutual 创始人 Hugh Karp</span></span></p><p><span class="bjh-p">目前， <span class="bjh-strong">Hugh Karp</span>是 Nexus Mutual 的创始人，Karp 在保险业拥有超过 15 年的经验，曾经担任 UK Life Operations 的 CFO。董事会成员 Graeme Thurgood 在英国有 17 年的丰富的领导共同保险项目的经验，董事会还包括以太坊社区成员 <span class="bjh-strong">Evan Van Ness</span> 。该公司已从 Kenetic、KR1、MilliWatt 和 1kx 等一系列区块链风投公司获得了一笔未公开的融资。</span></p><p><span class="bjh-h3">数据说话：DeFi 保险需求旺盛</span></p><p><span class="bjh-p">数据显示，截至到目前为止，Nexus Mutual 有效保险总额有效保险总额已增长至<span class="bjh-strong">910 万美金</span>，与 7 月初相比，这一数字已增长了 69％，而最高峰值一度破 927 万美金。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics1.baidu.com/feed/3801213fb80e7bec01e0a7bfb5f9463e9a506b90.jpeg?token=454d483bc0a375d78de299c032934f4d" data-loaded="0"></div><p><span class="bjh-p">在日交易量指标上，2020 年上半年，NXM 代币平均每日交易量仅为 11,175 美元，而到了 2020 年 7 月，<span class="bjh-strong">平均每日交易量为 95 万美元</span>。</span></p><p><span class="bjh-p">目前该平台最受欢迎的有效保单类别为 <span class="bjh-strong">Curve 稳定币池</span>，其中 Curve 平台上的 BTC 和稳定币池加起来共占据 Nexus Mutual 平台上有效保险总规模的<span class="bjh-strong">18%</span>，占比最大，承保金额达 170 万美金。</span></p><p><span class="bjh-p">一个健康的增长信号是，承保资金在多个不同的智能合约上的<span class="bjh-strong">分配相对均匀</span>，其中，1Inch 、Aave、Balance、Compound、Flexa、MakerDAO 和 Synthetix 各自占比投保资金总量的<span class="bjh-strong">7-8％</span>左右。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics1.baidu.com/feed/b21c8701a18b87d6bfe778019fdfd73e1e30fd62.jpeg?token=d3517f5d44fcd4af03a0212545afb8b1" data-loaded="0"></div><p><span class="bjh-p">迄今为止，已经有累计<span class="bjh-strong">10.4 万美金</span>的保险费用被支付，相比本月初，这一数字增长幅度为 73%。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics1.baidu.com/feed/a8014c086e061d95b1becf9de223f5d760d9cafe.jpeg?token=c7f50fa7f8b3162f8f4a798034bfbc32" data-loaded="0"></div><p><span class="bjh-p">可以说，除了以上提到的投资者最为敏感的币价和市值之外，Nexus Mutual 无论是从有效保险总额、基于资金池的活跃保单分配、日交易量和保险费增长等多个指标来看，都可以说是获得了显著增长。而这一增长是伴随<span class="bjh-strong">去中心化金融流动性挖矿</span>的兴起，很大很大程度上是由流动性挖矿需求驱动的。</span></p><p><span class="bjh-p">可以预见，随之越来越多 DeFi 项目展开流动性挖矿，越来越多资金沉淀在 DeFi 协议上，DeFi 用户承担的<span class="bjh-strong">智能合约风险越来越高</span>，Nexus Mutual 这样的 DeFi 保险产品业务的增长也将驶入快车道。</span></p><p><span class="bjh-h3">核心看点：联合 Staking 机制</span></p><p><span class="bjh-p">时间上看，Nexus Mutual 的相关指标的数据增长开始于 7 月初，实际上，这是因 7 月 3 日推出的<span class="bjh-strong">新的 Staking 质押系统</span>所致。</span></p><p><span class="bjh-p">Nexus Mutual 新的 Staking 质押机制称作是「<span class="bjh-strong">联合质押</span>（Pooled Staking） 」，允许风险评估师将 NXM 代币一次性同时在多个智能合约中进行 staking。此外，此次更新还将 staking 的解锁时间<span class="bjh-strong">缩短为 90 天</span>，同时智能合约质押者 （风险评估者） 的可获得回报也从 20%<span class="bjh-strong">提升至 50％</span>。</span></p><p><span class="bjh-p">对于 Nexus Mutual 来说，这是代币经济模型和运营模式一次重要的更新。其中，staking 解锁时间缩短和增加智能合约质押者的回报，均可刺激产生更多的 staking 资金。</span></p><p><span class="bjh-p">Nexus Mutual 此前一直采用「<span class="bjh-strong">点对合约</span>」 （peer-to-contract） 的交互模式，也就是说，一旦有足够 NXM 的持有人愿意参与对某个智能合约进行 staking，那么就支持购买该合约的保险。联合 Staking 机制的推出，则允许 NXM 持有人同时为*<span class="bjh-strong">多达 10 个不同的智能合约 *</span>Staking 提供保险，意味着将原先同等价值的资产放大 10 倍后进行 Staking 提供承保，提高了资金利用率，可促进成员为更多保单承保，满足更多的保险需求。</span></p><p><span class="bjh-p">事实上，正是对 DeFi 保险的需求推动了<span class="bjh-strong">联合 Staking 机制</span>的启动。早在联合 Staking 机制推出之前，Nexus Mutual 就曾发布官方推特称，已经无法满足来自 Compound 和 Balancer 的承保需求，为了支付更多潜在的索赔要求，需要更多 ETH 投入该系统。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics7.baidu.com/feed/35a85edf8db1cb131cedbbf34483a94890584bac.jpeg?token=103c55454bb9ebba26a12bea6893677e" data-loaded="0"></div><p><span class="bjh-p">数据显示，截至目前为止，Staking 金额最大的分别是 <span class="bjh-strong">Curve 稳定币资金池</span>（18.9 万 NXM） ，后面依次为 <span class="bjh-strong">Compound V2</span>资金池 （17.2 万 NXM） 、MakerDao <span class="bjh-strong">MCD 资金池</span>（15 万 NXM） 和 <span class="bjh-strong">Paraswap</span>资金池 （13.7 万 NXM） 。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics0.baidu.com/feed/203fb80e7bec54e74247599a2eef64564dc26aed.jpeg?token=bc9506fe0c0df9cf7998e4cd5dbed751" data-loaded="0"></div><p><span class="bjh-p"><span class="bjh-strong">Pooled Staking 可展示每一个投保合约中以代币 NXM 计价的质押资产总额，来源：https://app.nexusmutual.io/staking/new/add-contracts</span></span></p><p><span class="bjh-p">不过，联合 Staking 模式意味着<span class="bjh-strong">可能会出现抵押不足的情形</span>，但对于保险业务来说，抵押不足并不会导致平台风险。Nexus Mutual 表示，这是由它的流动性模型决定的，该模型意味着不足抵押模型是可以被接受的，能保障其担保金额为总资本规模的数倍也不会有风险。</span></p><p><span class="bjh-p">具体来说，是由于代表 Nexus Mutual 最低资本要求的 MCR 值 （Minimum Capital Requirement，最低资本要求） 是指保险池要求的「<span class="bjh-strong">最小储备资本规模</span>」，该值基于 Nexus Mutual 系统中未解决的索赔总数、每项索赔的价值、每项索赔的风险以及各索赔之间的相关性生成）总是保持充足的储备资金，以能赔付特定年份中<span class="bjh-strong">99.5％ 的索赔负债</span>，该值基于特定时刻的未解决的索赔总数、每项索赔的价值、每项索赔的风险以及各索赔之间的相关性动态变化。因此，除非同时多个智能合约出现问题，否则 Nexus Mutual 将一直能够承保所有保险的索赔金额。</span></p><p><span class="bjh-h3">币价为何增长？</span></p><p><span class="bjh-p">可以说，流动性挖矿的风行<span class="bjh-strong">扩增了 DeFi 保险业务的需求</span>，Nexus Mutual 顺应这一时机推出了联合 Staking 机制，在扩展了平台业务规模的同时，还引导了流动性。</span></p><p><span class="bjh-p">那么从根本上看，此次 NXM 代币价格增长是短期波动还是长期价值捕捉？要解释这个问题，就得从 NXM 的<span class="bjh-strong">代币模型</span>说起，了解该代币价值捕捉的决定性因素是什么。</span></p><p><span class="bjh-p">实际上，NXM 代币的独特之处在于采用<span class="bjh-strong">联合曲线定价</span>，意味着该代币的价格将随平台的采用情况而增长。</span></p><p><span class="bjh-p">根据其代币模型公式，决定 NXM 代币价格的因素主要有两个：<span class="bjh-strong">最低资本要求</span>（MCR） 和 MCR％。其中，最低资本要求 （MCR） 是指保险池要求的「最小储备资本规模」，该值基于未解决的索赔总数、每项索赔的价值、每项索赔的风险以及各索赔之间的相关性生成，以保障能够偿付特定年份内 99.5％的索赔负债；MCR％ 则是<span class="bjh-strong">资金池实际持有的资金储备与最低资本要求</span>（MCR）<span class="bjh-strong">之间的比率</span>。当 MCR％大于 1 时，意味着 Mutual 拥有的实际持有的资金储备 （称为「资本池」） 大于最低资本要求 MCR，表明此时资金池中的资金充足。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics2.baidu.com/feed/8601a18b87d6277f5958b363b4efe036e824fc06.jpeg?token=1fc49ceb25f4f7298b6db647e2a220d8" data-loaded="0"></div><p><span class="bjh-p">该公式决定了 NXM 代币的短期价格将由 MCR％驱动，而长期价值则取决于 MCRETH 的稳定增长。</span></p><p><span class="bjh-p">具体来说，每产生一单<span class="bjh-strong">保险购买和索赔</span>，都会导致 MCR％的变化，从而直接影响 NXM 代币的价格，虽然同时也会影响 MCR 数值的变化，但该变化的幅度显然不如 MCR％ （即资金池实际持有的资金量与最低储备金要求之间的比率） 来得大。</span></p><p><span class="bjh-p">举例来说，当保险购买量增加，则<span class="bjh-strong">资本池储备金规模</span>将增加，虽然此时 MCR 也会增加，但增长幅度会比资本池的增长幅度小，因此导致 MCR％增加，从而提高了代币价格。反之，当有支付索赔发生时，资本池储备金会缩小，但 MCR 几乎保持不变，这意味着 MCR％下降，从而降低了代币价格。</span></p><p><span class="bjh-p">长期来看，<span class="bjh-strong">平台的采用状况</span>则成为 NXM 代币的长期价值捕捉的关键。由于每新增一份保险购买，都会按天动态增长最低资本要求 （MCR，以 ETH 计价） ，具体来说，当 MCR％ <span class="bjh-strong">大于 130% 时</span>，MCR 将进行一次增长小幅调整，每天增长 1％，直到 MCR％ 回落至 130％。因此稳定持续的保险购买导致 MCRETH 值的稳定增长，则是其原生代币 NXM 价格增长的长期驱动力。</span></p><p><span class="bjh-p">值得注意的是，随着 Nexus Mutual 需求的增长，Nexus Mutual 首席执行官 Hugh Karp 发起了一项提案，该提案的目标是迅速扩展 Nexus Mutual 的性能。具体来说，这项名为 83 的提案建议将 MCR 的增长频率从原来的 1 天<span class="bjh-strong">减少到 4 小时，</span>这意味着 24 小时 MCR 的值最多可提升 6 次，最终在 MCR 达到 10 万 ETH 临界点后将恢复至 1 天一次。</span></p><p><span class="bjh-p">Hugh Karp 称，「这项提议实际上是在牺牲短期价格大幅上涨的潜力 （即 MCR％增长幅度会变小） ，以便更快地进行资本扩张，从而可以更快地满足用户的保险需求，这将可能将 MCR％从当前的 140％中间水平降低到 130％。因此，可能会有短期牺牲，以获得<span class="bjh-strong">更大的中期收益-长期收益</span>。」</span></p><p><span class="bjh-p">所以，币价的上涨有可能是 3 个原因：即<span class="bjh-strong">短期时间保险购买</span>导致 MCR% 增长、NXM 代币价格上涨产生的<span class="bjh-strong">买压</span>，又或者保险购买需求导致持续稳定有 ETH 注入该平台。</span></p><p><span class="bjh-p">数据显示，短时间内 MCR％ 的值确实出现陡增，在 7 月 12 日达到峰值 227% 后又迅速回落，目前维持在<span class="bjh-strong">185%</span>，这意味着目前资金池实际持有的资金量与最低储备金要求之间的比率为 185%，表明资金池中的资金充足，具备偿付能力。</span></p><p><span class="bjh-p">币价来看，从 7 月 1 日 3.8 美金暴涨至 7 月 12 日的峰值 21 美金，无论是投机还是代币购买者看好项目的长远前景，无疑都因极大的买压产生一定的泡沫，之后币价迅速暴跌，目前<span class="bjh-strong">维持在 9 美金左右</span>。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics3.baidu.com/feed/faedab64034f78f003a2c695e3e6f553b2191c0d.jpeg?token=e9f912bb3b990a524f0a3d68ebf1f499" data-loaded="0"></div><p><span class="bjh-p">值得注意的是，虽然 NXM 代币目前没有上线任何交易所，但在近期被币客交易所强上，导致一时之间涌入<span class="bjh-strong">大量投机者纷纷买入</span>，导致短时间代币暴涨，这也是其泡沫产生的一个重要原因。</span></p><p><span class="bjh-p">而代表其捕捉长期价值的指标 MCR，从今年 3 月就开启了一段持续稳定的上攀，6 月 14 日开始一段小幅稳定增长后，于 7 月 3 日开始一直在持续稳定增长，这意味着币价上涨的原因并不全是短期购买和买压所致，体现核心价值的<span class="bjh-strong">平台采用持续稳定增长</span>也是其币价增长的一个驱动力。</span></p><div class="img-container"><img class="large" data-loadfunc="0" src="https://pics6.baidu.com/feed/cb8065380cd79123993165bf34e3a684b0b78002.jpeg?token=a849c1cd6def261fcc95791d1fd32138" data-loaded="0"></div><p><span class="bjh-p">综上，NXM 代币短期暴涨<span class="bjh-strong">存在一定的投机需求</span>，因此，无论是代币价格还是 MCR％的值，往往在暴涨后出现大幅回落，但不可能否认的是，将时间线拉长一点，NXM 代币已逐渐开始捕捉价值，并在 DeFi 用户需求的上升过程中稳步增长。而创始团队正在发起投票的 83 提案，以牺牲短期价格大幅上涨的潜力来促进中长期收益的举动，更让我们看到了 Nexus** 可持续发展的可能性**。</span></p><p><span class="bjh-p">当然，对于尚处于襁褓时期的 DeFi 保险行业来说，Nexus Mutual 只是一个先行者，其在<span class="bjh-strong">去中心化保险领域</span>的探索已经取得了不小成绩。至于这个模式能否真正解决目前去中心化协议的各种系统风险、该细分赛道未来如何发展、有无更具创新性的 DeFi 风险管理工具，还值得整个行业的关注和探索。</span></p></div><audio height="0" width="0" id="musicAudio" data-play-index=""><source></audio></div></div><div class="item-wrap clearfix"><div class="xcp-publish"><div class="xcp-publish-main"><div class="left"><div class="x-avatar">
            <div class="x-avatar-placeholder"></div>
            </div>
        </div></div></div></div><div></div></div></div>`,
      },
      discussArr: [{
        header: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2596784910,2026005587&fm=26&gp=0.jpg",
        name: "Bruce Banner",
        content: " 你好乔纳森， 你的计划对我来说听起来很好。感谢您发送此提案，并感谢您抽出宝贵的时间在此处使用您的帐户来修改提案的说明。我想问你几个问题，这些问题不是国际海事组织要解决的。 免责声明：我不是律师。"
      }, {
        header: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2596784910,2026005587&fm=26&gp=0.jpg",
        name: "Bruce Banner",
        content: " 你好乔纳森， 你的计划对我来说听起来很好。感谢您发送此提案，并感谢您抽出宝贵的时间在此处使用您的帐户来修改提案的说明。我想问你几个问题，这些问题不是国际海事组织要解决的。 免责声明：我不是律师。"
      },]
    }
  },
  computed: {
    ...mapGetters([
      'isConnected',
      'account'
    ]),
    myVote() {
      return this.$store.state.vote.myVote
    },
    myCampaignVote() {
      return this.$store.state.vote.myCampaignVote
    },
    voteNumber() {
      return this.$store.state.proposal.voteNumber
    }
  },
  watch: {},
  created() {
    let proposal = this.$route.params.proposal
    console.log(proposal)
    if (!this.$route.params.proposal) {
      this.$router.push("nodeList")
      return
    }
    this.proposal = proposal
    this.proposal.stageName = stageByIdx.get(this.proposal.status)
    this.getStageLastTime(this.proposal.status)
    this.getData()
  },
  methods: {
    toReport() {
      this.$router.push({
        name: 'submitReport',
        params: {
          proposalId:this.proposal.proposalId
        }
      })
    },
    getData() {
      if (this.isConnected) {
        this.$store.dispatch("proposal/getVoteProposalList", this.proposal.proposalId)
      }
    },
    getStageLastTime(stage) {//获取本阶段剩余时间
      switch (stage) {
        case '1':
          this.proposal.stageLastTime = ((parseInt(this.proposal.creationTime) + 3 * 86400) * 1000 - new Date().getTime())
          break;
        case '2':
          this.proposal.stageLastTime = ((parseInt(this.proposal.creationTime) + 10 * 86400) * 1000 - new Date().getTime())
          break;
      }
      this.proposal.stageLastTime = parseInt(this.proposal.stageLastTime / 86400000) + '天'
          + parseInt(this.proposal.stageLastTime % 86400000 / 3600000) + '小时'
          + parseInt(this.proposal.stageLastTime % 3600000 / 60000) + '分钟'
    },
    agreeProposal() { //多签管理员同意提案
      this.$store.dispatch("proposal/proposalMsManagerVote", {
        proposalId: this.proposal.proposalId,
        nodeId: this.proposal.nodeId
      }).then(() => {
        this.$message.success("投票成功")
        this.getData()
      }).catch((err) => {
        console.log()
        this.$message.error("投票失败" + err)
      })
    },
    oppose() {//反对投票
      this.$store.dispatch("proposal/proposalPersonVote", {
        proposalId: this.proposal.proposalId,
        nodeId: this.proposal.nodeId,
        amount: this.opposeAmount
      }).then(() => {
        this.$message.success("投票成功")
      }).catch((err) => {
        this.$message.error("投票失败" + err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.proposal {
  text-align: left;

  .el-button {
    width: 80px;
    height: 30px;
    border-radius: 20px;
    color: white;
  }

  .r-line {
    background: #eaeaea;
    margin-top: 50px;
    height: 1px;
  }

  .proposal-header {
    display: flex;
    justify-content: space-between;

    .name {
      display: flex;
      font-weight: bold;

      .status {
        margin: 4px 0 0 10px;
        font-size: 12px;
        text-align: center;
        color: rgba(95, 220, 167);
        width: 60px;
        height: 18px;
        line-height: 18px;
        background: rgba(94, 219, 166, 0.20);
        border: 1px solid rgba(95, 220, 167, 0.50);
        border-radius: 6px;
      }
    }

    .time {
      width: 240px;
      font-size: 14px;
      color: #736dff;
    }
  }

  .proposal-status {
    display: flex;

    .schedule {
      width: 360px;

      .line1, .line2, .line3 {
        display: flex;
        justify-content: space-between;
      }

      .line2 {
        margin: 10px 0px;
        width: 360px;
        border-radius: 5px;
        overflow: hidden;

        .agree {
          background: linear-gradient(270deg, #64e4ae, #46b787);
        }

        .refuse {
          background: linear-gradient(270deg, #f15887, #fe9b86 63%);
        }

        > div {
          height: 6px;
        }
      }

      .line3 {
        .el-button:nth-child(2) {
          background: linear-gradient(90deg, #fe9b86, #f15887 100%);
          box-shadow: 0px 3px 5px 0px rgba(254, 151, 134, 0.50);
        }

        .el-button:nth-child(1) {
          background: linear-gradient(225deg, #64e4ae, #46b787);
          box-shadow: 0px 3px 5px 0px rgba(99, 226, 172, 0.50);
        }
      }

      .line4 {
        text-align: center;

        .el-button {
          background: linear-gradient(90deg, #fe9b86, #f15887 100%);
          box-shadow: 0px 3px 5px 0px rgba(254, 151, 134, 0.50);
        }
      }
    }

    .vote-detail {
      padding: 0 10px 0 40px;
      width: 460px;
      display: flex;
      justify-content: space-around;

      .votes-item {
        text-align: left;

        strong {

          font-weight: 700;
          font-size: 18px;
        }
      }
    }

    .proposal-operating {
      min-width: 330px;

      .el-button:nth-child(1) {
        background: linear-gradient(90deg, #fe9b86, #f15887 100%);
        box-shadow: 0px 3px 5px 0px rgba(254, 151, 134, 0.50);
      }

      .el-button:nth-child(2) {
        background: linear-gradient(225deg, #64e4ae, #46b787);
        box-shadow: 0px 3px 5px 0px rgba(99, 226, 172, 0.50);
      }

      .el-button:nth-child(3) {
        background: linear-gradient(225deg, #736dff, #a97fff);
        box-shadow: 0px 3px 5px 0px rgba(116, 109, 255, 0.30);
      }
    }
  }

  .proposal-content {
    margin-top: 30px;

    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: linear-gradient(225deg, #7700ff, #ed6868);
      border-radius: 50%;
    }

    .content-html {
      margin: 0 auto;
      width: 630px;

      .proposal-name {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        padding-bottom: 20px;
      }

      .r-line {
        margin-top: 30px;
        background: #eaeaea;
      }

      .proposal-detail {

        display: flex;
        justify-content: space-between;

        .title {
          padding: 10px 0;

          .name {

          }

          .dot {
            margin-right: 8px;
          }
        }

        .header {
          border-radius: 50%;
          width: 30px;
          height: 30px;
        }

        .proposal-amount {
          .amount {
            font-size: 18px;
          }

          .stage {
            margin-top: 10px;

            > div {
              padding-top: 8px;
            }
          }

          .operating {
            padding-top: 10px;

            .el-button:nth-child(1) {
              background: linear-gradient(90deg, #fe9b86, #f15887 100%);
              box-shadow: 0px 3px 5px 0px rgba(254, 151, 134, 0.50);
            }

            .el-button:nth-child(2) {
              background: linear-gradient(225deg, #736dff, #a97fff);
              box-shadow: 0px 3px 5px 0px rgba(116, 109, 255, 0.30);
            }
          }
        }

        .step {
          width: 160px;

          ::v-deep .el-step__title {
            font-size: 14px;
          }

          ::v-deep .el-step__icon {
            width: 20px;
            height: 20px;
          }

          ::v-deep .el-step__line {
            left: 9px;
          }

          ::v-deep .el-step__main {
            padding: 0;
          }
        }
      }
    }

    .discuss {
      width: 600px;
      margin: 30px auto;

      .discuss-item {
        text-align: left;
        margin-top: 20px;

        .user-info {
          display: flex;

          .header {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
          }

          .name {
            font-size: 14px;
          }

          .time {
            font-size: 12px;
            color: #999999;
          }
        }

        .content {
          margin-top: 14px;
          text-indent: 20px;
          font-size: 14px;
          line-height: 22px;
          color: #333333;
        }

        .like-drop {
          display: flex;
          justify-content: flex-end;
          height: 40px;

          span {
            width: 80px;
            justify-content: space-between;
            margin-left: 18px;
            display: flex;
            align-items: center;
          }

          img {
            width: 16px;
          }
        }

        .r-line {
          margin-top: 10px;
        }
      }

      .more-box {
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: center;

        .more {
          width: 70px;
          height: 26px;
          text-align: center;
          user-select: none;
          cursor: pointer;
          border: 1px solid #736dff;
          border-radius: 6px;
          line-height: 26px;
          color: #736dff;
        }
      }
    }
  }

  .submit-comments {
    width: 600px;
    margin: 40px auto;

    ::v-deep .el-textarea__inner {
      margin: 10px 0;
      background: #f8f8f8;
      border: 1px solid #eaeaea;
    }

    .el-button {
      width: 120px;
    }
  }

  .oppose-dialog {
    .el-button {
      width: 120px;
      height: 32px;
      margin: 20px 36% 0;
    }
  }
}
</style>
