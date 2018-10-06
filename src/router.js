import Vue from "vue";
import Router from "vue-router";
import SlideShow from "./SlideShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/:slide/:step",
      name: "slideshow",
      component: SlideShow
    },
    { path: "/", redirect: "/0/0" }
  ]
});
