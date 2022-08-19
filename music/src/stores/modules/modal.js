const state = () => ({
  isOpen: false,
});

// getters
const getters = {
  hiddenClass(state) {
    return !state.isOpen ? 'hidden' : '';
  },
};

// actions
const actions = {
  setFalseAction({ commit }) {
    commit('setFalseMutation');
  },
};

// mutations
const mutations = {
  setFalseMutation(state) {
    state.isOpen = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
