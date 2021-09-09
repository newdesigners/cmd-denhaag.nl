<template>
  <section class="error-page">
    <div class="container">
      <div v-if="error.statusCode === 404">
        <h1 class="error-page__title" v-if="error.statusCode === 404">404</h1>
        <div v-if="this.$store.state.variants.variant === 'IXD'">
          <h2 class="error-page__title-sub">Pagina niet gevonden</h2>
          <NuxtLink class="link" to="">Terug naar home pagina</NuxtLink>
        </div>
        <div v-if="this.$store.state.variants.variant === 'UXD'">
          <h2 class="error-page__title-sub">Page not found</h2>
          <NuxtLink class="link" to="/uxd">Back to home page</NuxtLink>
        </div>
      </div>
      <div v-else>
        <div v-if="this.$store.state.variants.variant === 'IXD'">
          <h1 class="error-page__title">Er is een fout opgetreden</h1>
          <h2 class="error-page__title-sub">Neem contact met een beheerder</h2>
          <a class="link" href="mailto:newdesigners@hhs.nl">Stuur een berichtje naar CMD Den Haag</a>
        </div>
        <div v-if="this.$store.state.variants.variant === 'UXD'">
          <h1 class="error-page__title">An error occurred</h1>
          <h2 class="error-page__title-sub">Contact an administrator</h2>
          <a class="link" href="mailto:newdesigners@hhs.nl">Send a message to CMD The Hague</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>

<style>
</style>