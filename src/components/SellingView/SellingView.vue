<template>
  <div class="selling-view">
    <GoodsItemView
      v-for="item in sellingItems"
      :key="item.id"
      :item="item"
    ></GoodsItemView>
  </div>
</template>

<script>
import GoodsItemView from "../GoodsItemView/GoodsItemView.vue";
export default {
  data() {
    return {
      sellingItems: []
    };
  },
  components: {
    GoodsItemView
  },
  created() {
    this.axios
      .get("/json/selling-list.json")
      .then(res => (this.sellingItems = res.data))
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.selling-view {
  display: flex;
  flex-wrap: wrap;
  background: white;
  border-top: 0.0625rem solid #bbbbbb;
  border-left: 0.0625rem solid #bbbbbb;
  overflow: hidden;
}
</style>
