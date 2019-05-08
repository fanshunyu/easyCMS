<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbolist" :key="item.id">

                <img :src="item.img" alt="">


            </mt-swipe-item>
           
        </mt-swipe>
    </div>
</template>

<script>
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
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo')
                .then(result=>{
                    // result.data
                    if(result.data.status == 0){
                        this.lunbolist = result.data.message
                    }
                })
            }
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
</style>