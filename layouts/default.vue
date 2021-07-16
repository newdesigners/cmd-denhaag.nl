<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  mounted() {
    if(this.$route.fullPath.substring(1).split('/')[0] === 'uxd') {
      console.log('UXD');
      this.$store.commit('variants/setVariant', 'UXD');
    } else {
      console.log('IXD');
      this.$store.commit('variants/setVariant', 'IXD');
    }
  }
};
</script>
<style>
</style>
