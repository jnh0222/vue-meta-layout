import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Default from "./components/layout/Default.vue";
import Clear from "./components/layout/Clear.vue";
import Resizable from "./components/layout/Resizable.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component("default-layout", Default);
Vue.component("clear-layout", Clear);
Vue.component("resizable-layout", Resizable);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
