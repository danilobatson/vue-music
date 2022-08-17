import { createStore } from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export const store = createStore({
  state,
  getters,
  actions,
  mutations,
});

export default store;
