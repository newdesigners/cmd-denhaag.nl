<template>
  <div class="container testimonial__container" v-editable="blok">
    <article class="testimonial__copy" v-if="blok.title && blok.description">
      <h2 class="testimonial__title">{{ blok.title }}</h2>
      <p class="testimonial__description">{{ blok.description }}</p>
    </article>
    <ul class="testimonial__list">
      <li class="testimonial__item" v-for="quote in blok.testimonials" :key="quote._uid">
        <figure class="testimonial__figure">
          <img v-if="quote.image" :src="quote.image.filename" :alt="quote.image.alt" class="testimonial__image" />
        </figure>
        <h3 class="testimonial__name">{{ quote.name }}</h3>
        <h4 class="testimonial__name-title">{{ quote.title }}</h4>
        <p class="testimonial__quote">{{ quote.quote }}</p>
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
  }
};
</script>