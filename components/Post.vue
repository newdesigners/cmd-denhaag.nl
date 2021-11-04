<template>
  <article class="post" v-editable="blok">
    <div class="container post__intro">
      <h1 class="post__title">{{ blok.content.name }}</h1>
      <p class="post__excerpt">{{ blok.content.excerpt }}</p>
    </div>
    <figure class="container post__figure" v-if="blok.content.image.filename">
      <NuxtImg
        class="post__image"
        width="1280"
        height="560"
        provider="storyblok"
        loading="lazy"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw"
        :modifiers="{ smart: true }"
        :src="blok.content.image.filename"
        :alt="blok.content.image.alt"
      />
      <!-- <img class="post__image" v-if="blok.content.image" :src="blok.content.image.filename" :alt="blok.content.image.alt" /> -->
    </figure>
    <div class="container prose lg:prose-lg xl:prose-xl post__content post__body">
      <rich-text-renderer v-if="blok.content.body" :document="blok.content.body" />
    </div>
    <aside class="post__gallery" v-for="slider in blok.content.gallery" :key="slider._uid">
      <ImageSlider :blok="slider" />
    </aside>
    <aside class="container post__read-more">
      <h2 class="post__read-more-title">Lees ook</h2>
      <ul class="list-post__list" v-if="readMorePosts">
        <li
          v-for="article in readMorePosts" :key="article.uuid" class="featured-post__item">
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
    readMorePosts() {
      //const type = this.$route.fullPath.substring(1).split('/')[0];
      const type = this.$route.fullPath.substring(1).split('/');
      console.log(type);
      if(type.includes('projecten')) {
        return this.$store.state.projects.projectsIXD.filter((p) => {
          return p.uuid !== this.blok.uuid && p.full_slug !== 'projecten/';
        }).sort((a, b) => 0.5 - Math.random()).slice(0, 2);
      }

      if(type.includes('projects')) {
        return this.$store.state.projects.projectsUXD.filter((p) => {
          return p.uuid !== this.blok.uuid && p.full_slug !== 'uxd/projects/';
        }).sort((a, b) => 0.5 - Math.random()).slice(0, 2);
      }

      if(type.includes('verhalen')) {
        return this.$store.state.stories.storiesIXD.filter((p) => {
          return p.uuid !== this.blok.uuid && p.full_slug !== 'verhalen/';
        }).sort((a, b) => 0.5 - Math.random()).slice(0, 2);
      }

      if(type.includes('stories')) {
        return this.$store.state.stories.storiesUXD.filter((p) => {
          return p.uuid !== this.blok.uuid && p.full_slug !== 'uxd/stories/';
        }).sort((a, b) => 0.5 - Math.random()).slice(0, 2);
      }
    }
  }
};
</script>