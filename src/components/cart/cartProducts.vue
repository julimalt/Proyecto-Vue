<template>
	<section>
		<header class="carrito-header">
			<h1>Carrito</h1>
			<!-- <h5>{{ totalAmount() | priceFormat }}</h5> -->
		</header>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">Cantidad</th>
					<th scope="col">Producto</th>
					<th scope="col">precio unitario</th>
					<th scope="col">precio total</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="element in data" :key="element.id">
					<td>{{ element.quantity }}</td>
					<td>{{ element.title }}</td>
					<td>{{ element.price | priceFormat }}</td>
					<td>{{ amount(element.quantity, element.price) | priceFormat }}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script>
export default {
	props: {
		data: Array,
	},
	methods: {
		amount: function (quantity, price) {
			return quantity * price;
		},
		// totalAmount: function () {
		// 	return this.data.reduce(
		// 		(previousValue, currentValue) =>
		// 			previousValue + currentValue.quantity * currentValue.price,
		// 		0,
		// 	);
		// },
	},
	filters: {
		priceFormat: function (price) {
			if (!price) return "$0";
			return `$${price}`;
		},
	},
};
</script>

