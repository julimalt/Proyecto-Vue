import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    consults: [],

    headers: [
      { text: "Nombre", align: "start", value: "name" },
      { text: "Apellido", align: "start", value: "desc" },
      { text: "Email", align: "start", value: "genre" },
      { text: "Mensaje", align: "start", value: "duration" },
    ],
  },
  mutations: {
    ADD_CONSULTS(state, payload) {
      state.consults.push(payload);
    },

    SET_CONSULTS(state, payload) {
      state.consults = payload;
    },
  },
  actions: {
    agregar({ commit }, payload) {
      console.log(payload);
      commit("ADD_CONSULT", payload);
    },

    setConsults({ commit }, payload) {
      console.log(payload);
      commit("SET_CONSULTS", payload);
    },
  },

  getters: {
    consults: (state) => state.consults,
    headers: (state) => state.headers,
  },

  modules: {},
});
