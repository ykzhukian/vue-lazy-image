import { PluginObject } from 'vue';
import lazyImage from './LazyImage.vue';

const plugin: PluginObject<any> = {
  install(Vue: any, options: object) {
    Vue.component(lazyImage.name, lazyImage);
  },
};

export default plugin;
