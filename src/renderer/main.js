import Vue from "vue";
import axios from "axios";

import App from "./App";
import router from "./router";
import store from "./store";

import AudioVisual from "vue-audio-visual";

Vue.use(AudioVisual);

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

window.axios = axios.create({
  baseURL: "https://sfm-project.herokuapp.com/",
  params: {
    token: false,
  },
  headers: {
    //Authorization: ""
  },
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: "<App/>",
}).$mount("#app");
