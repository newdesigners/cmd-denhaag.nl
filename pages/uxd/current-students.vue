<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    />
  </section>
</template>

<script>
import { createSEOMeta } from '~/assets/js/utils/seo';

export default {
  async fetch(context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published';

    if(context.store.state.stories.loaded !== '1') {
      let storiesRefResIXD = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'verhalen/', version: version });
      let storiesRefResUXD = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'uxd/stories/', version: version });

      context.store.commit('stories/setStoriesIXD', storiesRefResIXD.data.stories);
      context.store.commit('stories/setStoriesUXD', storiesRefResUXD.data.stories);
      context.store.commit('stories/setLoaded', '1');
    }

    if(context.store.state.projects.loaded !== '1') {

      let projectsRefResIXD = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'projecten/', version: version });
      let projectsRefResUXD = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'uxd/projects/', version: version });

      context.store.commit('projects/setProjectsIXD', projectsRefResIXD.data.stories);
      context.store.commit('projects/setProjectsUXD', projectsRefResUXD.data.stories);
      context.store.commit('projects/setLoaded', '1');
    }
  },
  data() {
    return {
      story: { content: {} }
    }
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge();
 
      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content);
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      })
 
      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
  asyncData(context) {
    // // This what would we do in real project
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published';
    // const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path
 
    // Load the JSON from the API - loadig the home content (index page)
    return context.app.$storyapi.get('cdn/stories/uxd/current-students', {
      version: version
    }).then((res) => {
      return res.data;
    }).catch((res) => {
      if (!res.response) {
        console.error(res);
        context.error({ statusCode: 404, message: 'Failed to receive content form api' });
      } else {
        console.error(res.response.data);
        context.error({ statusCode: res.response.status, message: res.response.data });
      }
    })
  },
  head() {
    const url = this.story.full_slug;
    const { title, description, og_image } = this.story.content.meta;

    return {
      title,
      meta: createSEOMeta({title, description, url, image: og_image.filename ? og_image.filename : 'https://a.storyblok.com/f/117396/1200x627/8beb321b38/meta-image.png' })
    }
  },
}
</script>

<style scoped>
  section {
    @apply pt-header lg:pt-40;
  }
</style>
