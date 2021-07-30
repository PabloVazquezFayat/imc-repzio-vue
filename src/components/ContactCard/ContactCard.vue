<template>
  <div class="contact-card">
    <h4>Contact Info</h4>

    <div class="contact-card__contact__container">
      <ul class="contact-card__contact">
        <li>
          <p>
            {{ `${FirstName || ""} ${LastName || ""}` }}
          </p>
        </li>
        <li>
          <p>{{ `${EmailAddress || ""}` }}</p>
        </li>
        <li>
          <p>{{ `${Phone || ""}` }}</p>
        </li>
      </ul>

      <ul class="contact-card__contact">
        <li>
          <p>{{ `${City || ""} ${State || ""}, ${PostalCode || ""}` }}</p>
        </li>
        <li>
          <p>{{ `${CompanyName || ""}` }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    salesRep: Object,
  },
  data() {
    const {
      FirstName,
      LastName,
      EmailAddress,
      Phone,
      City,
      State,
      PostalCode,
      CompanyName,
    } = this.salesRep;

    return {
      FirstName,
      LastName,
      EmailAddress,
      Phone,
      City,
      State,
      PostalCode,
      CompanyName,
    };
  },
};
</script>

<style scoped>
.contact-card {
  background: #fff;
  width: 300px;
  padding: 20px;
  margin: 15px 0px 0px 0px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 6px -1px #cecece;
  box-shadow: 0px 0px 6px -1px #cecece;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contact-card__contact__container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.contact-card__contact {
  list-style: none;
  margin: 10px 0px;
}

.contact-card__contact p {
  margin: 0px;
  padding: 0px;
}

@media only screen and (max-width: 414px) {
  .contact-card {
    width: 100%;
  }
  .contact-card__contact__container {
    flex-direction: column;
  }
}
</style>