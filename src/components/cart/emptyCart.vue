<template>
	<div class="empty-carrito" style="textAlign: center">
		<img :src="img" :alt="'logo'" class="img-logo"  />
		<h3>¡No armaste tu pedido aún!</h3>
	</div>
</template>

<script>

import imgShop from "../../assets/logo.png";

export default {
    
	data: function () {
		return {
			img: imgShop,
		};
	},
};
</script>

<style scoped>
.empty-carrito{
margin-top: 5em;
}
</style>

