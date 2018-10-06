<template>
  <section :id="id">
    <h2>{{ title }}</h2>
    <p><small>{{ subtitle }}</small></p>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
</style>
