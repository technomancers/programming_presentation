<template lang="pug">
#LimitedProgramming.eg-theme-agrume
  .eg-slideshow
    slide
      .center
        h2 Limited Programming
        h4 A computer only does what it is told. No More. No less.
</template>

<script>
import Eagle from "eagle.js";
export default {
  mixins: [Eagle.slideshow],
  infos: {
    title: "Limited Programming",
    path: "limited"
  }
};
</script>
