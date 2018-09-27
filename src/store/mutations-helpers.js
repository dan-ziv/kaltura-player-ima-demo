import * as types from './mutation-types';
import store from './index';

export const storeSetPlayer = player => {
  _kalturaplayer = player;
  store.commit(types.SET_PLAYER, player);
};

export const storeSetEntryId = entryId => {
  store.commit(types.SET_ENTRY_ID, entryId);
};
