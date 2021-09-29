<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.variants.variant === 'IXD' ? 'nl-Nl' : 'en-GB',
        class: this.$cookies.get('darkmode') ? 'dark' : ''
      }
    }
  },
  mounted() {
    console.log(this.$cookies.get('darkmode'));
    if(this.$cookies.get('darkmode') == undefined) {
      this.$cookies.set('darkmode', false);
      
    }
  }
};
</script>