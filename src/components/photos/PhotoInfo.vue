<template>
  <div class="photoinfo-container">
    <!-- 导航条 -->
       <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
        <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
        <span>点击：{{ photoinfo.click }}次</span>
        </p>
    <!-- 缩略图 -->
   
      <vue-preview :slides="list"></vue-preview>
   
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
        <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>

</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo:{},
      list:[]
    };
  },
  created(){
      this.getPhotoInfo(),
      this.getThumbs()
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.data.status === 0) {
          this.photoinfo = result.data.message[0];
        }
      });
    },
     getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.data.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          console.log(result.data.message)
          // message 这个数组的成员中 只有 h w src 这三个属性
          result.data.message.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src
          });
          // 把完整的数据保存到 list 中
          this.list = result.data.message;
        }
      });
    }
    
   
  },
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  }

};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    img {
      margin: 10px;
      box-shadow: 0 0 8px #999;
    
    }
  }
}
</style>