import Vue from 'vue';
import App from './App.vue';
import lazyImage from './plugin';

Vue.config.productionTip = false;
Vue.use(lazyImage);

new Vue({
  render: h => h(App),
}).$mount('#app');
