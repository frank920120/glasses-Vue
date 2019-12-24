<template>
  <div class="cart-view">购物车</div>
</template>

<script>
export default {
  data() {
    return {
      title: "购物车",
      cart: []
    };
  },
  created() {
    this.$emit("onTitle", this.title);
    this.axios
      .get("/json/cart.json")
      .then(res => (this.cartLists = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
