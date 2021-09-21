<template>
  <header ref="header" class="header" :class="{ 'header--open' : isActive }">
    <div class="header__top">
      <div class="container">
        <ul class="header__list" @click="onClose">
          <li class="header__item" v-for="item in sideRoutes" :key="item.text">
            <NuxtLink :to="item.link" class="header__link header__link--side">{{ item.text }}</NuxtLink>
          </li>
          <li class="header__item">
            <NuxtLink to="/" class="header__link header__link--side" :class="{'header__link--active': variant === 'IXD'}" @click.native="setVariant('IXD')">CMD (Nederlands)</NuxtLink> | <NuxtLink to="/uxd" class="header__link header__link--side" :class="{'header__link--active': variant === 'UXD'}" @click.native="setVariant('UXD')">UXD (English)</NuxtLink>
          </li>
        </ul>
        <div class="header__dark" @click="darkModeToggle">
          <Resources type="dark" classes="header__dark-src dark:hidden" />
          <Resources type="dark-dark" classes="header__dark-src hidden dark:block dark:transform dark:rotate-180" />
        </div>
      </div>
    </div>
    <div class="container header__container">
      <NuxtLink :to="homeRoutes" class="header__logo">
        <Resources type="logo" classes="header__logo-src dark:hidden" />
        <Resources type="logo-dark" classes="header__logo-src hidden dark:block" />
      </NuxtLink>
      <aside class="header__aside">
        <div class="header__dark" @click="darkModeToggle">
          <Resources type="dark" classes="header__dark-src dark:hidden" />
          <Resources type="dark-dark" classes="header__dark-src hidden dark:block dark:transform dark:rotate-180" />
        </div>
        <div class="header__menu">
          <div id="burger-wrapper" class="header__menu-hamgbuger flex justify-center items-center rounded-full pl-3 pb-5">
            <tasty-burger-button
              ref="hamburger"
              type="spin"
              :active="isActive"
              :color="color"
              :active-color="activeColor"
              :size="size"
              @toggle="onToggle"
            />
          </div>
        </div>
      </aside>
      <div class="header__navigation">
        <ul class="header__list" @click="onClose">
          <li v-for="item in mainRoutes" :key="item.text" class="header__item" >
            <NuxtLink :to="item.link" class="header__link">{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="header__navigation header__navigation--side">
        <ul class="header__list" @click="onClose">
          <li v-for="item in sideRoutes" :key="item.text" class="header__item">
            <NuxtLink :to="item.link" class="header__link header__link--side">{{ item.text }}</NuxtLink>
          </li>
          <li class="header__item">
            <NuxtLink to="/" class="header__link header__link--side" :class="{'header__link--active': variant === 'IXD'}" @click.native="setVariant('IXD')">CMD (Nederlands)</NuxtLink> | <NuxtLink to="/uxd" class="header__link header__link--side" :class="{'header__link--active': variant === 'UXD'}" @click.native="setVariant('UXD')">UXD (English)</NuxtLink>
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
      isActive: false,
      size: "xs",
      color: "#F2F2F2",
      activeColor: "#F2F2F2F2"
    };
  },
  methods: {
    onToggle(active) {
      this.isActive = active;
    },
    onClose() {
      this.isActive = false;
    },
    setVariant(v) {
      this.$store.commit('variants/setVariant', v);
    },
    darkModeToggle() {
      document.querySelector('html').classList.toggle('dark');
    }
  },
  computed: {
    variant() {
      return this.$store.state.variants.variant;
    },
    mainRoutes() {
      if(this.$store.state.variants.variant === 'IXD') {
        return [
          { link: "/over-cmd", text: "Over CMD" },
          { link: "/toekomst", text: "Toekomst" },
          { link: "/projecten", text: "Projecten" },
          { link: "/verhalen", text: "Verhalen" },
          { link: "/campus", text: "Campus"},
        ]
      }

      if(this.$store.state.variants.variant === 'UXD') {
        return [
          { link: "/uxd/about-uxd", text: "About UXD" },
          { link: "/uxd/future", text: "Future" },
          { link: "/uxd/projects", text: "Projects" },
          { link: "/uxd/stories", text: "Stories" },
          { link: "/uxd/campus", text: "Campus"},
        ]
      }
    },
    sideRoutes() {
      if(this.$store.state.variants.variant === 'IXD') {
        return [
          { link: "/voor-bedrijven", text: "Voor bedrijven" },
          { link: "/huidige-studenten", text: "Huidige studenten" },
        ]
      }

      if(this.$store.state.variants.variant === 'UXD') {
        return [
          { link: "/uxd/for-companies", text: "For companies" },
          { link: "/uxd/current-students", text: "Current students" },
        ]
      }
    },
    homeRoutes() {
      if(this.$store.state.variants.variant === 'IXD') {
        return '/';
      }

      if(this.$store.state.variants.variant === 'UXD') {
        return '/uxd';
      }

      return '/';
    }
  }
};
</script>

<style>
</style>