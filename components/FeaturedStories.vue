<template>
  <div class="container featured-post__container" v-editable="blok">
    <div class="featured-post__copy">
      <h2 class="featured-post__title">{{ blok.title }}</h2>
      <p class="featured-post__description">{{ blok.description }}</p>
      <NuxtLink v-if="blok.link_url" :to="blok.link_url.cached_url" class="link featured-post__link">{{ blok.link_text }}</NuxtLink>
    </div>
    <ul class="featured-post__list" v-if="sortedStories">
      <li
        v-for="article in sortedStories"
        :key="article._uid"
        class="featured-post__item">
        <PostPreview
          v-if="article.content"
          :post-link="article.full_slug"
          :post-content="article.content"
        />
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>
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
    sortedStories() {
      // Load reference data/content from store
      let featuredStories = [];

      if(this.$store.state.variants.variant === 'IXD') {
        featuredStories = this.$store.state.stories.storiesIXD.filter((story) => {
          return this.blok.stories.includes(story.uuid);
        })
      }

      if(this.$store.state.variants.variant === 'UXD') {
        featuredStories = this.$store.state.stories.storiesUXD.filter((story) => {
          return this.blok.stories.includes(story.uuid);
        })
      }

      // Enable the ordering of the article previews
      featuredStories.sort((a, b) => {
        return this.blok.stories.indexOf(a.uuid) - this.blok.stories.indexOf(b.uuid);
      })
 
      return featuredStories;
    }
  }
};
</script>