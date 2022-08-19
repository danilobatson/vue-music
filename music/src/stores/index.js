import { createStore } from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import player from './modules/player';

export const store = createStore({
  modules: {
    player,
  },
  state,
  getters,
  actions,
  mutations,
});

export default store;
