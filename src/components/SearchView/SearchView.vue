<template>
  <div class="search-view">
    <van-search
      v-model="value"
      show-action
      @search="onSearch"
      placeholder="请输入搜索关键字"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
import { Search } from "vant";
export default {
  data() {
    return {
      isNavShow: false,
      value: ""
    };
  },
  components: {
    [Search.name]: Search
  },
  created() {
    this.$emit("onNavShow", this.isNavShow);
  },
  methods: {
    onSearch: function() {
      console.log(this.value);
    }
  }
};
</script>

<style scoped></style>
