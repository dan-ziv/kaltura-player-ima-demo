<template>
  <el-row>
    <el-row class="padding">
      <el-radio-group v-model="adInputType">
        <el-radio label="url">
          Ad Tag Url &nbsp; <span class="link" @click="onSampleClick()">(Sample)</span>
        </el-radio>
        <el-radio label="xml">Ads Response XML</el-radio>
      </el-radio-group>
    </el-row>
    <el-row class="padding">
      <el-input v-if="adInputType === 'url'"
                type="textarea"
                autosize
                :rows="3"
                placeholder="Insert VAST/VMAP ad tag URL"
                v-model="config.plugins.ima.adTagUrl">
      </el-input>
      <el-input v-if="adInputType === 'xml'"
                type="textarea"
                autosize
                :rows="2"
                :placeholder="sampleAdsResponse"
                v-model="config.plugins.ima.adsResponse">
      </el-input>
    </el-row>
    <el-row class="padding">
      <el-switch
        v-model="config.playback.muted"
        active-text="Muted">
      </el-switch>
    </el-row>
    <el-row class="padding">
      <el-switch
        v-model="config.playback.autoplay"
        active-text="Autoplay">
      </el-switch>
    </el-row>
    <el-row class="padding">
      <el-switch
      v-model="config.plugins.ima.adsRenderingSettings.enablePreloading"
      active-text="Preload ads">
      </el-switch>
    </el-row>
    <el-row class="padding">
      <center>
        <el-button type="primary" @click="onTestAdClick()">
          TEST AD
        </el-button>
      </center>
    </el-row>
  </el-row>
</template>

<script>
import {playerConfig} from '../data/player-config';

export default {
  props: ['player', 'mediaInfo'],
  methods: {
    onTestAdClick: function() {
      if (this.adInputType === 'url') {
        delete this.config.plugins.ima.adsResponse;
      } else {
        delete this.config.plugins.ima.adTagUrl;
      }
      this.player.configure(this.config);
      this.player.loadMedia(this.mediaInfo);
    },
    onSampleClick() {
      this.config.plugins.ima.adTagUrl = this.sampleAdTagUrl;
    }
  },
  data() {
    return {
      sampleAdTagUrl:
        'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator=[timestamp]',
      sampleAdsResponse: '<VAST>...</VAST>',
      adInputType: 'url',
      adInput: '',
      config: {
        plugins: playerConfig.plugins,
        playback: playerConfig.playback
      }
    };
  }
};
</script>

<style>
.link {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}
</style>
