<template>
  <img :alt="alt" :title="title" ref="lazyImg" />
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

@Component
export default class LazyImage extends Vue {
  @Prop() private src!: string;
  @Prop() private alt!: string;
  @Prop() private title!: string;
  @Prop() private onload!: Function;

  isElementInViewport(el: Element) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  loadImage() {
    const { lazyImg } : any = this.$refs;
    if (this.isElementInViewport(lazyImg)) {
      lazyImg.src = this.src;
      lazyImg.onload = this.onload;
      document.removeEventListener('scroll', this.loadImage);
    }
  }

  mounted() {
    this.loadImage();
    document.addEventListener('scroll', this.loadImage);
  }

  beforeDestroy() {
    document.removeEventListener('scroll', this.loadImage);
  }
}
</script>
