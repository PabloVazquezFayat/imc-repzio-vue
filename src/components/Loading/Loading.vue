<template>
  <div class="loading">
    <div class="loading-text">Loading</div>
    <div class="loading-graphic"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.loading {
  background-color: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-text {
  position: absolute;
  font-weight: 400;
  color: var(--RepzioYellow);
}

.loading-graphic {
  display: inline-block;
  width: 130px;
  height: 127px;
}

.loading-graphic:after {
  content: " ";
  display: block;
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: var(--RepzioYellow) transparent var(--RepzioYellow) transparent;
  animation: loading-graphic 1.2s linear infinite;
}

@keyframes loading-graphic {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>