<template>
  <div class="assort-view">
    <div class="side-view">
      <div
        class="item"
        v-for="(item, index) in assortList"
        :key="index"
        @click="NavItem(index)"
        ref="sideItem"
      >{{item.text}}</div>
    </div>

    <div class="main-view">
      <div class="main-wrapper">
        <div class="goods-wrapper" v-for="(item, index) in goodsList" :key="index">
          <div class="img">
            <img :src="item.img" alt />
            <!-- 垂直居中设置参考 -->
            <span></span>
          </div>

          <div class="content">
            <p class="name">{{item.name}}</p>
            <p class="old-price">原价: ￥{{item.oldPrice}}</p>
            <p class="price">折扣价: ￥{{item.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "分类",
      assortList: null,
      goodsList: null,
      activeIndex: 0,
      selectItem: null
    };
  },
  methods: {
    NavItem: function(index) {
      this.activeIndex = index;
      this.goodsList = this.assortList[this.activeIndex].children;
      this.selectItem.className = "item";
      this.selectItem = this.$refs.sideItem[this.activeIndex];
      this.selectItem.className += " active";
    }
  },
  created() {
    this.$emit("onTitle", this.title);
    this.axios
      .get("/json/assort.json")
      .then(res => {
        this.assortList = res.data;
        this.$nextTick(() => {
          this.goodsList = this.assortList[this.activeIndex].children;
          this.selectItem = this.$refs.sideItem[this.activeIndex];
          this.selectItem.className = "item active";
        });
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.assort-view {
  background: #f2f2f2;
  padding-top: 2.8125rem;
  padding-bottom: 3.125rem;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.assort-view > .side-view {
  height: 100%;
  background: white;
  width: 5.9375rem;
  /* background: red; */
  float: left;
  padding: 0.9375rem;
  box-sizing: border-box;
}
.assort-view > .side-view > .item {
  color: black;
  font-size: 0.75rem;
  height: 1.625rem;
  line-height: 1.625rem;
  border-radius: 0.75rem;
  text-align: center;
  margin-bottom: 0.9375rem;
}
.assort-view > .side-view > .active {
  background: black;
  color: white;
}
.main-view {
  width: 16.25rem;
  height: 100%;
  float: left;
  padding: 0.625rem;
  overflow: auto;
}
.main-wrapper {
  width: 100%;
  padding-bottom: 0.625rem;
}
.goods-wrapper {
  background: white;
  margin-bottom: 0.625rem;
  box-sizing: border-box;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .img {
  width: 5.625rem;
  height: 100%;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .img > img {
  width: 100%;
  vertical-align: middle;
  display: inline-block;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .img > span {
  vertical-align: middle;
  display: inline-block;
  height: 100%;
  width: 0;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .content {
  width: 9.6875rem;
  margin-top: 0.8125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .content > .name {
  font-size: 0.75rem;
  line-height: 1.0625rem;
}
.assort-view
  > .main-view
  > .main-wrapper
  > .goods-wrapper
  > .content
  > .old-price {
  font-size: 0.75rem;
  line-height: 2.0625rem;
  text-decoration: line-through;
  color: #bbbbbb;
}
.assort-view > .main-view > .main-wrapper > .goods-wrapper > .content > .price {
  font-size: 0.6875rem;
  color: red;
}
</style>
