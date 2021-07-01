<template>
  <div class="container page-intro__container" v-editable="blok">
    <h1 class="page-intro__title">{{ blok.title }}</h1>
    <div class="page-intro__copy">
      <p class="page-intro__paragraph">{{ blok.text_left }}</p>
      <p class="page-intro__paragraph">{{ blok.text_right }}</p>
    </div>
    <div class="page-intro__media">
      <figure class="page-intro__image">
        <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt" class="page-intro__image-src" />
      </figure>
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

<style>
</style>