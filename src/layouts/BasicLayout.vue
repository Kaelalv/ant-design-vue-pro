<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        :theme="navTheme"
        v-if="navLayout === 'left'"
        :trigger="null"
        collapsible
        v-model="collapsed"
      >
        <div class="logo">Ant Design Vue Pro</div>
        <SiderMenu :theme="navTheme"></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            @click="collapsed = !collapsed"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          >
          </a-icon>
          <l-header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <l-footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer />
  </div>
</template>

<script>
import LHeader from "./Header";
import SiderMenu from "./SiderMenu";
import LFooter from "./Footer";
import SettingDrawer from "@/components/SettingDrawer/index";

export default {
  components: {
    LHeader,
    SiderMenu,
    LFooter,
    SettingDrawer
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  }
};
</script>

<style lang="less" scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.trigger {
  padding: 0 20px;
  font-size: 20px;
  line-height: 64px;
  &:hover {
    background: #eee;
  }
}
</style>
