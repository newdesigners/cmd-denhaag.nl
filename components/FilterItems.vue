<template>
  <div class="container filter-items__container" v-editable="blok">
    <div class="filter-items__copy">
      <div class="filter-items__content">
        <h1 class="filter-items__title">{{ blok.title }}</h1>
        <p class="filter-items__description">{{ blok.description }}</p>
      </div>
      <figure class="filter-items__illustration">
        <img v-if="blok.illustration" class="filter-items__image" :src="blok.illustration.filename" :alt="blok.illustration.alt" />
      </figure>
    </div>
    <div class="filter-items__filter">
      <ul class="filter-items__filter-list">
        <li class="link filter-items__filter-item"
          v-for="(item, key) in blok.filters"
          :key="key"
          :class="{ 'filter-items__filter--active': item === selected  }"
          @click="onClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="filter-items__items">
      <ul class="filter-items__items-list">
        <li class="filter-items__items-item"
          v-for="item in blok.items"
          :key="item._uid"
          :class="{ 'filter-items__items--hide': selected !== '' && selected !== item.category, 'filter-items__items--active': item.category === selected }"
        >
          <h3 class="filter-items__items-item-title">{{ item.title }}</h3>
          <p class="filter-items__item-item-description">{{ item.description }}</p>
        </li>
      </ul>
    </div>
    <div class="filter-items__link" v-if="blok.link_url">
      <NuxtLink class="link" :to="blok.link_url.cached_url">{{ blok.link_text }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick(i) {
      this.selected = i;
    },
	}
};
</script>
<style>
</style>