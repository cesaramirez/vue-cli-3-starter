import Vue from "vue";
import App from "@/components/App.vue";
import router from "@/router";
import store from "@/store";
import "./registerServiceWorker";

import "@/plugins";
import "@/components";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  ...App
});
