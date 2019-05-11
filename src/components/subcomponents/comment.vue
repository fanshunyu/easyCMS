<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" v-model="msg" maxlength="120"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.id">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>
          <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>

    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      comments: [], // 所有的评论数据
      pageIndex: 1,
      msg:''
    };
  },
  created() {
    this.getComments();
  },
  methods: {  
    getMore(){
      this.pageIndex ++;
      this.getComments()
    },
    getComments() {
      // 获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex="+this.pageIndex)
        .then(result => {
          if (result.data.status === 0) {
            // this.comments = result.body.message;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
            this.comments = this.comments.concat(result.data.message);
          } else {
            Toast("获取评论失败！");
          }
        });
    },
    postComment(){
      if(this.msg == ''){
        Toast("评论不能为空");
        return false
      }
      this.$http.post("api/postcomment/" + this.id, {
          content: this.msg.trim()
        })
      .then(result=>{
        console.log(result)
          if(result.data.status == 0) {

            this.comments.unshift({
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            })
            this.msg = ""
          }        
      })
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
