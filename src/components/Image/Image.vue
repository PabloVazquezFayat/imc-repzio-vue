<template>
  <img :srcSet="imageSrc" :alt="alt" />
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
    alt: String,
  },
  data() {
    const srcs = {
      small: `${this.src}?width=200&height=200&scale=both&crop=11,11,-11,-11`,
      medium: `${this.src}?width=300&height=300&scale=both&crop=11,11,-11,-11`,
      large: `${this.src}?width=400&height=400&scale=both&crop=11,11,-11,-11`,
      xlarge: `${this.src}?width=600&height=600&scale=both&crop=11,11,-11,-11`,
    };
    return {
      imageSrc: `${srcs.small} 300w, ${srcs.medium} 768w, ${srcs.large} 1280w, ${srcs.xlarge} 1920w`,
    };
  },
};
</script>

<style scoped>
</style>