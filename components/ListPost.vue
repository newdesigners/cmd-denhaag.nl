<template>
  <div class="container list-post__container" v-editable="blok">
    <ul class="list-post__list">
      <li
        v-for="article in showedPosts"
        :key="article._uid"
        class="feature-post__item"
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
        this.posts = this.$store.state.projects.projects.filter(p => p.full_slug !== 'projecten/');
      }

      if(this.blok.type === 'stories') {
        this.posts = this.$store.state.stories.stories.filter(p => p.full_slug !== 'verhalen/')
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

<style>
</style>