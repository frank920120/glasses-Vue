<template>
  <div class="itemdetail-view" @click="goback">detail-{{ getId }}</div>
</template>

<script>
export default {
  computed: {
    getId() {
      return this.$store.state.itemId;
    }
  },
  methods: {
    goback: function() {
      this.$store.commit("changeItemDetailsShow");
    }
  }
};
</script>

<style scoped>
.itemdetail-view {
  background: blue;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}
</style>
