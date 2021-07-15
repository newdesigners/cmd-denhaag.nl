export const state = () => ({
  variant: '',
})
 
export const mutations = {
  setVariant(state, entries) {
    state.variant = entries;
  }
}