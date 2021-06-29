export const state = () => ({
  projects: [],
  loaded: '0',
})
 
export const mutations = {
  setProjects(state, entries) {
    state.projects = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
}