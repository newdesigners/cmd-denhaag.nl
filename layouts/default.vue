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
    console.log('tt');
    console.log(this.$route.fullPath.substring(1).split('/'));
  }
};
</script>
<style>
</style>
