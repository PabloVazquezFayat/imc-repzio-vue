import { createWebHistory, createRouter } from "vue-router";
import ProductGallery from "../components/views/ProductGallery.vue";
import ProductView from "../components/views/ProductView.vue";
import NotFound from "../components/views/NotFound.vue";

const routes = [
	{
		path: "/",
		name: "ProductGallery",
		component: ProductGallery,
	},
	{
		path: "/product-view/:id",
		name: "ProductView",
		component: ProductView,
	},
	{
		path: "/:catchAll(.*)",
		name: "NotFound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
