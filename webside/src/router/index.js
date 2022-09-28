import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: "home",
        component: () => import('@/home.vue'),
    },
    {
        path: '/diagram',
        name: "diagram",
        component:()=> import('@/views/RAINBOWUNIVERSE')
    },
    // {
    //     path: '/seedSub',
    //     name: "seedSub",
    //     component:()=> import('@/views/seedSub')
    // },
    {
        path: '/rainbow',
        name: "rainbow",
        component: () => import('@/layout.vue'),
        redirect: '/RainbowCity',
        children: [
            {
                path: '/RainbowCity',
                name: "RainbowCity",
                component:()=> import('@/views/rainbowCity/rainbowCityPage')
            },

            {
                path: '/RainbowWarrior',
                name: "RainbowWarrior",
                component:()=> import('@/views/rainbowWarrior/rainbowWarriorPage')
            },
            // {
            //     path: '/RainbowDEFI',
            //     name: "RainbowDEFI",
            //     component:()=> import('@/views/rainbowDEFI/rainbowDEFIPage')
            // },
            // {
            //     path: '/RainbowToken',
            //     name: "RainbowToken",
            //     component:()=> import('@/views/rainbowToken/rainbowTokenPage')
            // },
            // {
            //     path: '/RainbowDao',
            //     name: "RainbowDao",
            //     component:()=> import('@/views/rainbowDao/rainbowDaoPage')
            // },
            // {
            //     path: '/RainbowIsland',
            //     name: "RainbowIsland",
            //     component:()=> import('@/views/rainbowIsland/rainbowIslandPage')
            // },
            // {
            //     path: '/ConsensusMining',
            //     name: "ConsensusMining",
            //     component:()=> import('@/views/consensusMining/consensusMiningPage')
            // },
            // {
            //     path: '/WhoAreWe',
            //     name: "WhoAreWe",
            //     component:()=> import('@/views/whoAreWe/whoAreWePage')
            // },
            // {
            //     path: '/WhoAreWe1',
            //     name: "WhoAreWe1",
            //     component:()=> import('@/views/whoAreWe/whoAreWePage1')
            // },
            // {
            //     path: '/WhoAreWe2',
            //     name: "WhoAreWe2",
            //     component:()=> import('@/views/whoAreWe/whoAreWePage2')
            // },
            // {
            //     path: '/WhoAreWe3',
            //     name: "WhoAreWe3",
            //     component:()=> import('@/views/whoAreWe/whoAreWePage3')
            // },
        ]
    },

]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
