<template>
  <div>
    <Header v-show="isPopupShown" />
    <Nuxt />
    <Footer v-show="isPopupShown" />
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

    //Setting default values that is usually setted by popup
    if(this.$route.fullPath.startsWith('/uxd')) {
      console.log('this is english');
      this.$cookies.set('popup', true);
      this.$store.commit('variants/setVariant', 'UXD');
    } else {
      console.log('this is dutch');
      this.$cookies.set('popup', true);
      this.$store.commit('variants/setVariant', 'IXD');
    }
    console.log(this.$route.fullPath);

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