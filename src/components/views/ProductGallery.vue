<template>
  <div class="product-gallery">
    <PageDetailsBanner
      text="Product Selection"
      :salesRep="data.SalesRep"
      :message="data.Message"
    />
    <div class="product-gallery__container layout-container">
      <ul class="product-gallery__product-list">
        <router-link
          v-for="item in data.items"
          :key="item.ProductID"
          :to="{ name: 'ProductView', params: { id: item.ProductID } }"
        >
          <li class="product-gallery__product-list__item">
            <Image :src="item.PhotoName" :alt="item.ItemName" />
            <h3>{{ item.ItemName }}</h3>
            <div class="product-gallery__product-list__item__base-price">
              Base Price: {{ `$${item.BasePrice.toFixed(2)}` }}
            </div>
            <div class="product-gallery__product-list__item__stock-counter">
              <span>{{
                item.OnHandQuantity > 0 ? item.OnHandQuantity : "0"
              }}</span>
              <span>In Stock</span>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import Image from "../Image/Image.vue";
import PageDetailsBanner from "../PageDetailsBanner/PageDetailsBanner.vue";

export default {
  name: "ProductGallery",
  props: {
    data: Object,
  },
  components: {
    Image,
    PageDetailsBanner,
  },
};
</script>

<style scoped>
.product-gallery {
  background: #f7f7f7;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 100px 0px;
}

.product-gallery__container {
  margin: 100px 0px 0px 0px;
}

.product-gallery__product-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, auto);
  gap: 10px 10px;
  padding: 0px;
  margin: 0px;
}

.product-gallery__product-list__item {
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px 20px 0px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 0px 6px -1px #cecece;
  box-shadow: 0px 0px 6px -1px #cecece;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.product-gallery__product-list__item:hover {
  -webkit-box-shadow: 0px 0px 10px 2px #cecece;
  box-shadow: 0px 0px 10px 2px #cecece;
}

.product-gallery__product-list__item > img {
  padding: 15px;
  width: 80%;
}

.product-gallery__product-list__item > h3 {
  text-align: center;
  margin: 10px 0px;
  font-size: 18px;
}

.product-gallery__product-list__item__base-price {
  font-size: 14px;
  font-weight: 400;
  margin: 0px 0px 5px 0px;
  color: var(--RepzioYellow);
}

.product-gallery__product-list__item__stock-counter {
  display: flex;
  justify-content: center;
  padding: 0px 0px;
}

.product-gallery__product-list__item__stock-counter span:first-of-type {
  font-weight: 400;
}

.product-gallery__product-list__item__stock-counter span {
  margin: 0px 5px;
  font-size: 16px;
}

.product-gallery__product-list__nothing-found {
  font-weight: 400;
}

@media only screen and (max-width: 768px) {
  .product-gallery__product-list {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media only screen and (max-width: 414px) {
  .product-gallery__product-list {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>