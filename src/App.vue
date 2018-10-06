<template>
  <div id="app">
    <div class="reveal">
      <div class="slides">
        <title-slide id="main" title="Programming and Robots" subtitle="Limited to Advanced slides describing what programming a robot involves." />
        <table-of-contents id="toc" title="Breakdown" :items="mainToc"/>
        <table-of-contents id="toc-limited" title="Limited" :items="limitedToc" back/>
        <table-of-contents id="toc-intermediate" title="Intermediate" :items="intermediateToc" back/>
        <table-of-contents id="toc-advanced" title="Advanced" :items="advancedToc" back/>
      </div>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/js/reveal";
import TableOfContents from "./components/TableOfContents.vue";
import TitleSlide from "./components/TitleSlide.vue";
export default {
  name: "app",
  data() {
    return {
      mainToc: [
        {
          id: "toc-limited",
          title: "Limited",
          description: "Covers components at a high level."
        },
        {
          id: "toc-intermediate",
          title: "Intermediate",
          description: "Dig deeper into the same components in limited."
        },
        {
          id: "toc-advanced",
          title: "Advanced",
          description:
            "Different components and ideas will be introduced that is more intensive."
        }
      ],
      limitedToc: [
        { id: "limited-intro", title: "Intro" },
        { id: "limited-platforms", title: "Platforms" },
        { id: "limited-languages", title: "Languages" },
        { id: "limited-sensors", title: "Sensors" },
        { id: "limited-components", title: "Components" }
      ],
      intermediateToc: [
        { id: "intermediate-intro", title: "Intro" },
        { id: "intermediate-rio", title: "RobotRio Setup" },
        { id: "intermediate-local", title: "Local Machine Setup" },
        { id: "intermediate-kotlin", title: "Kotlin Syntax" },
        { id: "intermediate-arduino", title: "Arduino's C++" },
        { id: "intermediate-components", title: "Using Components" }
      ],
      advancedToc: [
        { id: "advanced-intro", title: "Intro" },
        { id: "advanced-config", title: "Configuration Management" },
        { id: "advanced-pid", title: "PID Controllers" },
        { id: "advanced-vision", title: "Vision Processing" }
      ]
    };
  },
  mounted() {
    Reveal.initialize();
  },
  components: {
    TableOfContents,
    TitleSlide
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
