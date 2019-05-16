<template>
  <div>
    <img :src="src" :alt="alt" @click="changeValue" />
    {{childValue}}
    <child-text :value="childValue" :test="childValue"></child-text>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Provide,
} from 'vue-property-decorator';
import ChildText from './ChildText.vue';

@Component({
  components: {
    ChildText,
  },
})
export default class LazyImage extends Vue {
  @Prop() private src!: string;

  @Prop() private alt!: string;

  childValue: string = 'upupupup';

  private name: string = 'lazy-image';

  changeValue() {
    this.childValue = 'xxx';
  }
}
</script>
