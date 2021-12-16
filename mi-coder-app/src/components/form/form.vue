<template>
  <v-form ref="form" v-model="valid" lazy-validation style="margin:10em; text-align:center">
    <v-text-field
      v-model="name"
      :counter="15"
      :rules="nameRules"
      label="Nombre"
      required
    ></v-text-field>

    <v-text-field
      v-model="lastname"
      :counter="15"
      :rules="lastnameRules"
      label="Apellido"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="mensaje"
      :counter="100"
      :rules="mensajerules"
      label="Mensaje"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Enviar
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Limpiar </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) =>
          (v && v.length <= 15) ||
          "El nombre debe tener menos de 15 caracteres",
      ],
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
</script>
