import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import state from './state';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,

  state,
  getters,
  mutations,
  actions
});
