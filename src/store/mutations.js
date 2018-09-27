import * as types from './mutation-types';

export default {
  [types.SET_PLAYER](state, player) {
    state.player = player;
  },
  [types.SET_ENTRY_ID](state, entryId) {
    state.entryId = entryId;
  }
};
