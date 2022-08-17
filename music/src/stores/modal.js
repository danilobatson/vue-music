import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      isOpen: false,
    };
  },
  mutations: {
    setFalseMutation(state) {
      state.isOpen = false;
    },
  },
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? 'hidden' : '';
    },
  },
  actions: {
    setFalseAction({ commit }) {
      commit('setFalseMutation');
    },
  },
});

export default store;
