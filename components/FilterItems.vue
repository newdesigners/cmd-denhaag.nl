<template>
  <div class="container filter-items__container" v-editable="blok">
    <div class="filter-items__copy">
      <div class="filter-items__content">
        <h1 class="filter-items__title">{{ blok.title }}</h1>
        <p class="filter-items__description">{{ blok.description }}</p>
      </div>
      <figure class="filter-items__illustration" v-if="blok.illustration">
        <img v-if="blok.illustration.filename" class="filter-items__image" :src="blok.illustration.filename" :alt="blok.illustration.alt" />
      </figure>
    </div>
    <div class="filter-items__filter">
      <ul class="filter-items__filter-list">
        <li class="link filter-items__filter-item" v-for="(item, key) in tags" :key="key" :class="{ 'filter-items__filter--active': item === selected }" @click="onClick(item)">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="filter-items__items">
      <ul class="filter-items__items-list">
        <li class="filter-items__items-item"
          v-for="item in blok.items"
          :key="item._uid"
          :class="{'filter-items__items-item--active': item.category === selected || selected === allNL || selected === allEN }"
        >
          <h3 class="filter-items__items-item-title">{{ item.title }}</h3>
          <p class="filter-items__items-item-description">{{ item.description }}</p>
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
      selected: '',
      allNL: 'Alle rollen',
      allEN: 'All roles',
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
      if(i === this.selected) {
        if(this.$store.state.variants.variant === 'IXD') {
          return this.selected = this.allNL
        } else {
          return this.selected = this.allEN;
        }
      }
      
      this.selected = i;
    },
	},
  computed: {
    tags() {
      if(this.blok.filters.includes(this.allNL) || this.blok.filters.includes(this.allEN)) {
        return this.blok.filters;
      } else {
        if(this.$store.state.variants.variant === 'IXD') {
          this.blok.filters.unshift(this.allNL);
        }

        if(this.$store.state.variants.variant === 'UXD') {
          this.blok.filters.unshift(this.allEN);
        } 
      
        return this.blok.filters;
      }
    }
  },
  mounted() {
    if(this.$store.state.variants.variant === 'IXD') {
      this.selected = this.allNL;
    } else {
      this.selected = this.allEN;
    }
  }
};
</script>