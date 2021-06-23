export const state = () => ({
  stories: [],
  loaded: '0',
})
 
export const mutations = {
  setStories (state, entries) {
    state.stories = entries;
  },
  setLoaded (state, loaded) {
    state.loaded = loaded;
  }
}