<template>
  <div id="app">
    <el-container>
      <el-header height="150px">
        <TopBar></TopBar>
      </el-header>
      <el-main>
        <el-col :span="7">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="10">
          <hr>
          <h3>Configuration</h3>
          <AdsConfiguration :player="player" :mediaInfo="mediaInfo"></AdsConfiguration>
          <hr>
          <h3>Player</h3>
          <PlayerPlaceholder :targetId="targetId"></PlayerPlaceholder>
          <hr>
          <h3>Events</h3>
          <EventConsole :player="player"></EventConsole>
          <hr>
          <h3>Companions</h3>
          <Companions></Companions>
        </el-col>
        <el-col :span="7">
          <div class="grid-content"></div>
        </el-col>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import PlayerPlaceholder from './components/PlayerPlaceholder';
import TopBar from './components/TopBar';
import AdsConfiguration from './components/AdsConfiguration';
import {entries} from './data/entries';
import EventConsole from './components/EventConsole';
import Companions from './components/Companions';
import {playerConfig} from './data/player-config';

export default {
  name: 'App',
  created() {
    this.targetId = playerConfig.targetId;
    this.mediaInfo = {entryId: entries[0].value};
    this.player = __kalturaplayer = KalturaPlayer.setup(playerConfig);
    this.player.loadMedia(this.mediaInfo);
  },
  components: {
    EventConsole,
    AdsConfiguration,
    TopBar,
    PlayerPlaceholder,
    Companions
  }
};
</script>

<style>
#app {
  font-family: 'Barlow', serif;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.padding {
  padding-top: 5px;
  padding-left: 5px;
  margin-bottom: 5px;
}
</style>
