<template>
  <div id="app">
    <Navbar v-if="dbData" :data="dbData" />
    <router-view v-if="dbData" :data="dbData" />
    <Footer v-if="dbData" :data="dbData" />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      dbData: null,
    };
  },

  async created() {
    this.dbData = await this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const res = await axios.get("../../db/product-data.json");
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

:root {
  --Heading: "Roboto", sans-serif;
  --RepzioYellow: #fac821;
}

html,
body {
  margin: 0px;
  padding: 0px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--Heading);
  margin: 0px;
  padding: 0px;
  color: #000;
}

div,
span {
  font-family: var(--Heading);
  font-weight: 200;
  color: #777777;
}

p {
  font-family: var(--Heading);
  font-weight: 400;
  font-size: 14px;
  color: #777777;
  line-height: 22px;
}

a {
  font-family: var(--Heading);
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: deepskyblue;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  margin: 0px;
  padding: 0px;
}

.layout-container {
  width: 70%;
}
</style>
