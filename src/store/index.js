import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  player: null,
  entryId: ''
};

const store = new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
