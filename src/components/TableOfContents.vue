<template>
  <section :id="id">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in items" :key="item.id"><a :href="'#'+item.id">{{ item.title }}</a>{{ item.description != undefined ? ' - '+item.description : '' }}</li>
    </ul>
    <p><small><a v-if="back" href="#toc">&lt; toc</a></small></p>
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
    items: {
      type: Array,
      required: true
    },
    back: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style lang="scss">
p {
  text-align: right;
}
</style>
