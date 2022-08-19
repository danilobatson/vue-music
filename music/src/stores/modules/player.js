import { Howl } from 'howler';

const state = () => ({
  currentSong: {},
  sound: {},
});

// getters
const getters = {};

// actions
const actions = {
  async newSong({ commit }, song) {
    commit('newSong', song);
    commit('playSong');
  },
  async toggleAudio({ commit }) {
    commit('toggleAudio');
  },
};

// mutations
const mutations = {
  newSong(state, song) {
    state.currentSong = song;

    state.sound = new Howl({
      src: [song.url],
      html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
    });
  },
  playSong(state) {
    state.sound.play();
  },
  toggleAudio(state) {
    if (!state.sound.playing) {
      return;
    }
    if (state.sound.playing()) {
      state.sound.pause();
    } else {
      state.sound.play();
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
