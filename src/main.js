import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// import { Header } from 'mint-ui';
// import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.css'
import '../static/mui/css/icons-extra.css'
// import { Swipe, SwipeItem } from 'mint-ui';
// import { Button } from 'mint-ui';
import Moment from 'moment'
// import { Lazyload } from 'mint-ui';
import Vuex from 'vuex'
import createVuexAlong from 'vuex-along' 
// Vue.use(Lazyload);
Vue.use(Vuex)
// Vue.component(Swipe.name, Swipe);
// Vue.component(Button.name, Button);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);

Vue.use(MintUI)
import VuePreview from 'vue-preview'

Vue.use(VuePreview) // 这种用法是默认的安装方式




Vue.use(VueRouter)


Axios.defaults.baseURL = 'http://www.liulongbin.top:3005';

Vue.prototype.$http = Axios

Vue.filter("dateFormat",function(msg){
    return Moment(msg).format("YYYY-MM-DD HH:mm:ss")
})


import router from './router.js'

var store = new Vuex.Store({
    state: { 
        car:[] // 购物车中 可以有多种不同的商品 商品的数据应该是对象 所以购物车 应该是一个对象数组
        // 商品应该有 id 名称 价格 数量 是否加入结算
    },
    mutations: { 
        addToCar(state,obj){
            
            var flag = true
            state.car.some((item)=>{
                if(item.id == obj.id){
                    // item.count +=  parseInt(obj.count)
                    // 注意一下 数据的格式 默认是字符串 要做一个转化
                    // 可以了解一下typescript 可以解救我们的弱类型
                    item.count = parseInt(item.count) + parseInt(obj.count)
                    flag = false;
                    return true // 在some中 return true表示循环终止
                }
            })
            if(flag){
                state.car.push(obj)
            }
        },
        updateCar(state,goodsinfo){
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
        },
        updateCarSelected(state,obj){
            state.car.some(item => {
                if (item.id == obj.id) {
                  item.isSelect = obj.selected
                }
            })
        }
    },
    getters:{ // 类似于computed 只要参与计算的state出现更新 那么就会重新计算属性值
        carCount(state){
            var count = 0
           
            state.car.forEach(item=>{
                count += parseInt(item.count)
            })
            return count
        },
        // 创建一个属性 记录每一个商品的id与数量
        useIdGetCount(state){
            var o = {}
            state.car.forEach(item => {
              o[item.id] = item.count
            })
            return o
        },
        useIdGetSelected(state){
            var o = {}
            state.car.forEach(item => {
              o[item.id] = item.isSelect
            })
            return o
        },
        getCountAndAmount(state){
            var res = {
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.isSelect){
                    res.count += parseInt(item.count)
                    res.amount += item.count * item.price
                }
            })
            return res
        }
    },
    plugins:[ createVuexAlong ] // 1.1.5的版本注意使用方式
   
     
    
  })

const vm = new Vue({
    el:"#app",
    router,
    store,
    render:c=>c(App)

})

// 包下完之后 需要额外 安装sass-loader

// cnpm i sass-loader node-sass -D

// 如果用的是vue-cli搭建的 只需要下载loader就ok了 不需要自己去webpack.config.js中添加匹配规则
// vue-cli 初始化一个项目的基本步骤
// 1 vue init webpack 项目名 （最好英文小写）
// 2 选择要安装的vue   
// 3 选择是否安装vue-router 
// 4 ESlint  test  e2e 全部 是n
// 5 自己安装包


// 使用 vuex-along插件 来实现 刷新之后保存state中的数据 
// 原理 就是自动的帮我们把state中的数据 保存到本地存储中 当刷新之后 会重新读取 

// 1 cnpm i vuex-along@1.1.5 -S
// 2 import VuexAlong from 'vuex-along'
// 3 在store中的plugins数组中 配置一下 plugins:[ VuexAlong ]

// ps, 该插件在github是最新版本 1.2.5 使用方式跟以前不一致 有一些小bug
// 这里建议 下载安装 1.1.5 版本 使用方式 见上方
