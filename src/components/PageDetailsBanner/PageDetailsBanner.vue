<template>
  <div class="page-details-banner">
    <div class="page-details-banner__container layout-container">
      <div class="page-details-banner__content">
        <h2>{{ text }}</h2>
        <div
          class="page-details-banner__message"
          v-if="message"
          v-html="message"
        ></div>
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
    salesRep: Object,
    message: null,
  },
  data() {
    const { FirstName, LastName } = this.salesRep;
    return {
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
  margin: 5px 0px !important;
  line-height: 15px;
}
</style>