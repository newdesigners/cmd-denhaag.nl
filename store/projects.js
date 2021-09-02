export const state = () => ({
  projectsIXD: [],
  projectsUXD: [],
  loaded: '0',
})
 
export const mutations = {
  setProjectsIXD(state, entries) {
    state.projectsIXD = entries;
  },
  setProjectsUXD(state, entries) {
    state.projectsUXD = entries;
  },
  setLoaded(state, loaded) {
    state.loaded = loaded;
  }
}