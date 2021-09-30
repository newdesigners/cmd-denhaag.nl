export const state = () => ({
  popup: false,
})
 
export const mutations = {
  setPopup(state, entries) {
    state.popup = entries;
  }
}