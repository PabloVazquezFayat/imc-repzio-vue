<template>
  <div class="page-details-banner">
    <div class="page-details-banner__container layout-container">
      <div class="page-details-banner__content">
        <h2>{{ text }}</h2>
        <div class="page-details-banner__message" v-html="Message"></div>
        <span>selected by : {{ `${FirstName || ""} ${LastName || ""}` }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageDetailsbanner",
  props: {
    text: String,
    data: Object,
  },
  data() {
    const {
      Message,
      SalesRep: { FirstName, LastName },
    } = this.data;
    return {
      Message,
      FirstName,
      LastName,
    };
  },
};
</script>

<style scoped>
.page-details-banner {
  background-color: var(--RepzioYellow);
  width: 100%;
  height: 100px;
  padding: 50px 0px;
  display: flex;
  justify-content: center;
}

.page-details-banner__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-details-banner__content > h2 {
  font-size: 30px;
  color: #fff;
}

.page-details-banner__content > span {
  color: #535353;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 400;
}

.page-details-banner__message p {
  margin: 10px 0px;
  line-height: 15px;
}
</style>