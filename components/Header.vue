<template>
  <header ref="header" class="header">
    <div class="header__top">
      <div class="container">
        <ul class="header__list">
          <li class="header__item" @click="close">
            <NuxtLink to="voor-bedrijven" class="header__link">Voor bedrijven</NuxtLink>
          </li>
          <li class="header__item" @click="close">
            <NuxtLink to="voor-bedrijven" class="header__link">Huidige studenten</NuxtLink>
          </li>
          <li class="header__item" @click="close">
            <span class="header__link">CMD-IxD</span> | <span class="header__link">CMD-UXD</span>
          </li>
        </ul>
        <div class="header__dark">
          <Resources type="dark" classes="header__dark-src" />
        </div>
      </div>
    </div>
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <Resources type="logo" classes="header__logo-src" />
      </NuxtLink>
      <aside class="header__aside">
        <div class="header__dark">
          <Resources type="dark" classes="header__dark-src" />
        </div>
        <div class="header__menu">
          <Hamburger ref="hamburger" classes="header__menu-hamgbuger" />
        </div>
      </aside>
      <div class="header__navigation">
        <ul class="header__list">
          <li v-for="item in items" :key="item.text" class="header__item" @click="close">
            <NuxtLink :to="item.link" class="header__link">{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="header__navigation header__navigation--side">
        <ul class="header__list">
          <li class="header__item" @click="close">
            <NuxtLink to="voor-bedrijven" class="header__link">Voor bedrijven</NuxtLink>
          </li>
          <li class="header__item" @click="close">
            <NuxtLink to="voor-bedrijven" class="header__link">Huidige studenten</NuxtLink>
          </li>
          <li class="header__item" @click="close">
            <NuxtLink to="/" class="header__link">CMD-IxD</NuxtLink> | <NuxtLink to="/" class="header__link">CMD-UXD</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { link: "/over-cmd", text: "Over CMD-IxD" },
        { link: "/toekomst", text: "Toekomst" },
        { link: "/projecten", text: "Projecten" },
        { link: "/verhalen", text: "Verhalen" },
        { link: "/campus", text: "Campus"},
      ]
    };
  },
  methods: {
    close() {
      this.$refs.hamburger.onToggle(false);
    }
  },
};
</script>

<style>
</style>