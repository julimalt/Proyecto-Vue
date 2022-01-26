<template>
	<section class="carrito-container">
		<emptyCart v-if="$store.state.cart.products.length === 0" />
		<cartProducts v-else :products="$store.state.cart.products" />
	</section>
</template>

<script>
import emptyCart from "./emptyCart.vue";
import cartProducts from "./cartProducts.vue";

export default {
	components: {
		cartProducts,
		emptyCart,
	},
	data: function () {
		return {
			logo: "",
		};
	},
};
</script>


