<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div style="height:1000px;"></div>
    <lazy-image src="https://via.placeholder.com/150" alt="image alt" />
    <div style="height:1000px;"></div>
    <lazy-image src="https://via.placeholder.com/150" alt="image alt" />
    <div style="height:1000px;"></div>
    <lazy-image src="https://via.placeholder.com/150" alt="image alt" />
    <div style="height:1000px;"></div>
    <lazy-image src="https://via.placeholder.com/150" alt="image alt" />
    <div style="height:1000px;"></div>
    <lazy-image src="https://via.placeholder.com/150" alt="image alt" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  mounted() {
    console.log('hello mounted');
  }
}
</script>
