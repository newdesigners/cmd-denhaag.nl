<template>
  <div class="container page-intro__container" v-editable="blok">
    <h1 class="page-intro__title">{{ blok.title }}</h1>
    <div class="page-intro__copy">
      <p class="page-intro__paragraph">{{ blok.text_left }}</p>
      <p class="page-intro__paragraph">{{ blok.text_right }}</p>
    </div>
    <div class="page-intro__media">
      <figure class="page-intro__play" @click="open">
        <Resources type="play" classes="page-intro__play-src" />
      </figure>
      <figure class="page-intro__video">
        <video class="page-intro__video-src" ref="video" v-if="blok.video" :src="blok.video.filename" preload="metadata"></video>
      </figure>
    <figure class="page-intro__button">
      <img class="page-intro__button-src" v-if="blok.button" :src="blok.button.filename" :alt="blok.button.alt" />
    </figure> 
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
  }
};
</script>

<style>
</style>