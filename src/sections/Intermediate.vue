<template lang="pug">
#LimitedProgramming.eg-theme-agrume
  .eg-slideshow
    slide
      .center
        h2 Intermediate Programming
        h4 The only way to not burn out your computer is to not use it.
</template>

<script>
import Eagle from "eagle.js";
export default {
  mixins: [Eagle.slideshow],
  infos: {
    title: "Intermediate Programming",
    path: "intermediate"
  }
};
</script>
