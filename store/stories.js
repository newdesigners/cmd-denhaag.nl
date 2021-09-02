export const state = () => ({
  storiesIXD: [],
  storiesUXD: [],
  loaded: '0',
})
 
export const mutations = {
  setStoriesIXD(state, entries) {
    state.storiesIXD = entries;
  },
  setStoriesUXD(state, entries) {
    state.storiesUXD = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
}