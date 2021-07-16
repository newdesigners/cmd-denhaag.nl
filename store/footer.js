export const state = () => ({
  footerIXD: [],
  footerUXD: [], 
  loaded: '0',
})
 
export const mutations = {
  setFooterIXD(state, entries) {
    state.footerIXD = entries;
  },
  setFooterUXD(state, entries) {
    state.footerUXD = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
}