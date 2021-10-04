<template>
  <section id="image-slider-text" class="image-slider-text" v-editable="blok">
		<div class="container image-slider-text__container" v-if="blok.slides.length > 0">
      <VueSlickCarousel ref="carousel" v-bind="slickOptions">
        <template #customPaging="page">
          <div class="link image-slider-text__dots-indicator">{{ titles[page] }}</div>
        </template>
        <div class="image-slider-text__item" v-for="slide in blok.slides" :key="slide._uid">
          <div class="image-slider-text__item-copy">
            <div class="image-slider-text__description">{{ slide.description }}</div>
            <figure class="image-slider-text__illustration image-slider-text__illustration--top">
              <Resources type="hand-photo" classes="image-slider-text__illustration-svg" />
            </figure>
          </div>
          <div class="image-slider-text__item-wrapper">
            <figure class="image-slider-text__item-figure">
              <NuxtImg
                v-if="slide.image_left"
                class="page-intro__image-src"
                width="470"
                height="470"
                loading="lazy"
                :modifiers="{ smart: true }"
                provider="storyblok"
                :src="slide.image_left.filename"
                :alt="slide.image_left.alt"
              />
              <!-- <img v-if="slide.image_left" :src="slide.image_left.filename" :alt="slide.image_left.alt" class="image-slider-text__item-image" /> -->
            </figure>
            <figure class="image-slider-text__item-figure">
              <NuxtImg
                v-if="slide.image_right"
                class="page-intro__image-src"
                width="470"
                height="470"
                loading="lazy"
                :modifiers="{ smart: true }"
                provider="storyblok"
                :src="slide.image_right.filename"
                :alt="slide.image_right.alt"
              />
              <!-- <img v-if="slide.image_right" :src="slide.image_right.filename" :alt="slide.image_right.alt" class="image-slider-text__item-image" /> -->
            </figure>
          </div>
        </div>
      </VueSlickCarousel>
      <figure class="image-slider-text__illustration image-slider-text__illustration--bottom">
        <Resources type="hand-photo" classes="image-slider-text__illustration-svg" />
      </figure>
		</div>
  </section> 
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        dotsClass: 'image-slider-text__dots',
				infinite: true,
				adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: 'progressive',
        swipeToSlide: true,
      },
    }
  },
	props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    titles() {
      let titles = [];
      
      this.blok.slides.forEach(s => {
        titles.push(s.title);
      });

      return titles;
    }
  }
};
</script>