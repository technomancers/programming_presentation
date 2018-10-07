<template lang="pug">
#LimitedProgramming.eg-theme-agrume
  .eg-slideshow
    slide
      .center
        h2 Advanced Programming
        h4 Never deploy code on a Friday!
</template>

<script>
import Eagle from "eagle.js";
export default {
  mixins: [Eagle.slideshow],
  infos: {
    title: "Advanced Programming",
    path: "advanced"
  }
};
</script>
