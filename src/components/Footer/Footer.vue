<template>
  <div className="footer">
    <div className="footer__container layout-container">
      <div className="footer__container__content">
        <Logo :src="src" :alt="alt" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="footer__container__content">
        <ContactCard v-if="salesRep" :salesRep="salesRep" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../Logo/Logo.vue";
import ContactCard from "../ContactCard/ContactCard.vue";

export default {
  name: "Footer",
  props: {
    data: Object,
  },
  components: {
    Logo,
    ContactCard,
  },
  data() {
    const { ManufacturerID, CompanyName, SalesRep } = this.data;

    return {
      src: `http://images.repzio.com/productimages/${ManufacturerID}/logo${ManufacturerID}_lg.jpg?width=85&scale=both`,
      alt: CompanyName,
      salesRep: SalesRep,
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #fff; /*#fac821;*/
  width: 100%;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 1px #f1f1f1;
}

.footer__container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer__container__content {
  width: 350px;
}

.footer__container__content:nth-of-type(2) {
  display: flex;
  justify-content: flex-end;
}

@media only screen and (max-width: 999px) {
  .footer__container__content:nth-of-type(1) > p {
    width: 70%;
  }

  .footer__container__content:nth-of-type(1),
  .footer__container__content:nth-of-type(2) {
    width: 100%;
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 768px) {
  .footer__container__content:nth-of-type(1) > p {
    width: 100%;
  }
}
</style>