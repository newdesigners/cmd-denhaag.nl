<template>
  <div class="container page-intro__container" v-editable="blok">
    <h1 class="page-intro__title">{{ blok.title }}</h1>
    <div class="page-intro__copy">
      <p class="page-intro__paragraph post__content post__body"><rich-text-renderer v-if="blok.text_left" :document="blok.text_left" /></p>
      <p class="page-intro__paragraph post__content post__body"><rich-text-renderer v-if="blok.text_right" :document="blok.text_right" /></p>
    </div>
    <div class="page-intro__media">
      <figure class="page-intro__image" v-if="blok.image.filename">
        <NuxtImg
          class="page-intro__image-src"
          width="1280"
          height="560"
          loading="lazy"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
          :modifiers="{ smart: true }"
          provider="storyblok"
          :src="blok.image.filename"
          :alt="blok.image.alt"
        />
        <!-- <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt" class="page-intro__image-src" /> -->
      </figure>
      <NuxtLink v-if="blok.link && blok.link.linktype === 'story'" :to="buttonUrl" class="page-intro__link">
        <figure class="page-intro__button">
          <img class="page-intro__button-src" v-if="blok.button" :src="blok.button.filename" :alt="blok.button.alt" />
        </figure>
      </NuxtLink>
      <a v-else :href="blok.link.url" class="page-intro__link" rel="noopener noreferrer" target="_blank">
        <figure class="page-intro__button">
          <img class="page-intro__button-src" v-if="blok.button" :src="blok.button.filename" :alt="blok.button.alt" />
        </figure>
      </a>
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
  },
  computed: {
    buttonUrl() {
      if(this.blok.link.cached_url === 'uxd/home') {
        return 'uxd/';
      }

      if(this.blok.link.cached_url === 'home') {
        return '/';
      }
      return this.blok.link.cached_url;
    }
  }
};
</script>