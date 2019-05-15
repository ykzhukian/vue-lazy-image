import { PluginObject } from 'vue';
import lazyImage from './LazyImage.vue';

const plugin: PluginObject<any> = {
  install(Vue: any, options: object) {
    Vue.prototype.$msg = 'Hello I am plugin.js';
    Vue.prototype.$myMethod = (arr: Array<string>) => {
      if (arr.length < 0) {
        return false;
      }
      return arr.join('连接你我');
    };
    Vue.component(lazyImage.name, lazyImage);
  },
};

export default plugin;
