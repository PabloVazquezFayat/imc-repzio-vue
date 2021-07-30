<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  name: "Logo",
  props: {
    src: String,
    alt: String,
  },
};
</script>

<style scoped>
</style>