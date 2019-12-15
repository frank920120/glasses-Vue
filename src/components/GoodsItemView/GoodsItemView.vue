<template>
  <div class="goodsitem-view" @click="itemclick(item.id)">
    <img v-lazy="item.img" class="item-img" />
    <p class="item-title">{{ item.title }}</p>
    <p class="item-desc">{{ item.desc }}</p>
    <p class="item-other">
      <span class="item-nowprice">¥ {{ item.nowPrice }}</span>
      <span class="item-oldprice">¥ {{ item.oldPrice }}</span>
      <span class="item-rebate">{{ item.rebate }}折</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    itemclick: function(id) {
      this.$store.commit("changeItemDetailsShow", id);
    }
  }
};
</script>

<style scoped>
.goodsitem-view {
  width: 50%;
  height: 13.875rem;
  border-right: 0.0625rem solid #bbbbbb;
  border-bottom: 0.0625rem solid #bbbbbb;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-img {
  width: 9.375rem;
  height: 8.125rem;
  object-fit: contain;
  margin-top: 0.625rem;
}
.item-title {
  font-size: 0.8125rem;
  color: black;
  margin-bottom: 0.625rem;
}
.item-desc {
  font-size: 0.75rem;
  color: #b4b4b4;
  margin-bottom: 0.625rem;
}
.item-nowprice {
  font-size: 0.875rem;
  color: red;
  font-weight: 800;
}
.item-oldprice {
  font-size: 0.75rem;
  color: #b4b4b4;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-decoration: line-through;
}
.item-rebate {
  font-size: 0.75rem;
  color: white;
  background: red;
  border-radius: 0.1875rem;
  width: 2.0625rem;
  height: 0.75rem;
  line-height: 0.75rem;
  display: inline-block;
  padding: 1px;
}
</style>
