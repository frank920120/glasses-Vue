<template>
  <div class="recommend-view">
    <RecommentListsView
      v-for="list in recommendLists"
      :key="list.id"
      :list="list"
    ></RecommentListsView>
  </div>
</template>

<script>
import RecommentListsView from "../RecommendListsView/RecommendListsView.vue";
export default {
  data() {
    return {
      recommendLists: []
    };
  },
  components: {
    RecommentListsView
  },
  created() {
    this.axios
      .get("/json/commend-list.json")
      .then(res => (this.recommendLists = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.recommend-view {
  padding-bottom: 3.125rem;
}
</style>
