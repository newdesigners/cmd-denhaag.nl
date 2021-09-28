<template>
  <div class="container home-intro__container" v-editable="blok">
    <h1 class="home-intro__title">{{ blok.title }}</h1>
    <NuxtLink v-if="blok.link" :to="buttonUrl" class="home-intro__link">
      <figure class="home-intro__button">
        <img class="home-intro__button-src" :src="blok.button_image.filename" :alt="blok.button_image.alt" />
      </figure>
    </NuxtLink>
    <figure class="home-intro__background">
      <video class="home-intro__background-src" :src="blok.video.filename" autoplay muted loop></video>
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