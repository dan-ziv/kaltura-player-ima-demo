import Vue from 'vue';
import App from './App';
import Element from 'element-ui';
import WebFont from 'webfontloader';
import {playerConfig} from './data/player-config';

Vue.use(Element);
Vue.config.productionTip = false;

WebFont.load({
  google: {
    families: ['Barlow']
  }
});

const playerContainer = document.createElement('div');
playerContainer.id = playerConfig.targetId;
document.body.appendChild(playerContainer);

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
});
