<template>
  <section id="image-slider" class="image-slider" v-editable="blok">
    <div class="container">
      <h2 class="image-slider__title" v-if="blok.title">{{ blok.title }}</h2>
    </div>
		<div class="container image-slider__container" v-if="blok.slides.length > 0">
      <VueSlickCarousel ref="carousel" v-bind="slickOptions" @beforeChange="onBeforeChange">
        <div class="image-slider__item" v-for="slide in blok.slides" :key="slide.id">
          <div class="image-slider__item-wrapper" v-if="slide.image.filename">
            <figure class="image-slider__item-figure">
              <NuxtImg
                class="image-slider__item-image"
                width="1280"
                height="700"
                loading="lazy"
                sizes="sm:150vw md:100vw lg:100vw xl:100vw"
                :modifiers="{ smart: true }"
                provider="storyblok"
                :src="slide.image.filename"
                :alt="slide.image.alt"
              />
              <!-- <img v-if="slide.image" :src="slide.image.filename" :alt="slide.image.alt" class="image-slider__item-image" /> -->
            </figure>
          </div>
        </div>
        <template #customPaging="page">
          <div class="image-slider__dots-indicator"></div>
        </template>
      </VueSlickCarousel>
		</div>
    <div class="container">
      <h3 class="image-slider__description" v-if="blok.description">{{ blok.description }}</h3>
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
        dotsClass: 'image-slider__dots',
				infinite: true,
				adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        lazyLoad: 'progressive',
      },
			current: 0,
    }
  },
	props: {
    blok: {
      type: Object,
      required: true
    }
  },
	methods: {
		onBeforeChange(o, n) {
			this.current = n;
		},
	}
};
</script>