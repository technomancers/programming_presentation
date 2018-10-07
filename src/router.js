import Vue from "vue";
import Router from "vue-router";
const Limited = () =>
  import(/* webpackChunkName: "view-limited" */ "./sections/Limited.vue");
const Intermediate = () =>
  import(/* webpackChunkName: "view-intermediate" */ "./sections/Intermediate.vue");
const Advanced = () =>
  import(/* webpackChunkName: "view-advanced" */ "./sections/Advanced.vue");
const All = () =>
  import(/* webpackChunkName: "view-all" */ "./sections/All.vue");
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/limited", component: Limited },
    { path: "/intermediate", component: Intermediate },
    { path: "/advanced", component: Advanced },
    { path: "/", component: All }
  ]
});
