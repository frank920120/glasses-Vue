<template>
  <div class="category-view">
    <div
      v-for="category in categories"
      :key="category.id"
      class="category-item"
    >
      <div
        class="img"
        :style="{ backgroundColor: category.backgroundColor }"
      ></div>
      <h3>{{ category.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, name: "类别1", backgroundColor: "red" },
        { id: 2, name: "类别2", backgroundColor: "green" },
        { id: 3, name: "类别3", backgroundColor: "lightblue" },
        { id: 4, name: "类别4", backgroundColor: "yellow" },
        { id: 5, name: "类别5", backgroundColor: "black" }
      ]
    };
  }
};
</script>

<style scoped>
.category-view {
  display: flex;
  justify-content: center;
}
.category-view > .category-item {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.6875rem 0 0;
}

.category-item > .img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-bottom: 0.4375rem;
}
.category-item > h3 {
  font-size: 0.8125rem;
}
</style>
