import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Icon, Drawer, Radio, Menu } from "ant-design-vue";
// 权限组件形式
import Authorized from "./components/Authorized";
// 权限指令形式
import Auth from "./directives/auth";
import "./style/theme.css";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
// 权限组件形式
Vue.component("Authorized", Authorized);
// 权限指令形式
Vue.use(Auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
