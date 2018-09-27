<template>
  <el-row>
    <div id="player-placeholder"></div>
  </el-row>
</template>

<script>
import {mapGetters} from 'vuex';
import {playerConfig} from '../data/player-config';
import {storeSetPlayer} from '../store/mutations-helpers';

export default {
  computed: {
    ...mapGetters(['player', 'entryId'])
  },
  mounted() {
    const player = KalturaPlayer.setup(playerConfig);
    const playerPlaceholder = document.getElementById('player-placeholder');
    addStyles(playerPlaceholder);
    storeSetPlayer(player);
    player.loadMedia({entryId: this.entryId});
  }
};

function addStyles(playerPlaceholder) {
  playerPlaceholder.style.margin = '10px 10px 10px 10px';
  playerPlaceholder.style.backgroundColor = 'white';
  playerPlaceholder.style.height = '360px';
  playerPlaceholder.style.width = '640px';
  playerPlaceholder.style.boxShadow = '2px 2px 8px 0px #88888885';
}
</script>
