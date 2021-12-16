<template>
    <v-container fluid style="margin-top:2em">
  <v-row>
    <v-col class="offset-md-2 col-md-8">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Producto</th>
              <th class="text-right">Precio</th>
              <th class="text-left">Cantidad</th>
              <th class="text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.nombre">
              <td class="text-left">{{ product.nombre }}</td>
              <td class="text-right">{{ product.precio }}</td>
              <td class="text-left">{{ 2 }}</td>
              <td class="text-right">{{ 2 * product.precio }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
  <v-row justify="space-around" class="m-4">
    <v-col class="offset-md-8 col-md-2">
      <strong>Total: $ {{total}}</strong>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

import products from "../../data/products.json";

export default {
  name: "cart",
  components: {},
  props: [],
   data: () => ({
      products: products.slice(0,2)
    }),
  computed: {
    total() {
      let total = 0;
      this.products.forEach(function (product) {
        total += 2 * product.precio;
      });

      return total;
    },
  },
  mounted() {},
  methods: {},
};
</script>
