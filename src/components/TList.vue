<template>
  <div class="demo pd20">
    <div class="left">图片</div>
    <div class="right pd20">
      <p>{{ list.id }}</p>
      <span>{{ list.name }}</span>
      <span>{{ list.day }}</span>
      <div class="btn">立即参与</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo",
  props: {
    list: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      myItem: ""
    };
  },
  methods: {
  },
};
</script>
<style lang="less" scoped>
.demo {
  display: flex;
  justify-content: space-around;
}
/* .demo > div{
  flex: none;
} */
.left {
  flex: 1;
  background: #d4cdcd;
  border-radius: 8px;
}
.right {
  flex: 1.5;
}
</style>
