<template>
  <div>
    <Header v-if="this.$cookies.get('popup')" />
    <Nuxt />
    <Footer v-if="this.$cookies.get('popup')" />
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
  }
};
</script>