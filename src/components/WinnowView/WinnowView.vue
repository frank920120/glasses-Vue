<template>
  <div class="winnow-view">
    <WinnowViewItem :bgimg="bgimg01" :items="items01"></WinnowViewItem>
    <WinnowViewItem :bgimg="bgimg02" :items="items02"></WinnowViewItem>
  </div>
</template>

<script>
import WinnowViewItem from "../WinnowViewItem/WinnowViewItem.vue";
export default {
  data() {
    return {
      items01: [],
      items02: [],
      bgimg01: "",
      bgimg02: ""
    };
  },
  components: {
    WinnowViewItem
  },
  created() {
    this.axios
      .get("/json/winnow.json")
      .then(res => {
        this.items01 = res.data.winnowItems1;
        this.items02 = res.data.winnowItems2;
        this.bgimg01 = res.data.bigImg1;
        this.bgimg02 = res.data.bigImg2;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
