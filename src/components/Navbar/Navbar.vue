<template>
  <div class="navbar">
    <div class="navbar__container layout-container">
      <div class="navbar__logo-container">
        <router-link :to="{ name: 'ProductGallery' }">
          <Logo :src="src" :alt="alt" />
        </router-link>
      </div>
      <div class="navbar__navigation-container">
        <router-link class="navbar__navigation__button" to="#"
          >account</router-link
        >
        <router-link class="navbar__navigation__button" to="#"
          >cart</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../Logo/Logo.vue";

export default {
  name: "Navbar",
  props: {
    data: Object,
  },
  components: {
    Logo,
  },
  data() {
    const { ManufacturerID, CompanyName } = this.data;

    return {
      src: `http://images.repzio.com/productimages/${ManufacturerID}/logo${ManufacturerID}_lg.jpg?width=85&scale=both`,
      alt: CompanyName,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #ffffff;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #f1f1f1;
}

.navbar__container {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__navigation-container {
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

.navbar__navigation__button {
  color: #000;
  height: 20px;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin: 50px 10px 0px 10px;
  transition: 0.1s;
}

.navbar__navigation__button:hover {
  color: var(--RepzioYellow);
  border-bottom: solid 3px var(--RepzioYellow);
}
</style>