<template>
  <div id="app">
    <!-- <a-button>登录</a-button> -->
    <!-- <div id="nav">
      <router-link to="/dashboard/analysis">dashboard</router-link> |
      <router-link to="/form">form</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: auto;
  background: #f7f7f7;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
