const state = () => ({
  currentSong: {},
});

// getters
const getters = {};

// actions
const actions = {
  async newSong({ commit }, song) {
    commit('newSong', song);
  },
};

// mutations
const mutations = {
  newSong(state, song) {
    state.currentSong = song;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
