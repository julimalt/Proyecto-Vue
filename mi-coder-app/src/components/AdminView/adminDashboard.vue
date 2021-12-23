<template>
	<div>
		<FormComponent
			@newUser="newProductAdded"
			@editTheProduct="editTheProduct"
			:productToEdit="productToEdit"
		/>
		<TableComponent
			:data="products"
			@deleteProduct="deleteProduct"
			@editProduct="editProduct"
		/>
	</div>
</template>

<script>
// import FormComponent from "./Components/FormComponent.vue";
import TableComponent from "./Components/TableComponent.vue";
const axios = require("axios");
export default {
	name: "AdminDashboardView",
	components: {
		FormComponent,
		TableComponent,
	},
	data: function () {
		return {
			products: [],
			productToEdit: {},
			loading: false,
		};
	},
	methods: {
		getAllProducts() {
			this.loading = true;
			axios
				.get(
					"https://61b92f2138f69a0017ce5eef.mockapi.io/products",
				)
				.then((response) => {
					this.products = response.data;
				})
				.finally(() => (this.loading = false));
		},
		newProductAdded(product) {
			this.loading = true;
			axios
				.post(
					"https://61b92f2138f69a0017ce5eef.mockapi.io/products",
					product,
				)
				.then(() => {
					this.getAllProducts().finally(() => (this.loading = false));
				});
		},
		deleteProduct(id) {
			this.loading = true;
			axios
				.delete(
					`https://61b92f2138f69a0017ce5eef.mockapi.io/products/${id}`,
				)
				.then(() => {
					this.getAllProducts().finally(() => (this.loading = false));
				});
		},
		editProduct(product) {
			this.productToEdit = product;
		},
		editTheProduct(product) {
			this.loading = true;
			axios
				.put(
					`https://61b92f2138f69a0017ce5eef.mockapi.io/products/${product.id}`,
					product,
				)
				.then(() => this.getAllProducts())
				.finally(() => (this.loading = false));
		},
	},
	mounted: function () {
		this.getAllProducts();
	},
};
</script>
