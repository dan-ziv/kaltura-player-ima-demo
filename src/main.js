import Vue from 'vue';
import App from './App';
import Element from 'element-ui';
import store from './store/index';
import WebFont from 'webfontloader';

Vue.use(Element);
Vue.config.productionTip = false;

WebFont.load({
  google: {
    families: ['Barlow']
  }
});

new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
});
