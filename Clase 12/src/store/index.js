import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],

    headers: [
      { text: "Nombre", align: "start", value: "name" },
      { text: "Descripción", align: "start", value: "desc" },
      { text: "Genero", align: "start", value: "genre" },
      { text: "Duración", align: "start", value: "duration" },
      { text: "Fecha de estreno", align: "start", value: "date" },
    ],
  },
  // mutations: {
  //   ADD_MOVIE(state, payload) {
  //       state.movies.push(payload)
  //   },

  //   SET_MOVIES(state, payload) {
  //     state.movies = payload
  //   }
  // },
  // actions: {
  //   agregar({commit}, payload) {
  //     console.log(payload)
  //     commit('ADD_MOVIE', payload)
  //   },

  //   setMovies({commit}, payload) {
  //     console.log(payload)
  //     commit('SET_MOVIES', payload)
  //   }
  // },

  getters: {
    movies: (state) => state.movies,
    cant: (state) => state.movies.length,
    headers: (state) => state.headers,
  },

  modules: {},
});
