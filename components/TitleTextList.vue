<template>
  <div class="container title-text-list__container" v-editable="blok">
    <h2 class="title-text-list__title">{{ blok.title }}</h2>
    <p class="title-text-list__paragraph">{{ blok.text }}</p>
    <div class="title-text-list__content">
      <div class="title-text-list__list-container">
        <ul class="title-text-list__list">
          <li class="title-text-list__item" v-for="item in blok.list" :key="item._uid">
            <h3 class="title-text-list__item-title">{{ item.title }}</h3>
            <ul class="title-text-list__item-list">
              <li class="title-text-list__item-item" v-for="item in item.titles" :key="item._uid">
                <Resources type="check" classes="title-text-list__item-icon" />
                <span>{{ item.title }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Resources type="hand-point-left-top" classes="title-text-list__hand" />
    </div>
    <div class="title-text-list__variant" v-if="blok.link_url">
        <NuxtLink v-if="blok.link_url.linktype === 'story'" :to="blok.link_url.cached_url" class="link">{{ blok.link_label }}</NuxtLink>
        <a v-if="blok.link_url.linktype === 'url'" :href="blok.link_url.cached_url" class="link" rel="noopener noreferrer" target="_blank">{{ blok.link_label }}</a>
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