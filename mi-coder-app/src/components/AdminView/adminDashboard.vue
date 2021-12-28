<template>
		<div>
		<newProduct
			@newProduct="newProductAdded"
			@editTheProduct="editTheProduct"
			:productToEdit="productToEdit"
		/>
    <homeAdmin
			:products="products"
			@deleteProduct="deleteProduct"
			@editProduct="editProduct"
		/>
		</div>
</template>

<script>

const axios = require("axios");

import newProduct from "./components/newProduct.vue"
import homeAdmin from "./components/homeAdmin.vue"


  export default {
    components: {
		newProduct,
    homeAdmin
	},

	products: function () {
		return {
		products: [],
		productToEdit: {},
		};
	},
    props: [],
    data: () => ({
      products: [],
      flex: 4,
    }),

   methods: {
		getAllProducts() {
			axios
				.get(
					"https://61b92f2138f69a0017ce5eef.mockapi.io/products",
				)
				.then((response) => {
					this.products = response.data;
				})
		},
		newProductAdded(product) {
			axios
				.post(
					"https://61b92f2138f69a0017ce5eef.mockapi.io/products",
					product,
				)
		},
		deleteProduct(product) {
			axios
				.delete(
					`https://61b92f2138f69a0017ce5eef.mockapi.io/products/${product.id}`,)
					.then(()=> location.reload())
		},
		editProduct(product) {
			this.productToEdit = product;
		},
		editTheProduct(product) {
			axios
				.put(
					`https://61b92f2138f69a0017ce5eef.mockapi.io/products/${product.id}`,
					product,
				)
				.then(() => this.getAllProducts())
		},
	},
	mounted: function () {
		this.getAllProducts();
	},
};
</script>
