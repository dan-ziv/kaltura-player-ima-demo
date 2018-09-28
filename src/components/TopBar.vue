<template>
  <el-row>
    <center>
      <h1>{{title}}</h1>
      <h4>{{description}}</h4>
      <el-row class="version">
        <el-tag>
          <a v-bind:href="playerRepoUrl" target="_blank">
            Kaltura Player v{{playerVersion}}
          </a>
        </el-tag>
        <el-tag>
          <a v-bind:href="imaRepoUrl" target="_blank">
            PlayKit IMA v{{imaVersion}}
          </a>
        </el-tag>
      </el-row>
    </center>
  </el-row>
</template>

<script>
export default {
  computed: {
    playerVersion() {
      return KalturaPlayer.VERSION;
    },
    imaVersion() {
      return KalturaPlayer.plugins.ima.VERSION;
    }
  },
  data() {
    return {
      title: 'Kaltura Player IMA Tester',
      description: 'PlayKit JS IMA plugin integrates Google IMA SDK for HTML5 with the Kaltura Player',
      playerRepoUrl: '//github.com/kaltura/kaltura-player-js',
      imaRepoUrl: '//github.com/kaltura/playkit-js-ima'
    };
  }
};
</script>

<style scoped>
h1 {
  color: dodgerblue;
  background-color: #f3f3f3;
  border-radius: 30px;
  margin-top: 5px;
}

h4 {
  color: #115fa4;
  background-color: #f0f0f075;
  border-radius: 30px;
}

p {
  color: #444;
  font-size: 0.9em;
  font-weight: 300;
  line-height: 1.6em;
}

.version {
  background-color: #fafafa;
  border-radius: 20px;
}
</style>
