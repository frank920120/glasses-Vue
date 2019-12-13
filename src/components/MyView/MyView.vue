<template>
  <div class="my-view">我的</div>
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
