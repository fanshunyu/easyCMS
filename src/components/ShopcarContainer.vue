<template>
  <div class="shopcar-container">
    
    <div class="goods-list">

      <!-- 商品列表项区域 -->
      <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-for="item in goodslist" :key="item.id">
						
            <mt-switch v-model="$store.getters.useIdGetSelected[ item.id ]" @change="selectedChanged(item.id,$store.getters.useIdGetSelected[ item.id ])" ></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥ {{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.useIdGetCount[item.id]" :goodsid="item.id"></numbox>
                <!-- 问题：如何从购物车中获取商品的数量呢 -->
                <!-- { id:count } -->
                <!-- 1. 我们可以先创建一个 空对象，然后循环购物车中所有商品的数据， 把 当前循环这条商品的 Id， 作为 对象 的 属性名，count值作为 对象的 属性值，这样，当把所有的商品循环一遍，就会得到一个对象： { 88: 2, 89: 1, 90: 4 } -->
                <a href="#">删除</a>
              </p>
            </div>

					</div>
				</div>
			</div>

    </div>

    <!-- 结算区域 -->
       <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{ $store.getters.getCountAndAmount.count }} </span> 件， 总价 <span class="red">￥{{ $store.getters.getCountAndAmount.amount }} </span></p>
            </div>
             <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>

  </div>
</template>

<script>
import numbox from "./subcomponents/shopcar_numbox.vue";

export default {
  data() {
    return {
      goodslist: [] // 购物车中所有商品的数据
    };
  },
  created() {
     this.getGoodsList()
     
  },
  methods: {
     getGoodsList(){

       // 从state中获取数据
       var idArr = this.$store.state.car.map(item=>{
         return item.id
       })

       this.$http.get('/api/goods/getshopcarlist/'+ idArr.join(','))
       .then(result=>{
         this.goodslist = result.data.message
         console.log(this.goodslist)
       })
     },
     selectedChanged(id,val){
       this.$store.commit('updateCarSelected',{ id:id,selected:val })
     }
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
