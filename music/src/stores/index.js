import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import player from './modules/player';
import modal from './modules/modal';

export const store = createStore({
  modules: {
    player,
    modal,
  },
  state,
  actions,
  mutations,
});

export default store;
