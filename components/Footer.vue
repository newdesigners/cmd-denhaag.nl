<template>
  <footer class="footer">
    <section class="container footer__container">
      <div class="footer__column footer__subscription">
        <h3 class="footer__title">Schrijf je in</h3>
        <a href="#" target="_blank" class="footer__link">
          <span class="footer__link-text">CMD-IxD</span>
          <Resources type="share" classes="footer__link-icon" />
        </a>
        <a href="#" target="_blank" class="footer__link">
          <span class="footer__link-text">CMD-IxD</span>
          <Resources type="share" classes="footer__link-icon" />
        </a>
      </div>
      <div class="footer__column footer__menu">
        <h3 class="footer__title">Menu</h3>
        <ul class="footer__menu-list">
          <div class="footer__menu-container">
            <li class="footer__menu-item"><NuxtLink to="/over-cmd-ixd" class="link footer__link">Over CMD-IxD</NuxtLink></li>
            <li class="footer__menu-item"><NuxtLink to="/toekomst" class="link footer__link">Toekomst</NuxtLink></li>
            <li class="footer__menu-item"><NuxtLink to="/projecten" class="link footer__link">Projecten</NuxtLink></li>
            <li class="footer__menu-item"><NuxtLink to="/verhalen" class="link footer__link">Verhalen</NuxtLink></li>
          </div>
          <div class="footer__menu-container">
            <li class="footer__menu-item"><NuxtLink to="/campus" class="link footer__link">Campus</NuxtLink></li>
            <li class="footer__menu-item"><NuxtLink to="/voor-bedrijven" class="link footer__link">Voor bedrijven</NuxtLink></li>
            <li class="footer__menu-item"><NuxtLink to="/huidige-studenten" class="link footer__link">Huidige studenten</NuxtLink></li>
            <li class="footer__menu-item"><NuxtLink to="/" class="link footer__link"><span class="language">CMD-IxD</span> | <span class="language">CMD-UXD</span></NuxtLink></li>
          </div>
        </ul>
      </div>
      <div class="footer__column footer__social">
        <h3 class="footer__title">Social media</h3>
        <a href="https://www.instagram.com/dehaagsecmd/" rel="noopener noreferrer" target="_blank" class="footer__social-link">
          <figure class="footer__social-icon">
            <img src="~/assets/images/icons/instagram.png" alt="instagram logo" class="footer__social-icon-src"/>
          </figure>
          <figcaption class="footer__link">@dehaagsecmd</figcaption>
        </a>
        <a href="https://www.linkedin.com/company/cmd-hhs/" rel="noopener noreferrer" target="_blank" class="footer__social-link">
          <figure class="footer__social-icon">
            <img src="~/assets/images/icons/linkedin.png" alt="linkedin logo" class="footer__social-icon-src"/>
          </figure>
          <figcaption class="footer__link">/cmd-hhs</figcaption>
        </a>
        <a href="https://www.facebook.com/CMDHHS/" rel="noopener noreferrer" target="_blank" class="footer__social-link">
          <figure class="footer__social-icon">
            <img src="~/assets/images/icons/facebook.png" alt="facebook logo" class="footer__social-icon-src"/>
          </figure>
          <figcaption class="footer__link">/CMDHHS</figcaption>
        </a>
      </div>
      <aside class="footer__pointer" @click="scrollToTop">
        <figure class="footer__pointer-figure">
          <Resources type="hand-point-up" classes="footer__pointer-src" />
        </figure>
      </aside>
    </section>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
</style>