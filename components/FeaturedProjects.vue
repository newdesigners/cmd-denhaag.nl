<template>
  <div class="container featured-post__container" v-editable="blok">
    <div class="featured-post__copy">
      <h2 class="featured-post__title">{{ blok.title }}</h2>
      <p class="featured-post__description">{{ blok.description }}</p>
      <NuxtLink v-if="blok.link_url" :to="blok.link_url.cached_url" class="link featured-post__link">{{ blok.link_text }}</NuxtLink>
    </div>
    <ul class="featured-post__list" v-if="sortedProjects">
      <li
        v-for="article in sortedProjects"
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
    sortedProjects() {
      // Load reference data/content from store
      let featuredProjects = [];

      if(this.$store.state.variants.variant === 'IXD') {
        featuredProjects = this.$store.state.projects.projectsIXD.filter((project) => {
          return this.blok.projects.includes(project.uuid);
        })
      }

      if(this.$store.state.variants.variant === 'UXD') {
        featuredProjects = this.$store.state.projects.projectsUXD.filter((project) => {
          return this.blok.projects.includes(project.uuid);
        })
      }
 
      // Enable the ordering of the article previews
      featuredProjects.sort((a, b) => {
        return this.blok.projects.indexOf(a.uuid) - this.blok.projects.indexOf(b.uuid);
      })
 
      return featuredProjects;
    }
  }
}
</script>

<style>
</style>