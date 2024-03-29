<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__column footer__subscription">
        <h3 class="footer__title" v-if="footer">{{ footer.title }}</h3>
        <ul class="footer__links" v-if="footer">
          <li v-for="link in footer.links" :key="link.id">
            <a :href="link.link.cached_url" rel="noopener noreferrer" target="_blank" class="footer__link">
              <span class="footer__link-text">{{ link.link_text }}</span>
              <Resources type="share" classes="footer__link-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__column footer__menu">
        <h3 class="footer__title">Menu</h3>
        <div class="footer__menu-list">
          <ul class="footer__menu-container">
            <li class="footer__menu-item" v-for="item in columnTwo" :key="item.text"><NuxtLink :to="item.link" class="link footer__link">{{ item.text }}</NuxtLink></li>
          </ul>
          <ul class="footer__menu-container">
            <li class="footer__menu-item" v-for="item in columnThree" :key="item.text"><NuxtLink :to="item.link" class="link footer__link">{{ item.text }}</NuxtLink></li>
            <li class="footer__menu-item footer__menu-item--language">
              <NuxtLink to="/" class="link footer__link" :class="{'footer__link--active': variant === 'IXD' }" @click.native="setVariant('IXD')">
                <span class="language">CMD (Nederlands)</span>
              </NuxtLink>
              <span class="footer__menu-divider">|</span>
              <NuxtLink to="/uxd" class="link footer__link" :class="{'footer__link--active': variant === 'UXD' }" @click.native="setVariant('UXD')">
                <span class="language">UXD (English)</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__column footer__social" v-if="footer">
        <h3 class="footer__title">Social media</h3>
        <a v-if="footer.instagram_link && footer.instagram_link_text" :href="footer.instagram_link" rel="noopener noreferrer" target="_blank" class="footer__social-link">
          <figure class="footer__social-icon">
            <img src="~/assets/images/icons/instagram.png" alt="instagram logo" class="footer__social-icon-src"/>
          </figure>
          <figcaption class="footer__link">{{ footer.instagram_link_text }}</figcaption>
        </a>
        <a v-if="footer.linkedin_link && footer.linkedin_link_text" :href="footer.linkedin_link" rel="noopener noreferrer" target="_blank" class="footer__social-link">
          <figure class="footer__social-icon">
            <img src="~/assets/images/icons/linkedin.png" alt="linkedin logo" class="footer__social-icon-src"/>
          </figure>
          <figcaption class="footer__link">{{ footer.linkedin_link_text }}</figcaption>
        </a>
        <a v-if="footer.facebook_link && footer.facebook_link_text" :href="footer.facebook_link" rel="noopener noreferrer" target="_blank" class="footer__social-link">
          <figure class="footer__social-icon">
            <img src="~/assets/images/icons/facebook.png" alt="Facebook logo" class="footer__social-icon-src"/>
          </figure>
          <figcaption class="footer__link">{{ footer.facebook_link_text }}</figcaption>
        </a>
        <a v-if="footer.tiktok_link && footer.tiktok_link_text" :href="footer.tiktok_link" rel="noopener noreferrer" target="_blank" class="footer__social-link">
          <figure class="footer__social-icon">
            <img src="~/assets/images/icons/tiktok.png" alt="TikTok logo" class="footer__social-icon-src"/>
          </figure>
          <figcaption class="footer__link">{{ footer.tiktok_link_text }}</figcaption>
        </a>
      </div>
      <aside class="footer__pointer" @click="scrollToTop">
        <figure class="footer__pointer-figure">
          <Resources type="hand-point-up" classes="footer__pointer-src dark:hidden" />
          <Resources type="hand-point-up-dark" classes="footer__pointer-src hidden dark:block" />
        </figure>
      </aside>
    </div>
    <figure class="container footer__logo">
      <Resources v-if="this.$store.state.variants.variant === 'IXD'" type="hhs-logo-nl" classes="footer__logo-src" />
      <Resources v-if="this.$store.state.variants.variant === 'UXD'" type="hhs-logo-en" classes="footer__logo-src" />
    </figure>
  </footer>
</template>

<script>
export default {
  async fetch() {
    const version = process.env.NODE_ENV !== 'production' ? 'draft' : 'published';
    //Loading reference data - Stories in our case
    if(this.$store.state.footer.loaded !== '1') {
      let footerIXDRefRes = await this.$storyapi.get(`cdn/stories/`, { starts_with: 'footer', version: version });
      let footerUXDRefRes = await this.$storyapi.get(`cdn/stories/`, { starts_with: 'uxd/footer', version: version });

      this.$store.commit('footer/setFooterIXD', footerIXDRefRes.data.stories[0]);
      this.$store.commit('footer/setFooterUXD', footerUXDRefRes.data.stories[0]);
      this.$store.commit('footer/setLoaded', '1');
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    setVariant(v) {
      this.$store.commit('variants/setVariant', v);
    }
  },
  computed: {
    variant() {
      return this.$store.state.variants.variant;
    },
    footer() {
      if(this.$store.state.variants.variant === 'IXD') {
        return this.$store.state.footer.footerIXD.content;
      }

      if(this.$store.state.variants.variant === 'UXD') {
        return this.$store.state.footer.footerUXD.content;
      }
    },
    columnTwo() {
      if(this.$store.state.variants.variant === 'IXD') {
        return [
          { link: "/over-cmd", text: "Over CMD" },
          { link: "/toekomst", text: "Toekomst" },
          { link: "/projecten", text: "Projecten" },
          { link: "/verhalen", text: "Verhalen" },
        ]
      }

      if(this.$store.state.variants.variant === 'UXD') {
        return [
          { link: "/uxd/about-uxd", text: "About UXD" },
          { link: "/uxd/future", text: "Future" },
          { link: "/uxd/projects", text: "Projects" },
          { link: "/uxd/stories", text: "Stories" },
        ]
      }
    },
    columnThree() {
      if(this.$store.state.variants.variant === 'IXD') {
        return [
          { link: "/campus", text: "Campus"},
          { link: "/voor-bedrijven", text: "Voor bedrijven" },
          { link: "/huidige-studenten", text: "Huidige studenten" },
        ]
      }

      if(this.$store.state.variants.variant === 'UXD') {
        return [
          { link: "/uxd/for-companies", text: "For companies" },
          { link: "/uxd/current-students", text: "Current students" },
          { link: "/uxd/campus", text: "Campus"},
        ]
      }
    },
  }
};
</script>