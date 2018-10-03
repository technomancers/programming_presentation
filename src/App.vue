<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <section>Single Horizontal Slide</section>
        <section>
          <section>Vertical Slide 1</section>
          <section>Vertical Slide 2</section>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/js/reveal";
export default {
  name: "app",
  mounted() {
    Reveal.initialize();
  }
};
</script>

<style lang="scss">
@import url("../node_modules/reveal.js/css/reveal.css");
@import url("../node_modules/reveal.js/css/theme/black.css");
#app {
  height: 100vh;
}
</style>
