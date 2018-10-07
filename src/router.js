import Vue from "vue";
import Router from "vue-router";
import Limited from "./sections/limited/Limited.vue";
import Intermediate from "./sections/intermediate/Intermediate.vue";
import Advanced from "./sections/advanced/Advanced.vue";
import All from "./sections/All.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/limited",
      component: Limited,
      props: {
        onEndExit: () => {
          return;
        },
        startStep: 1
      }
    },
    {
      path: "/intermediate",
      component: Intermediate,
      props: {
        onEndExit: () => {
          return;
        },
        startStep: 1
      }
    },
    {
      path: "/advanced",
      component: Advanced,
      props: {
        onEndExit: () => {
          return;
        },
        startStep: 1
      }
    },
    { path: "/", component: All }
  ]
});
