<template>
  <div class="home-view">首页</div>
</template>

<script>
export default {
  data() {
    return {
      title: "弗兰克眼镜商店"
    };
  },
  created() {
    this.$emit("onTitle", this.title);
  }
};
</script>

<style scoped></style>
