<template>
  <div class="container text-link-image__container" :class="{ 'text-link-image__container--reverse': blok.reverse }" v-editable="blok">
    <div class="text-link-image__copy">
      <h2 class="text-link-image__title">{{ blok.title }}</h2>
      <div class="text-link-image__description">
        <rich-text-renderer :document="blok.description" />
      </div>
      <!-- <p class="text-link-image__description">{{ blok.description }}</p> -->
      <div v-if="blok.link_url">
        <NuxtLink v-if="blok.link_url.linktype === 'story'" :to="blok.link_url.cached_url" class="link text-link-image__link">{{ blok.link_text }}</NuxtLink>
        <a v-if="blok.link_url.linktype === 'url'" :href="blok.link_url.cached_url" class="link text-link-image__link" rel="noopener noreferrer" target="_blank">{{ blok.link_text }}</a>
      </div>
    </div>
    <figure class="text-link-image__figure" v-if="blok.image.filename">
      <!-- <NuxtImg
        v-if="blok.image"
        class="text-link-image__image"
        width="740"
        height="450"
        provider="storyblok"
        loading="lazy"
        :modifiers="{ smart: true }"
        :src="blok.image.filename"
        :alt="blok.image.alt"
      /> -->
      <SlantedImage :reverse="blok.reverse_image" class="text-link-image__src" :url="blok.image.filename" />
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