<template>
  <article class="post" v-editable="blok">
    <div class="container post__intro">
      <h1 class="post__title">{{ blok.name }}</h1>
      <p class="post__excerpt">{{ blok.excerpt }}</p>
    </div>
    <figure class="container post__figure">
      <img class="post__image" v-if="blok.image" :src="blok.image.filename" alt="" />
    </figure>
    <div class="container prose lg:prose-lg xl:prose-xl post__content post__body">
      <rich-text-renderer v-if="blok.body" :document="blok.body" />
    </div>
  </article>
</template>
 
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>