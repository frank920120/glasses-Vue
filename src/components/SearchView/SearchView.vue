<template>
  <div class="search-view">搜索</div>
</template>

<script>
export default {
  data() {
    return {
      isNavShow: false
    };
  },
  created() {
    this.$emit("onNavShow", this.isNavShow);
  }
};
</script>

<style scoped></style>
