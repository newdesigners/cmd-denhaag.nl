<template>
  <div class="container text-link-image__container" :class="{ 'text-link-image__container--reverse': blok.reverse }" v-editable="blok">
    <div class="text-link-image__test">
      <h2 class="text-link-image__title">{{ blok.title }}</h2>
      <p class="text-link-image__description">{{ blok.description }}</p>
      <div v-if="blok.link_url">
        <NuxtLink v-if="blok.link_url.linktype === 'story'" :to="blok.link_url.cached_url" class="link text-link-image__link">{{ blok.link_text }}</NuxtLink>
        <a v-if="blok.link_url.linktype === 'url'" :href="blok.link_url.cached_url" class="link text-link-image__link" rel="noopener noreferrer" target="_blank">{{ blok.link_text }}</a>
      </div>
    </div>
    <figure class="text-link-image__figure" v-if="blok.image">
      <NuxtImg
        class="text-link-image__image"
        width="740"
        height="450"
        provider="storyblok"
        :src="blok.image.filename"
        :alt="blok.image.alt"
      />
    </figure>
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