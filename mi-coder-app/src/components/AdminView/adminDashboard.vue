<template>
  <section class="home">
    <v-card class="mx-auto">
		<v-container>
			<v-btn
                color="orange darken-3"
                dark
                absolute
                right
                fab
				@click="newProductAdded()"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
		</v-container>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="product in products" :key="product.id" :cols="flex">
            <v-card class="mx-auto my-12" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>
            
              <v-img :src="product.image"
                height="250"
                 />

              <v-card-title>{{product.name}}</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">$ {{product.price}}</div>

                <div>{{product.description}}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="red" text @click="deleteProduct(product)">
                  Eliminar
                </v-btn>
				<v-icon color="orange darken-3" text @click="editProduct(product)">
					mdi-lead-pencil
				</v-icon>

              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>

const axios = require("axios");

  export default {
    components: {},
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
