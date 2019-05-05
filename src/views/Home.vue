<template>
  <div class="home">
    <t-list :list="item" v-for="item in listData" :key="item.id"></t-list>
  </div>
</template>

<script>
import TList from "../components/TList.vue";

export default {
  name: "home",
  components: {
    TList
  },
  data: function() {
    return {
      listData: [
        { id: 1, name: "item 1", day: "2019-04-22 11:38" },
        { id: 2, name: "item 2", day: "2019-04-22 11:39" },
        { id: 3, name: "item 3", day: "2019-04-22 11:40" },
        { id: 4, name: "item 4", day: "2019-04-22 11:41" }
      ]
    };
  }
};
</script>
