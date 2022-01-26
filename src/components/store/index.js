import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {
      products: [],
    },
    products: [],
    user: {},
  },
  mutations: {
    PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_PRODUCT_TO_CART(state, payload) {
      Vue.swal("Producto agregado al carrito!", "", "success");
      const product = state.cart.products.find((p) => p.id == payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.cart.products.push(payload);
      }
    },
    UPDATE_USER(state, payload) {
      const { name, lastName, email, rol } = payload;
      state.user = { name, lastName, email, rol };
    },
    CLEAN_USER(state, payload) {
      state.user = payload;
    },
    CLEAN_CART(state, payload) {
      state.cart.products = payload;
    },
  },
  actions: {
    fetchProducts(context) {
      axios
        .get("https://61b92f2138f69a0017ce5eef.mockapi.io/products")
        .then((data) => {
          context.commit("PRODUCTS", data.data);
        });
    },
    addProductToCart(context, payload) {
      context.commit("ADD_PRODUCT_TO_CART", payload);
    },
    updateUser(context, payload) {
      context.commit("UPDATE_USER", payload);
    },
    cleanUser(context, payload) {
      context.commit("CLEAN_USER", payload);
    },
    cleanCart(context, payload) {
      context.commit("CLEAN_CART", payload);
    },
  },
  modules: {},
});
