<template>
  <section class="container text-link-image__container" v-editable="blok">
    <div class="text-link-image__copy">
      <h2 class="text-link-image__title">{{ blok.title }}</h2>
      <p class="text-link-image__description">{{ blok.description }}</p>
      <NuxtLink :to="blok.link_url.cached_url" class="link text-link-image__link">{{ blok.link_text }}</NuxtLink>
    </div>
    <figure class="text-link-image__figure">
      <img class="text-link-image__image" :src="blok.image.filename" :alt="blok.image.alt" />
    </figure>
  </section>
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