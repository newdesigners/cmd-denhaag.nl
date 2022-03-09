export const state = () => ({
  popup: true,
})
 
export const mutations = {
  setPopup(state, entries) {
    state.popup = entries;
  }
}