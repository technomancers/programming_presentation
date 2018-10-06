<template lang="pug">
#ProgrammingEssentials.eg-theme-agrume
  .eg-slideshow.eg-theme-agrume
    slide
      .center
        h2 Programming Essentials
        h4 Esentially Programming
</template>

<script>
import Eagle from "eagle.js";
export default {
  mixins: [Eagle.slideshow],
  infos: {
    title: "Programming Essentials"
  },
  methods: {
    updateSlides: function() {
      this.currentSlideIndex = +this.$route.params.slide;
      this.$nextTick(() => {
        this.step = +this.$route.params.step;
      });
    },
    updateURL: function() {
      this.$router.push("/${this.currentSlideIndex}/${this.step}");
    }
  },
  watch: {
    $route: "updateSlides",
    step: "updateURL",
    currentSlideIndex: "updateURL"
  }
};
</script>
