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
import GoodsInfo from './components/goods/GoodsInfo.vue'

import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/home/news',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      component: GoodsInfo,
      name: 'goodsinfo'
    },
    {
      path: '/home/goodsdesc/:id',
      component: GoodsDesc,
      name: 'goodsdesc'
    },
    {
      path: '/home/goodscomment/:id',
      component: GoodsComment,
      name: 'goodscomment'
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      component: SearchContainer,
    //   beforeEnter: (to, from, next) => { // 路由独享守卫 加载路由规则上
    //     alert('你是要去搜索吗？')
    //     next()
    //   }
    }

  ],
  linkActiveClass: 'mui-active'
})
// 全局的前置守卫 当访问任意的路由都会触发这个函数
// 注意 逻辑处理完之后 一定要调用next()否则 页面卡住不动
// router.beforeEach((to, from, next) => {
//     alert( 1 )
//     next()
// })
// router.beforeResolve((to, from, next) => {
//     alert( 2 )
//     next()
// })
// router.afterEach((to, from) => {
//     alert(3)
// })



export default router
