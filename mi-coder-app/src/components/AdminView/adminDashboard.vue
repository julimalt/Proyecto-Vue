<template>
  <section class="home">
    <v-card class="mx-auto">
		<div>
		<newProduct
			@newUser="newProductAdded"
			@editTheProduct="editTheProduct"
			:productToEdit="productToEdit"
		/>
		</div>
		<!-- <v-container>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      > -->
        <!-- <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="orange darken-3"
            v-bind="attrs"
            v-on="on"
          >Agregar Producto</v-btn>
        </template> -->
        <!-- <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="orange darken-3"
              dark
            >Agregar Producto</v-toolbar>
            <v-card-text>
              <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="20"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="price"
      label="Price"
      required
    ></v-text-field>
	<v-text-field
      v-model="description"
      label="Description"
      required
    ></v-text-field>
	<v-text-field
      v-model="image"
      label="Url Image"
      required
    ></v-text-field>
 </v-form>
            </v-card-text>
            <v-card-actions class="justify-end">
				<v-btn
                text
				@click="newProductAdded()"
				type="submit"
              >Agregar</v-btn>
              <v-btn
                text
                @click="dialog.value = false"
              >Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </template> -->
      <!-- </v-dialog>
    </v-col>
  </v-row>
		</v-container> -->
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

import newProduct from "./components/newProduct.vue"

  export default {
    components: {
		newProduct,
	},
    props: [],
    data: () => ({
      products: [],
      flex: 4,
    }),

   methods: {

// onSubmit(e) {
// 			e.preventDefault();

// 			const newProduct = {
// 				name: this.name,
// 				description: this.description,
// 				image: this.image,
// 				price: this.price,
// 			};
// 			this.id !== ""
// 				? this.$emit("editTheProduct", { ...newProduct, id: this.id })
// 				: this.$emit("newUser", newProduct);
// 			this.cleanForm();
// 		},
// 		cleanForm() {
// 			this.name = "";
// 			this.description = "";
// 			this.image = "";
// 			this.price = 0;
// 			this.id = "";
// 		},

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
