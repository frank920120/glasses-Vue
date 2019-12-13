<template>
  <div class="cart-view">购物车</div>
</template>

<script>
export default {
  data() {
    return {
      title: "购物车"
    };
  },
  created() {
    this.$emit("onTitle", this.title);
  }
};
</script>

<style scoped></style>
