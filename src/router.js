import VueRouter from 'vue-router'


// 导入组件文件
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import SearchContainer from './components/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'

import GoodsList from './components/goods/GoodsList.vue'
const router = new VueRouter({
    routes:[
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/home/news',component: NewsList },
        { path: '/home/newsinfo/:id',component: NewsInfo},
        { path: '/home/photolist',component: PhotoList },
        { path: '/home/photoinfo/:id',component: PhotoInfo },
        { path: '/home/goodslist',component: GoodsList },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }

    ],
    linkActiveClass:'mui-active'
})



export default router