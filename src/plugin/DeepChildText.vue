<template>
  <div>{{value}}</div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component
export default class ChildText extends Vue {
  @Prop() value!: string;
}
</script>
