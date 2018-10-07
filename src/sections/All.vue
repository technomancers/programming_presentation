<template lang="pug">
#ProgrammingEssentials.eg-theme-agrume
  .eg-slideshow
    slide
      .center
        h2 Programming Essentials
        h4 Esentially Programming
    slide(:mouseNavigation="false")
      .center
        h2 What do you want to see?
      eg-radio-button(v-for="(pref, i) in slideShows", v-model="slideShow", :label="pref.label", :key="i")
        p {{ pref.text }}
      .button.prev(@click.stop='previousSlide')
        span &lt; Prev. slide
      .button.next(@click.stop='navigate')
        span Next slide &gt;
</template>

<script>
import Eagle from "eagle.js";
export default {
  mixins: [Eagle.slideshow],
  infos: {
    title: "Programming Essentials"
  },
  data() {
    return {
      slideShow: "limited",
      slideShows: [
        {
          label: "limited",
          text: "Limited - Covers components at a high level."
        },
        {
          label: "intermediate",
          text: "Intermediate - Dig deeper into the same components in limited."
        },
        {
          label: "advanced",
          text:
            "Advanced - Different components and ideas will be introduced that is more intensive."
        }
      ]
    };
  },
  methods: {
    navigate() {
      this.$router.push(this.slideShow);
    }
  }
};
</script>
