<template>
  <div id="app">
    <el-container>
      <el-header height="150px">
        <TopBar></TopBar>
      </el-header>
      <el-container>
        <el-aside width="30%" ></el-aside>
        <el-main>
          <hr>
          <h3>Configuration</h3>
          <AdsConfiguration></AdsConfiguration>
          <hr>
          <h3>Player</h3>
          <PlayerPlaceholder></PlayerPlaceholder>
          <hr>
          <h3>Events</h3>
          <EventConsole></EventConsole>
          <hr>
          <h3>Companions</h3>
          <Companions></Companions>
        </el-main>
        <el-aside width="30%"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PlayerPlaceholder from './components/PlayerPlaceholder';
import TopBar from './components/TopBar';
import AdsConfiguration from './components/AdsConfiguration';
import {storeSetEntryId} from './store/mutations-helpers';
import {entries} from './data/entries';
import EventConsole from './components/EventConsole';
import Companions from './components/Companions';

export default {
  name: 'App',
  beforeCreate() {
    storeSetEntryId(entries[0].value);
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
