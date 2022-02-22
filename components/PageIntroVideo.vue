<template>
  <div class="container page-intro__container" v-editable="blok">
    <h1 class="page-intro__title">{{ blok.title }}</h1>
    <div class="page-intro__copy">
      <p class="page-intro__paragraph post__content post__body">
        <rich-text-renderer v-if="blok.text_left" :document="blok.text_left" />
      </p>
      <p class="page-intro__paragraph post__content post__body">
        <rich-text-renderer v-if="blok.text_right" :document="blok.text_right" />
      </p>
    </div>
    <div class="page-intro__media page-intro__media--video">
      <figure class="page-intro__play" @click="open">
        <Resources type="play" classes="page-intro__play-src" />
      </figure>
      <figure class="page-intro__video" @click="open">
        <video class="page-intro__video-src" ref="video" v-if="blok.video" :src="blok.video.filename" preload="metadata"></video>
      </figure>
      <NuxtLink v-if="blok.link" :to="buttonUrl" class="page-intro__link">
        <figure class="page-intro__button">
          <img class="page-intro__button-src" v-if="blok.button" :src="blok.button.filename" :alt="blok.button.alt" />
        </figure> 
      </NuxtLink>
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
  },
  mounted() {
    let video = this.$refs.video;
    video.addEventListener(
      'fullscreenchange',
        function(event) {
            if (!document.fullscreenElement) {
              video.pause();
            }
        },
        false
    );
  },
  methods: {
    open() {
      let video = this.$refs.video;
      
      if(video.requestFullscreen) {
        video.requestFullscreen();
        video.play();
      } else if(video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
        video.play();
      } else if(video.msRequestFullscreen) {
        video.msRequestFullscreen();
        video.play();
      }
    },
  },
  computed: {
    buttonUrl() {
      if(this.blok.link.cached_url === 'uxd/home') {
        return 'uxd/';
      }

      if(this.blok.link.cached_url === 'home') {
        return '/';
      }
      return this.blok.link.cached_url;
    }
  }
};
</script>