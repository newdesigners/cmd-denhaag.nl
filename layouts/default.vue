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
        lang: this.$store.state.variants.variant === 'IXD' ? 'nl-Nl' : 'en-GB'
      }
    }
  }
};
</script>