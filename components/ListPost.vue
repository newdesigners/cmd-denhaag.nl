<template>
  <div class="container list-post__container" v-editable="blok">
    <ul class="list-post__list">
      <li
        v-for="article in showedPosts"
        :key="article._uid"
        class="featured-post__item"
      >
        <PostPreview
          v-if="article.content"
          :post-link="article.full_slug"
          :post-content="article.content"
        />
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">This content loads on save. <strong>Save the entry & reload.</strong></p>
      </li>
    </ul>
    <p class="link list-post__load" v-if="posts.length > size && !loadMore" @click="change">
      <span>{{ blok.load_text }}</span>
      <Resources type="chevron-down" classes="list-post__load-icon" />  
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      loadMore: false,
      size: 4,
    }
  },
  props: {
    blok: {
      type: Object,
      required: true
    },
  },
  mounted() {
      if(this.blok.type === 'projects') {
        if(this.$store.state.variants.variant === 'IXD') {
          this.posts = this.$store.state.projects.projectsIXD.filter(p => p.full_slug !== 'projecten/');
        }

        if(this.$store.state.variants.variant === 'UXD') {
          this.posts = this.$store.state.projects.projectsUXD.filter(p => p.full_slug !== 'uxd/projects/');
        }
      }

      if(this.blok.type === 'stories') {
        if(this.$store.state.variants.variant === 'IXD') {
          this.posts = this.$store.state.stories.storiesIXD.filter(p => p.full_slug !== 'verhalen/');
        }
        
        if(this.$store.state.variants.variant === 'UXD') {
          this.posts = this.$store.state.stories.storiesUXD.filter(p => p.full_slug !== 'uxd/stories/');
        }
      }
  },
  methods: {
    change() {
      this.loadMore = true;
    }
  },
  computed: {
    showedPosts() {
      if(!this.loadMore) {
        return this.posts.slice(0, this.size);
      } else {
        return this.posts;
      }
    },
  }
};
</script>
