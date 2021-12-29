<template>
  <section class="home">
    <v-card class="mx-auto">
      <v-container fluid>
        <v-row dense>
          <v-col v-for="product in products" :key="product.id" :cols="flex">
            <v-card class="mx-auto my-12" max-width="374">
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
                <v-btn color="orange darken-2" text @click="reserve">
                  Añadir al carrito
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </section>
</template>

<script>



  export default {
    name: "home",
    components: {},
    props: [],
    data: () => ({
      products: [],
      flex: 4,
    }),

    computed: {},
    mounted() {fetch("https://61b92f2138f69a0017ce5eef.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
      });},
    methods: {},
  };
</script>
