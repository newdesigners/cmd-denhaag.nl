<template>
  <client-only>
    <div class="popup" :class="{ hidden: isSelected }" v-if="this.$cookies.get('popup') === false || this.$cookies.get('popup') == undefined">
      <div class="container popup__container">
        <h2 class="popup__title">Choose which programme you’re interested in</h2>
        <div class="popup__select">
          <div class="popup__option" @click="setupIXD">
            <div class="popup__copy">
              <h3 class="popup__option-title">Communication & Multimedia Design</h3>
              <p class="popup__option-description">Communication & Multimedia Design (CMD) is a <b>4 year</b> programme taught in <b>Dutch</b>.</p>
            </div>
          </div>
          <div class="popup__option popup__option--right" @click="setupUXD">
            <div class="popup__copy">
              <h3 class="popup__option-title">User Experience Design</h3>
              <p class="popup__option-description">Communication & Multimedia Design - User Experience Design (UXD or CMD - UXD) is a <b>3 year</b> programme taught in <b>English</b>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>  
</template>
 
<script>
export default {
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    setupIXD() {
      this.isSelected = true;
      this.$cookies.set('popup', true);
      this.$store.commit('variants/setVariant', 'IXD');
      this.$router.push('/');
    },
    setupUXD() {
      this.isSelected = true;
      this.$cookies.set('popup', true);
      this.$store.commit('variants/setVariant', 'UXD');
      this.$router.push('/uxd');
    }
  }
};
</script>