import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home1Container from './components/layout/Home1Container.vue'
import Member1Container from './components/layout/MemberContainer1.vue'
import Search1Container from './components/layout/Search1Container.vue'
import ShopCarContainer from './components/layout/ShopCar1Container.vue'
var router = new VueRouter({
    routes: [{
            path: '/home',
            component: Home1Container
        }, {
            path: '/member',
            component: Member1Container
        }, {
            path: '/search',
            component: Search1Container
        }, {
            path: '/shopcar',
            component: ShopCarContainer
        }

    ],
    linkActiveClass: 'mui-active'
})
export default router