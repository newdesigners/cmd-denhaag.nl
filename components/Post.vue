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
    <aside class="post__gallery" v-for="slider in blok.gallery" :key="slider._uid">
      <ImageSlider :blok="slider" />
    </aside>
    <aside class="container post__read-more">
      <h2 class="post__read-more-title">Lees ook</h2>
      <ul class="list-post__list" v-if="readMoreProjects">
      <li
        v-for="article in readMoreProjects"
        :key="article._uid"
        class="featured-post__item">
        <PostPreview
          v-if="article.content"
          :post-link="article.full_slug"
          :post-content="article.content"
        />
      </li>
    </ul>
    </aside>
  </article>
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
    readMoreProjects() {
      // Load reference data/content from store
      return this.$store.state.projects.projects.filter((project) => {
        return project.content._uid !== this.blok._uid && project.full_slug !== 'projecten/';
      }).slice(0, 2);
    }
  }
}
</script>