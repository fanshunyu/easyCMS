# 这个项目是用的vue-cli 2.x 搭的 :full_moon_with_face: 

## UI 框架是 mint UI :flushed: 跟 mui :shit: 以及 vux :+1:

## 利用vuex :sparkles:做的状态管理 本来也可以不用 直接用 provide/inject的 不过用了就用了呗

为啥要用这么多呢 因为我闲的蛋疼 

### 另外忠告一句 mui 慎用 坑多 :sob::sob::sob::sob::sob::sob::sob::sob:

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
1. 绘制界面， 使用 MUI 中的 media-list.html
2. 使用 vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的Id标识符
2. 创建新闻详情的组件页面  NewsInfo.vue
3. 在 路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来

## 实现 新闻详情 的 页面布局 和数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的 页面中，先手动 导入 comment 组件
 + `import comment from './comment.vue'`
3. 在父组件中，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
4. 将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2. 点击加载更多，让 pageIndex++ , 然后重新调用 this.getComments() 方法重新获取最新一页的数据
3. 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让 老数据 调用 数组的 concat 方法，拼接上新数组


##VUX的安装使用

1. npm i vux -S
2. 安装 vux-loader    npm i vux-loader -D
3. vux是使用的less  安装less  npm i less less-loader -D
4. 在build/webpack.base.conf.js中 添加配置
```
    const vuxLoader = require('vux-loader')
    const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

    module.exports = vuxLoader.merge(webpackConfig, {
    plugins: ['vux-ui']
    })

    originalConfig 就是原本webpack.base.conf.js中 module.exports等号后面的所有内容

```
5. 在goodslist中引入 scroller 
```
        import { Scroller } from 'vux'

        export default {
            components: {
                Scroller
            }
        }
```
6. 在template中添加html代码
```
    <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 7"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller>
```
7. 需要自己去添加浮动 来使标签在一行上显示


###  因为使用到了mui所以要记录一些奇葩的bug

1. 当引入mui.js的时候 会导致tabbar 不能切换

   ​	解决办法: 重新tabbar的样式 把mui的样式复制到一个新的类名上

2. 最后执行打包命令的时候会因为 mui.css 文件中 svg 文件引入的 引号问题 到是build 失败

   ​	修改mui.css的源码 ctrl + f 查找 svg 在两处引用中把 单引号修改为双引号

### 购物车功能

使用vuex 做为状态管理

啊！文档懒得写了 就这样吧 