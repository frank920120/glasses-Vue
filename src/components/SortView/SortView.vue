<template>
  <div class="sort-view">分类</div>
</template>

<script>
export default {
  data() {
    return {
      title: "分类"
    };
  },
  created() {
    this.$emit("onTitle", this.title);
  }
};
</script>

<style scoped></style>
