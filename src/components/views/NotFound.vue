<template>
  <div class="not-found">
    <div class="not-found__container layout-container">
      <h1>404</h1>
      <h4>something went wrong</h4>
      <router-link class="not-found__button" to="/"> Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  width: 100%;
  min-height: 700px;
  display: flex;
  justify-content: center;
}

.not-found__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found__container > h1 {
  font-size: 258px;
  text-align: center;
}

.not-found__container > h4 {
  font-size: 41px;
  font-weight: 400;
  text-align: center;
}

.not-found__container > h4::first-letter {
  text-transform: capitalize;
}

.not-found__button {
  padding: 15px 35px;
  margin: 50px 0px 0px;
  text-align: center;
  border: solid 2px var(--RepzioYellow);
  color: var(--RepzioYellow);
  font-weight: 400;
  transition: 0.5s;
}

.not-found__button:hover {
  background-color: var(--RepzioYellow);
  color: #fff;
}

@media only screen and (max-width: 414px) {
  .not-found__container > h1 {
    font-size: 158px;
  }

  .not-found__container > h4 {
    font-size: 26px;
  }
}
</style>