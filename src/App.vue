<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/eagle.js/dist/eagle.css";
@import "../node_modules/eagle.js/dist/themes/agrume/agrume";
body {
  width: 100%;
  margin: 0 0;
}
html {
  height: 0;
}
#app {
  width: 100%;
}
</style>
