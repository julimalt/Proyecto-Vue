let app = new Vue({
  el: "#app",
  data: {
    result: 0,
    clickCounter: 0,
  },

  methods: {
    add() {
      this.clickCounter++;
      return this.result++;
    },
    subtract() {
      this.clickCounter++;
      return this.result--;
    },
  },

  computed: {
    clicks() {
      return this.clickCounter;
    },
    exponential() {
      return this.clickCounter * this.clickCounter;
    },
  },
});
