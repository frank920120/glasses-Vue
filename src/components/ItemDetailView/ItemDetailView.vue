
<template>
  <div class="goods-detail-view" v-if="details">
    <van-nav-bar title="商品详情" left-arrow @click-left="goback" fixed />
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
          <van-stepper v-model="number" />
        </div>
      </div>
      <div class="desc-view">
        <div class="title">
          <span>自营</span>
          <p>{{details.name}}</p>
        </div>
        <p class="desc">{{details.desc}}</p>
      </div>
      <div class="explain-view">
        <span>说明</span>
        <p>{{details.explain}}</p>
        <van-icon name="arrow" class="icon" />
      </div>
    </div>
    <div class="appraise-view">
      <div class="appraise-title">
        <span class="title">商品评价({{details.appraise.num}})</span>
        <span class="rate-score">
          好评{{details.appraise.rateScore}}%
          <van-icon class="icon" name="arrow" />
        </span>
      </div>
      <div class="appraise-content">
        <div class="box" ref="scrollView">
          <UserAppraiseView
            ref="userAppraise"
            v-for="(item,index) in details.appraise.list"
            :key="index"
            :appraise="item"
          />
        </div>
      </div>
    </div>
    <div class="product-view">
      <h3>图文详情</h3>
      <h4>产品信息</h4>
      <table>
        <tr v-for="(item,index) in details.productMessage" :key="index">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div class="product-view">
      <h3>产品印花</h3>
      <div class="product-border" v-for="(item,index) in details.productStamp" :key="index">
        <h4>{{item.stamp}}</h4>
        <p>{{item.text}}</p>
        <img :src="item.img" alt />
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="like-o" text="收藏" @click="onCollect" />
      <van-goods-action-icon icon="cart" text="购物车" @click="onCart" />
      <van-goods-action-button text="加入购物车" @click="onAddCart" type="danger" />
      <van-goods-action-button primary text="立即购买" @click="onBuy" type="warning" />
    </van-goods-action>
  </div>
</template>

<script>
import {
  NavBar,
  Swipe,
  SwipeItem,
  Stepper,
  Icon,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon
} from "vant";
import UserAppraiseView from "../UserAppraiseView/UserAppraiseView.vue";
export default {
  data() {
    return {
      details: null,
      number: 0
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Stepper.name]: Stepper,
    [Icon.name]: Icon,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionButton.name]: GoodsActionButton,
    [GoodsActionIcon.name]: GoodsActionIcon,
    UserAppraiseView
  },
  computed: {
    getId() {
      return this.$store.state.itemId;
    }
  },
  methods: {
    goback: function() {
      this.$store.commit("changeItemDetailsShow");
    },
    onCollect: function() {
      console.log("收藏");
    },
    onCart: function() {
      console.log("跳转到购物车");
    },
    onAddCart: function() {
      console.log("添加到购物车");
    },
    onBuy: function() {
      console.log("立即购买");
    }
  },
  created() {
    this.axios
      .get("/json/goods-detail.json")
      .then(res => (this.details = res.data))
      .catch(err => console.log(err));
  },
  beforeUpdate() {
    this.$nextTick(function() {
      let userAppraise = this.$refs.userAppraise[0].$el;
      let width = userAppraise.offsetWidth;
      let computedStyle = getComputedStyle(userAppraise, null);
      let marginR = parseInt(computedStyle.marginRight);
      let temp =
        this.details.appraise.list.length * (width + marginR * 2) + "px";
      this.$refs.scrollView.style.width = temp;
    });
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
.goods-detail-view > .content-view > .explain-view {
  padding: 0 1.75rem 0 1.4375rem;
  height: 2.5rem;
  line-height: 2.5rem;
  overflow: hidden;
  font-size: 0.75rem;
}
.goods-detail-view > .content-view > .explain-view > span {
  color: black;
  font-weight: 800;
  margin-right: 1.4375rem;
  float: left;
}
.goods-detail-view > .content-view > .explain-view > p {
  color: #7c7c7c;
  float: left;
}
.goods-detail-view > .content-view > .explain-view > .icon {
  float: right;
  color: #7c7c7c;
  height: 2.5rem;
  line-height: 2.5rem;
}
.goods-detail-view > .appraise-view {
  background: white;
  margin-bottom: 0.625rem;
}
.appraise-title {
  padding: 0.8125rem 1.5625rem 0.8125rem 1.25rem;
}
.appraise-content > .title {
  font-size: 0.875rem;
  font-weight: 800;
}
.rate-score {
  color: red;
  font-size: 0.875rem;
  float: right;
  vertical-align: middle;
}
.goods-detail-view > .appraise-view > .appraise-title > .rate-score > .icon {
  color: #7c7c7c;
  vertical-align: middle;
}
.appraise-content {
  overflow: auto;
  padding-left: 0.9375rem;
  padding-bottom: 0.625rem;
  margin-bottom: 0.625rem;
}

.box {
  overflow: hidden;
}
.goods-detail-view > .product-view {
  padding: 0.9375rem 0.625rem;
  background: white;
  margin-bottom: 0.625rem;
}
.goods-detail-view > .product-view > h3 {
  background: black;
  color: white;
  border-radius: 0.3125rem;
  text-align: center;
  height: 1.875rem;
  line-height: 1.875rem;
  font-size: 0.875rem;
}
.goods-detail-view > .product-view h4 {
  line-height: 4.125rem;
  font-size: 1rem;
  font-weight: 900;
}
.goods-detail-view > .product-view > table {
  border: 0.0625rem solid #bbbbbb;
  border-collapse: collapse;
  font-size: 0.75rem;
  width: 100%;
}
.goods-detail-view > .product-view > table td {
  border: 0.0625rem solid #bbbbbb;
  height: 2.375rem;
  padding-left: 1.0625rem;
  line-height: 2.375rem;
}
.goods-detail-view > .product-view > table td:nth-of-type(1) {
  width: 5.4375rem;
  color: #707070;
}
.goods-detail-view > .product-view > .product-border {
  border-bottom: 0.0625rem solid #bbbbbb;
}
.goods-detail-view > .product-view > .product-border > p {
  font-size: 0.8125rem;
  line-height: 1.0625rem;
}
.goods-detail-view > .product-view > .product-border > img {
  width: 100%;
}
.goods-detail-view .van-button--warning {
  background: black;
  border-color: black;
  border-radius: 0;
}
.goods-detail-view .van-button--danger {
  background: red;
  border-radius: 0;
}
</style>
