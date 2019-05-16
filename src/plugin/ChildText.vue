<template>
  <div>
    <deep-child-text :value="value"></deep-child-text>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DeepChildText from './DeepChildText.vue';

@Component({
  inheritAttrs: false,
  components: {
    DeepChildText,
  },
})
export default class ChildText extends Vue {
  @Prop() value!: string;
}
</script>
