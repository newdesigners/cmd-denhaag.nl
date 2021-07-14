<template>
  <NuxtLink :to="`/${ postLink }`" class="post-preview">
    <figure class="post-preview__figure">
      <img v-if="postContent.image" :src="postContent.image.filename" :alt="postContent.image.alt" class="post-preview__image">
    </figure>
    <div class="post-preview__copy">
      <h2 class="post-preview__title">{{ postContent.name }}</h2>
      <p class="post-preview__excerpt">{{ postContent.excerpt }}</p>
    </div>
  </NuxtLink>
</template>
 
<script>
export default {
  props: {
    postContent: {
      type: Object,
      required: true
    },
    postLink: {
      type: String,
      required: true
    }
  }
}
</script>
 
<style>
.article-teaser:hover {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}
</style>