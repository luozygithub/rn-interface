import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/views/layout/layout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/test',
        name: "test",
        component: () => import('@/views/testSolidity'),
        hidden: true
    },
    {
        path: '/register',
        name: "register",
        component: () => import('@/views/signUp/register'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/errorPage/404'),
        hidden: true
    },
    {
        path: '/',
        component: layout,

        redirect: '/consensus',

        children: [

            {
                path: '/demo',
                name: 'demo',
                component: () => import('@/views/demo'),
            },
            {
                path: '/cityNodeToken',
                name: 'cityNodeToken',
                component: () => import('@/views/community/cityNode/cityNodeToken'),
            },
            {
                path: '/nodeList',
                name: 'nodeList',
                component: () => import('@/views/community/cityNode/nodeList'),
            },
            {
                path: '/nodeDetail',
                name: 'nodeDetail',
                component: () => import('@/views/community/cityNode/nodeDetail'),
            },
            {
                path: '/communityToken',
                name: 'communityToken',
                component: () => import('@/views/community/committee/communityToken'),
            },
            {
                path: '/cityNodeTokenMarket',
                name: 'cityNodeTokenMarket',
                component: () => import('@/views/community/cityNodeMarket/cityNodeTokenMarket'),
            },

            {
                path: '/committeeDetail',
                name: 'committeeDetail',
                component: () => import('@/views/community/committee/committeeDetail'),
            },
            {
                path: '/financialManagement',
                name: 'financialManagement',
                component: () => import('@/views/community/committee/financialManagement'),
            },
            //    市政大厅
            {
                path: '/issuePublicity',
                name: 'issuePublicity',
                component: () => import('@/views/cityHall/issuePublicity'),
            },
            {
                path: '/lockedAnnouncement',
                name: 'lockedAnnouncement',
                component: () => import('@/views/cityHall/lockedAnnouncement'),
            },
            //    四大矿池
            {
                path: '/seedSub',
                name: 'seedSub',
                component: () => import('@/views/centerBank/seedSub'),
            },
            {
                path: '/seedExc',
                name: 'seedExc',
                component: () => import('@/views/centerBank/seedExc'),
            },
            {
                path: '/invite',
                name: 'invite',
                component: () => import('@/views/centerBank/invite'),
            },
            {
                path: '/consensus',
                name: 'consensus',
                component: () => import('@/views/centerBank/consensus'),
            },
            {
                path: '/contribution',
                name: 'contribution',
                component: () => import('@/views/centerBank/contribution'),
            },
            //基金会
            {
                path: '/foundation',
                name:"foundation",
                component:()=> import('@/views/foundation/foundation')
            },
            //    财政部
            {
                path: '/incomeDistribution',
                name: 'incomeDistribution',
                component: () => import('../views/finance/incomeDistribution')
            }, {
                path: '/incomeDividends',
                name: 'incomeDividends',
                component: () => import('../views/finance/incomeDividends')
            }, {
                path: '/sourceOfIncome',
                name: 'sourceOfIncome',
                component: () => import('../views/finance/sourceOfIncome')
            },
            //VIP
            {
                path: '/myVip',
                name: 'myVip',
                component: () => import('@/views/vipCenter/myVip'),
            },
            {
                path: '/transferVip',
                name: 'transferVip',
                component: () => import('@/views/vipCenter/transferBuyVip'),
            },
            //    bank
            {
                path: '/tokenTransfer',
                name: 'tokenTransfer',
                component: () => import('../views/bank/tokenTransfer')
            }, {
                path: '/mortgageMarket',
                name: 'mortgageMarket',
                component: () => import('../views/bank/mortgageMarket/mortgageMarket')
            }, {
                path: '/RBTBank',
                name: 'RBTBank',
                component: () => import('../views/bank/RBTBank/rbtBank')
            },
            //全球治理
             {
                path: '/globalGovernance',
                name: 'globalGovernance',
                component: () => import('../views/community/globalSystem/globalGovernance')
            },
        ]
    }
]
const router = new VueRouter({
    routes
})

export default router
