const state = () => ({
  currentSong: {},
});

// getters
const getters = {};

// actions
const actions = {
  async newSong({ commit }, song) {
    console.log('action hit');
    commit('newSong', song);
  },
};

// mutations
const mutations = {
  newSong(state, song) {
    console.log('mutation hit');
    state.currentSong = song;
    console.log(state.currentSong);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
