<template>
  <div>
    <Header v-if="isPopupShown" />
    <Nuxt />
    <Footer v-if="isPopupShown" />
  </div>
</template>
<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.variants.variant === 'IXD' ? 'nl-Nl' : 'en-GB',
        // class: this.$cookies.get('darkmode') ? 'dark' : ''
      }
    }
  },
  mounted() {
    const HTML = document.querySelector('html');
    console.log('darkmode:', this.$cookies.get('darkmode'));

    if(this.$cookies.get('darkmode') === undefined) {
      this.$cookies.set('darkmode', false); 
    }

    if(this.$cookies.get('darkmode') === true) {
      HTML.classList.add('dark');
    }
    
    if(this.$cookies.get('darkmode') === false) {
      HTML.classList.remove('dark');
    }
  },
  computed: {
    isPopupShown() {
      return this.$store.state.popups.popup;
    }
  }
};
</script>