import Vue from 'vue'
import App from './App.vue'



import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.css'
Vue.component(Header.name, Header);

const vm = new Vue({
    el:"#app",
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