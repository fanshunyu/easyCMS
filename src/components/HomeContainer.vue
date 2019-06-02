<template>
    <div>
    <!-- 轮播图区域 -->
    <swiper :lunbotuList="lunbolist" :isfull="true"></swiper>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
                    <img src="../../static/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                    <img src="../../static/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                    <img src="../../static/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../static/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../static/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../static/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
        
    </div>
</template>

<script>
import swiper from "./subcomponents/swiper.vue";
    export default {
        data(){
            return {
                lunbolist:[]
            }
        },
        created(){
            //在生命周期中获取数据
            this.getlunbo()
        },
        methods:{
            getlunbo(){
                this.$http.get('api/getlunbo')
                .then(result=>{
                    // result.data
                    if(result.data.status == 0){
                        this.lunbolist = result.data.message
                    }
                })
            }
        },
        components: {
            swiper
        }
    }
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
      width: 100%;
      height: 100%;
    }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body{
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>