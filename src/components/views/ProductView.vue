<template>
  <div class="product-view">
    <div class="product-view">
      <PageDetailsBanner :text="productData.ItemName" :salesRep="salesRep" />
      <div class="product-view__container layout-container">
        <div class="product-view__image__container">
          <Image :src="productData.PhotoName" :alt="productData.ItemName" />
        </div>

        <div class="product-view__product-details__container">
          <h2>{{ productData.ItemName }}</h2>
          <div class="product-view__base-price">
            Base Price: {{ basePrice }}
          </div>
          <p>
            {{ description }}
          </p>
          <div class="product-view__item-info">
            Dimensions: {{ productData.Dimensions }}
          </div>
          <div class="product-view__item-info item-id">
            Item ID: {{ productData.ItemID }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "../Image/Image.vue";
import PageDetailsBanner from "../PageDetailsBanner/PageDetailsBanner.vue";

export default {
  name: "Productview",
  props: {
    data: Object,
  },
  components: {
    Image,
    PageDetailsBanner,
  },
  computed: {
    basePrice() {
      return `$${
        this.productData.BasePrice
          ? this.productData.BasePrice.toFixed(2)
          : "0.00"
      }`;
    },
    description() {
      return (
        this.productData.Description || "No description found for this item..."
      );
    },
  },
  methods: {
    setSelected() {
      const id = parseInt(this.$route.params.id);

      const data = this.data;

      const selectedProduct = data.items.find((item) => item.ProductID === id);

      if (selectedProduct) {
        this.productData = selectedProduct;
      } else {
        this.$router.push("/not-found");
      }
    },
  },
  data() {
    return {
      salesRep: this.data.SalesRep,
    };
  },
  created() {
    this.setSelected();
  },
};
</script>

<style scoped>
.product-view {
  background-color: #f7f7f7;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0px 100px 0px;
}

.product-view__container {
  margin: 100px 0px 0px 0px;
  display: flex;
  justify-content: center;
}

.product-view__image__container {
  background-color: #fff;
  width: 40%;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 6px -1px #cecece;
  box-shadow: 0px 0px 6px -1px #cecece;
}

.product-view__image__container > img {
  width: 100%;
}

.product-view__product-details__container {
  width: 40%;
  padding: 0px 50px;
}

.product-view__product-details__container > h2 {
  margin: -3px 0px 10px 0px;
}

.product-view__base-price {
  color: var(--RepzioYellow);
  font-weight: 400;
  margin: 20px 0px;
}

.product-view__product-details__container > p {
  margin: 20px 0px;
}

.product-view__item-info {
  font-weight: 400;
  font-size: 14px;
  margin: 30px 0px 0px 0px;
  color: #000;
}

.item-id {
  margin: 5px 0px;
}

@media only screen and (max-width: 768px) {
  .product-view__container {
    flex-direction: column;
  }

  .product-view__image__container {
    width: auto;
  }

  .product-view__image__container > img {
    width: 100%;
  }

  .product-view__product-details__container {
    width: 100%;
    padding: 40px 0px;
  }
}
</style>