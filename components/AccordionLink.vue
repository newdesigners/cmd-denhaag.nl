<template>
  <div class="container accordion__container" v-editable="blok">
    <h2 class="accordion__title">{{ blok.title }}</h2>
    <p class="accordion__description accordion__description--link" v-if="blok.description">{{ blok.description }}</p>
    <div class="accordion__tabs">
      <ul class="accordion__list">
        <li class="accordion__item" v-for="(tab, index) in blok.tabs" :key="tab._uid" :class="{ 'accordion__item--active' : index === selected }">
          <aside class="accordion__item-aside" @click="onClick(index)">
            <h4 class="accordion__item-title">{{ tab.title }}</h4>
            <Resources type="chevron-down" classes="accordion__chevron" />
          </aside>
          <article class="accordion__article">
            <ul class="accordion__article-list">
              <li class="accordion__article-item" v-for="link in tab.links" :key="link._uid">
                <a class="accordion__article-link" v-if="link.url" :href="link.url" target="_blank" rel="noopener noreferrer">
                  <span>{{ link.title }}</span>
                  <Resources type="share" classes="accordion__article-icon" />
                </a>
                <p class="accordion__article-description">{{ link.description }}</p>
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null
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
        return this.selected = null;
      }

      this.selected = i;
    },
	}
};
</script>