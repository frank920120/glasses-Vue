<template>
  <van-panel>
    <div class="recommend-wrapper">
      <div class="img-view">
        <img v-lazy="list.img" />
      </div>
      <div class="detail-view">
        <h4 class="title">{{ list.title }}</h4>
        <p class="desc">{{ list.desc }}</p>
        <div class="keyword">
          <span>{{ list.keyword1 }}</span>
          |
          <span>{{ list.keyword2 }}</span>
        </div>
        <p class="price">¥ {{ list.price }}</p>
      </div>
    </div>
    <div slot="footer" class="footer">
      <span class="brand">{{ list.brand }}</span>
      <span class="standard">{{ list.standard }}</span>
      <button class="button">找相似</button>
    </div>
  </van-panel>
</template>

<script>
import { Panel, Button } from "vant";
export default {
  props: ["list"],
  components: {
    [Panel.name]: Panel,
    [Button.name]: Button
  }
};
</script>

<style scoped>
.recommend-wrapper {
  display: flex;
  height: 11.25rem;
}
.van-cell-group {
  margin-bottom: 0.625rem;
}
.img-view {
  width: 10.3125rem;
  display: flex;
  justify-content: center;
}
.img-view img {
  width: 7.5rem;
  object-fit: contain;
}
.detail-view {
  width: 13.125rem;
  margin-top: 0.5625rem;
  padding-right: 1rem;
}
.van-panel__header {
  padding: 0;
}

.title {
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.4375rem;
  margin-bottom: 0.625rem;
}

.desc {
  font-size: 0.8125rem;
  line-height: 1.125rem;
  color: #737373;
}
.keyword {
  width: 7.25rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.8125rem;
  margin: 0.625rem 0;
  color: #d5b085;
  text-align: center;
  background: #f2f2f2;
}
.price {
  color: red;
  font-weight: 800;
  margin-top: 0.75rem;
  font-size: 0.875rem;
}
.footer {
  height: 2.625rem;
  line-height: 2.625rem;
  font-size: 0.75rem;
  color: #808080;
}
.brand {
  margin-right: 6.375rem;
  display: inline-block;
}
.button {
  border-color: 0.0625rem solid #808080;
  float: right;
  margin-right: 1rem;
  width: 3.5625rem;
  height: 1.25rem;
  line-height: 1.25rem;
  text-align: center;
  border-radius: 0.625rem;
  background: white;
  margin-top: 0.6875rem;
}
</style>
