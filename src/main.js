import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Eagle from "eagle.js";
import { Options } from "eagle.js";
import Highlight from "highlight.js/lib/highlight";
import HlKotlin from "highlight.js/lib/languages/kotlin";
import HlCpp from "highlight.js/lib/languages/cpp";
Highlight.registerLanguage("kotlin", HlKotlin);
Highlight.registerLanguage("cpp", HlCpp);
Options.hljs = Highlight;

import "eagle.js/dist/eagle.css";
import "eagle.js/dist/themes/agrume/agrume.css";
import "animate.css/animate.min.css";

Vue.use(Eagle);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
