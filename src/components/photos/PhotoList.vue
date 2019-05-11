<template>
  <div>
    <scroller lock-y :scrollbar-x="false">
      <div class="box1">
        <div class="box1-item" v-for="item in cates" :key="item.id">
          <a @click="getPhotoListByCateId(item.id)">{{' '+ item.title + ' '}}</a>
        </div>
      </div>
    </scroller>


        <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { Scroller } from "vux";

export default {
  data() {
    return {
      cates: [],
      list:[]
    };
  },
  created(){
      this.getAllCategory()
      this.getPhotoListByCateId(0)
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.data.status === 0) {
          // 手动拼接出一个最完整的 分类列表
          result.data.message.unshift({ title: "全部", id: 0 });
          this.cates = result.data.message;
        }
      });
    },
    getPhotoListByCateId(cateId) {
      // 根据 分类Id，获取图片列表
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.data.status === 0) {
          this.list = result.data.message;
        }
      });
    }
  },
  components: {
    Scroller
  }
};
</script>

<style lang="scss" scoped>
.box1 {
  width: 1050px;
  overflow: hidden;
  
}
.box1-item {
  float: left;
  touch-action: none;
}
a {
    color: #000;
    margin-left: 10px;
    margin-right: 10px;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>