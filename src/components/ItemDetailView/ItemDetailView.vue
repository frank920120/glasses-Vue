
<template>
  <div class="goods-detail-view">
    <van-nav-bar title="商品详情" left-arrow @click-left="goback" />
    <van-swipe :autoplay="3000" class="banner">
      <van-swipe-item v-for="image in details.banners" :key="image.id">
        <img v-lazy="image.img" />
      </van-swipe-item>
    </van-swipe>
    <div class="content-view">
      <div class="price-view">
        <p class="new-price">¥ {{ details.newPrice }}</p>
        <p class="old-price">原价 ¥ {{ details.oldPrice }}</p>
        <span class="sale-item" v-if="details.sale">特价</span>
      </div>
      <div class="standard-view">
        <div class="items">
          <div v-for="item in details.standardImages" :key="item.color">
            <img :src="item.img" :alt="item.color" />
          </div>
        </div>
        <div class="side">
          <select name="eyes">
            <option value="左眼">左眼</option>
            <option value="右眼">右眼</option>
          </select>
          <select name="degree">
            <option v-for="(item,index) in details.degree" :value="item" :key="index">{{item}}</option>
          </select>
          <van-stepper v-model="value" />
        </div>
      </div>
      <div class="desc-view">
        <div class="title">
          <span>自营</span>
          <p>{{details.name}}</p>
        </div>
        <p class="desc">{{details.desc}}</p>
      </div>
      <div class="explain-view"></div>
    </div>
  </div>
</template>

<script>
import { NavBar, Swipe, SwipeItem, Stepper } from "vant";
export default {
  data() {
    return {
      details: [],
      number: 0
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Stepper.name]: Stepper
  },
  computed: {
    getId() {
      return this.$store.state.itemId;
    }
  },
  methods: {
    goback: function() {
      this.$store.commit("changeItemDetailsShow");
    }
  },
  created() {
    this.axios
      .get("/json/goods-detail.json")
      .then(res => (this.details = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.goods-detail-view {
  background: blue;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background: #f2f2f2;
  overflow: auto;
  padding-top: 2.8125rem;
  padding-bottom: 3.125rem;
}
.goods-detail-view > .banner img {
  width: 100%;
}
.goods-detail-view > .content-view {
  background: white;
  border: 0.0625rem #bbbbbb solid;
  border-left: 0;
  border-right: 0;
  margin-bottom: 0.625rem;
}
.goods-detail-view > .content-view > .price-view {
  height: 2.8125rem;
  line-height: 2.8125rem;
}
.goods-detail-view > .content-view > .price-view > .new-price {
  float: left;
  font-size: 1.3125rem;
  font-weight: 900;
  margin-right: 1.25rem;
  margin-left: 1.25rem;
  color: red;
}
.goods-detail-view > .content-view > .price-view > .old-price {
  font-size: 0.75rem;
  color: #7c7c7c;
  float: left;
  margin-right: 1.25rem;
  text-decoration: line-through;
}
.goods-detail-view > .content-view > .price-view > .sale-item {
  display: inline-block;
  font-size: 0.75rem;
  color: white;
  background: red;
  width: 1.875rem;
  height: 1.125rem;
  line-height: 1.125rem;
  text-align: center;
}
.goods-detail-view > .content-view > .standard-view {
  overflow: hidden;
}
.goods-detail-view > .content-view > .standard-view > .items {
  margin-left: 0.9375rem;
  float: left;
  overflow: hidden;
  width: 14.0625rem;
}
.goods-detail-view > .content-view > .standard-view > .items img {
  width: 3.875rem;
  height: 3.875rem;
  float: left;
  margin-right: 0.625rem;
  border: 0.0625rem solid black;
}
.goods-detail-view > .content-view > .standard-view > .side {
  overflow: hidden;
  margin-bottom: 1.3125rem;
}
.goods-detail-view > .content-view > .standard-view > .side select {
  background: white;
  color: black;
  float: left;
  border-radius: 0.3125rem;
  margin-right: 0.625rem;
}

.goods-detail-view
  > .content-view
  > .standard-view
  > .van-stepper
  > .van-stepper__minus,
.goods-detail-view
  > .content-view
  > .standard-view
  > .van-stepper
  > .van-stepper__plus {
  background: white;
  border: 0.0625rem solid #bbbbbb;
  border-radius: 0.3125rem;
}
.goods-detail-view
  > .content-view
  > .standard-view
  > .van-stepper
  > .van-stepper__input {
  width: 3.75rem;
  border: 0.0625rem solid #bbbbbb;
  background: white;
  box-sizing: border-box;
}
.goods-detail-view > .content-view > .desc-view {
  margin-top: 0.9375rem;
  padding: 0 1.25rem;
}
.goods-detail-view > .content-view > .desc-view > .title {
  overflow: hidden;
  margin-bottom: 0.9375rem;
}
.goods-detail-view > .content-view > .desc-view > .title > span {
  background: white;
  border: 0.0625rem solid red;
  color: red;
  float: left;
  margin-right: 0.8125rem;
  font-size: 0.75rem;
}
.goods-detail-view > .content-view > .desc-view > .title > p {
  float: left;
}
.goods-detail-view > .content-view > .desc-view > .desc {
  font-size: 0.75rem;
  line-height: 1.0625rem;
  color: #7c7c7c;
  border-bottom: 0.0625rem solid #e8e8e8;
  padding-bottom: 0.625rem;
}
</style>
