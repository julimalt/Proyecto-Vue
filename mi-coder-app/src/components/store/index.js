import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    authenticated: false,
  },
  mutations: {
    ADD_CARRITO(state, payload) {
      state.carrito = [...state.carrito, payload];
    },
    LOGIN_USER(state, payload) {
      state.authenticated = payload;
    },
  },
  actions: {
    addToCarrito(context, payload) {
      context.commit("ADD_CARRITO", payload);
    },
    authentication(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get("https://61b92f2138f69a0017ce5eef.mockapi.io/users")
          .then((response) => {
            const users = response.data;
            const userFind = users.find(
              (user) =>
                user.email === payload.mail &&
                user.password === payload.password
            );
            if (userFind) {
              resolve("");
              context.commit("LOGIN_USER", userFind);
            } else {
              reject("Mail o contraseña incorrecto!");
            }
          })
          .catch(() => {
            reject("Pagina no disponible!");
          });
      });
    },
    logout(context) {
      context.commit("LOGIN_USER", false);
    },
  },
  getters: {
    isAuthenticated: (state) => state.authenticated,
    numberOfProducts: (state) => state.carrito.length,
    getCarrito: (state) => state.carrito,
  },
  modules: {},
});
