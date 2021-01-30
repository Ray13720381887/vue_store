// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

//全局样式
import "./assets/css/global.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import  "./assets/iconfont/iconfont.css";

import axios from "axios"; /* 引入axios进行地址访问*/
Vue.prototype.$http = axios;
axios.defaults.baseURL = "http://119.3.189.154:8089/api/";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
