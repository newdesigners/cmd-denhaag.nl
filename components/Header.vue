<template>
  <header ref="header" class="header">
    <div class="container flex justify-between items-center flex-wrap h-full">
      <NuxtLink to="/" class="header__logo">
        <Resources type="logo" classes="header__logo-src" />
      </NuxtLink>
      <div class="header__dark-toggle">
        
      </div>
      <div class="header__menu">
        <Hamburger ref="hamburger" classes="header__menu-hamgbuger" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { link: "/", text: "Home" },
        { link: "/dienstverlening", text: "Dienstverlening" },
        { link: "/ons-verhaal", text: "Ons verhaal" },
        { link: "/cases", text: "Cases" },
        { link: "/vacatures", text: "Vacatures" },
        { link: "/contact", text: "Contact", button: true },
      ]
    };
  },
  methods: {
    click() {
      if(this.$refs.hamburger.isActive) {
        this.$refs.hamburger.onMenu(false);
      } else {
        this.$refs.hamburger.onMenu(true);
      }
    },
    close() {
      this.$refs.hamburger.onToggle(false);
    }
  },
};
</script>

<style>
</style>