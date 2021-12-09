export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "El nombre es requerido",
      (v) =>
        (v && v.length <= 15) || "El nombre debe tener menos de 15 caracteres",
    ],
    valid: true,
    lastname: "",
    lastnameRules: [
      (v) => !!v || "El apellido es requerido",
      (v) =>
        (v && v.length <= 15) ||
        "El apellido debe tener menos de 15 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "El E-mail debe ser valido",
    ],
    valid: true,
    mensaje: "",
    mensajeRules: [
      (v) => !!v || "El mensaje es requerido",
      (v) =>
        (v && v.length <= 100) ||
        "El mensaje debe tener menos de 100 caracteres",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
