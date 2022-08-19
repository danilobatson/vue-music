import { Howl } from 'howler';
import helper from '@/includes/helper';

const state = () => ({
  currentSong: {},
  sound: {},
  seek: '00:00',
  duration: '00:00',
  playerProgress: '0%',
});

// getters
const getters = {
  playing: (state) => {
    if (state.sound.playing) {
      return state.sound.playing();
    }
    return false;
  },
};
// actions
const actions = {
  async newSong({ commit }, song) {
    commit('newSong', song);
    commit('playSong');
    commit('progress');
  },
  async toggleAudio({ commit }) {
    commit('toggleAudio');
  },
};

// mutations
const mutations = {
  newSong(state, song) {
    if (state.sound instanceof Howl) {
      state.sound.unload();
    }

    state.currentSong = song;

    state.sound = new Howl({
      src: [song.url],
      html5: true, // Force to HTML5 so that the audio can stream in (best for large files).
    });
  },
  playSong(state) {
    state.sound.play();
    const progress = () => {
      state.seek = helper.formatTime(state.sound.seek());
      state.duration = helper.formatTime(state.sound.duration());

      state.playerProgress = `${
        (state.sound.seek() / state.sound.duration()) * 100
      }%`;

      if (state.sound.playing()) {
        requestAnimationFrame(progress);
      }
    };
    state.sound.on('play', () => {
      requestAnimationFrame(progress);
    });
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
