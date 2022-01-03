<template>
	<section class="carrito-container">
		<emptyCart v-if="$store.getters.numberOfProducts === 0" />
		<cartProducts v-else :products="$store.getters.getCarrito" />
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


