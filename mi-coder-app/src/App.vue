<template>
  <v-app>
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./components/home/index.vue";
import Footer from "./components/footer/index.vue"
import Cart from "./components/cart/index.vue"
export default {
  name: "App",
  components: {
    Home,
    Footer,
    Cart
  },
  data: () => ({
    //
  }),
};
</script>