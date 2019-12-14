<template>
  <div class="winnowitem-view">
    <img v-lazy="bgimg" class="winnow-bgimg" />
    <van-swipe :loop="false" :width="110" :show-indicators="show - indicators">
      <van-swipe-item
        v-for="item in items"
        :key="item.id"
        class="slideshow-item"
      >
        <div class="winnow-box">
          <h3 class="winnow-name">{{ item.name }}</h3>
          <h4 class="winnow-desc">{{ item.desc }}</h4>
          <img v-lazy="item.img" class="winnow-img" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  props: ["bgimg", "items"],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>

<style scoped>
.winnowitem-view {
  background: white;
}
.winnow-bgimg {
  width: 100%;
}
.winnow-box {
  height: 6.25rem;
  width: 6.25rem;
  background: #f6f6f6;
  margin: 5px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h3 {
  font-size: 0.8125rem;
  margin: 0.4375rem 0 0.6875rem;
  text-align: center;
  font-weight: 800;
}
h4 {
  font-size: 0.75rem;
  margin-bottom: 0.6875rem;
  font-weight: 700;
}
.winnow-img {
  width: 4.625rem;
  height: 3.125rem;
}
</style>
