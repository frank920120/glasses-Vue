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
    <div class="history-view">
      <div class="history-title">
        <h4>最近搜索</h4>
        <span @click="onClear">清空记录</span>
      </div>
      <van-tag
        round
        @click="onHistoryItem(tag)"
        v-for="(tag, index) in historyList"
        :key="index"
        >{{ tag }}</van-tag
      >
    </div>
    <transition name="slide">
      <SearchDetailView v-if="searchDetailShow" @onBack="searchDetailHide" />
    </transition>
  </div>
</template>

<script>
import { Search, Tag } from "vant";
import SearchDetailView from "../SearchDetailView/SearchDetailView.vue";
export default {
  data() {
    return {
      isNavShow: false,
      value: "",
      historyList: ["明月", "海昌", "隐形眼镜 "],
      searchDetailShow: false
    };
  },
  components: {
    [Search.name]: Search,
    [Tag.name]: Tag,
    SearchDetailView
  },
  created() {
    this.$emit("onNavShow", this.isNavShow);
  },
  methods: {
    onSearch: function() {
      console.log(this.value);
      this.searchDetailShow = true;
    },
    onClear: function() {
      this.value = "";
    },
    onHistoryItem: function(item) {
      this.value = item;
    },
    searchDetailHide: function() {
      this.searchDetailShow = false;
    }
  }
};
</script>

<style scoped>
.search-view {
  /* 	position: fixed;
	left: 0;
	top: 0;
	bottom: 0; */
  width: 100%;
  background: #f2f2f2;
}
.search-view > .history-view {
  padding: 0 1.25rem;
}
.search-view > .history-view > .history-title {
  margin: 1.125rem 0 1.25rem;
  overflow: hidden;
}
.search-view > .history-view > .history-title > h4 {
  float: left;
  font-size: 1rem;
  font-weight: 800;
}
.search-view > .history-view > .history-title > span {
  color: red;
  font-size: 1rem;
  float: right;
}
.search-view > .history-view > .van-tag {
  margin: 0 0.625rem;
}

.slide-enter-active {
  animation: slide 1s;
}
.slide-leave-active {
  animation: slide 1s reverse;
}

@keyframes slide {
  from {
    transform: translateX(100%);
    transition: 1s ease all;
  }
  to {
    transform: translateX(0);
    transition: 1s ease all;
  }
}
</style>
