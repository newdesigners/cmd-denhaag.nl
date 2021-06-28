<template>
  <div class="container filter-items__container" v-editable="blok">
    <pre>{{ blok }}</pre>
    <div class="filter-items__copy">
      <h1 class="filter-items__title">{{ blok.title }}</h1>
      <p class="filter-items__description">{{ blok.description }}</p>
    </div>
    <div class="filter-items__filter">
      <ul class="filter-items__filter-list">
        <li class="link filter-items__filter-item" v-for="(item, key) in blok.filters" :key="key">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
</style>