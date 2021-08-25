export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit, state, dispatch }, { app, store, route, req, res, error, redirect }) {
    app.$cookies.set('popup', false);
  }
}