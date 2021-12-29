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

        <v-btn color="primary" class="mr-4" @click="verConsultas"> Ver consultas </v-btn>

  </v-form>
</template>

<script>
    import axios from 'axios'

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
      // mensaje: "",
      // mensajeRules: [
      //   (v) => !!v || "El mensaje es requerido",
      //   (v) =>
      //     (v && v.length <= 100) ||
      //     "El mensaje debe tener menos de 100 caracteres",
      // ],
    }),

     methods: {
        validate () {
        if(this.$refs.form.validate()) {
        const newConsult = {
            name:  this.name,
            lastname: this.lastname, 
            email: this.email,
            mensaje: this.mensaje,
        }
        
        this.agregar(newConsult)
        this.$refs.form.reset()
        }
      }, 

      reset() {
          this.$refs.form.reset()
      }, 
      
      verConsultas  () {
          this.$router.push('/consults')
      },

      agregar(consults) {
          axios.post('https://61b92f2138f69a0017ce5eef.mockapi.io/consults', consults)
          .then((response) => {
                console.log(response.data) 
                this.snackbar = true})
          .catch((error) => console.log(error))
      }
    }, 
}
</script>
