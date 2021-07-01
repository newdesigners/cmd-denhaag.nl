<template>
  <div class="container tabs__container" v-editable="blok">
    <h1 class="tabs__title">{{ blok.title }}</h1>
    <div class="tabs__nav">
      <ul class="tabs__nav-list">
        <li class=" link tabs__nav-item" v-for="(item, index) in blok.tabs" :key="item._uid" :class="{ 'tabs__nav-item--active': index === selected }" @click="onClick(index)">{{ item.title }}</li>
      </ul>
    </div>
    <div class="tabs__section">
      <article class="tabs__content" v-for="(item, index) in blok.tabs" :key="item._uid" :class="{ 'tabs__content--active': index === selected }">
        <div class="tabs__content-copy">
          <p class="tabs__content-copy-paragraph">{{ item.text_left }}</p>
          <p class="tabs__content-copy-paragraph">{{ item.text_right }}</p>
        </div>
        <div class="tabs__content-list">
          <div class="tabs__content-list-left" v-for="item in item.list_left" :key="item._uid">
            <h2 class="tabs__content-list-title">{{ item.title }}</h2>
            <ul class="tabs__content-list-list">
              <li class="tabs__content-list-item" v-for="item in item.titles" :key="item._uid">{{ item.title }}</li>
            </ul>
          </div>
          <div class="tabs__content-list-right" v-for="item in item.list_right" :key="item._uid">
            <h2 class="tabs__content-list-title">{{ item.title }}</h2>
            <ul class="tabs__content-list-list">
              <li class="tabs__content-list-item" v-for="item in item.titles" :key="item._uid">{{ item.title }}</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 0
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