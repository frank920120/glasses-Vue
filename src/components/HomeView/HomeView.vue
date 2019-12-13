<template>
  <div class="home-view">首页</div>
</template>

<script>
export default {
  data() {
    return {
      title: "弗兰克眼镜商店",
      slideShow: []
    };
  },
  created() {
    this.$emit("onTitle", this.title);
    this.axios.get("/json/banner.json").then(res => console.log(res.data));
  }
};
</script>

<style scoped></style>
