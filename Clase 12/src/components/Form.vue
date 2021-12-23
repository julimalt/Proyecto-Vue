<template>
<v-container class="col-6">
    <h1>Cargador de Películas</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="30"
      :rules="nameRules"
      label="Película"
      required
    ></v-text-field>

    <v-textarea
      v-model="desc"
      :counter="250"
      :rules="descRules"
      label="Breve descripción"
      auto-grow
      required
    ></v-textarea>

    <v-select  v-model="genre"
               :items="genres"
               :rules="genreRules" 
               label="Genero" 
               required>

    </v-select>

    <v-text-field
      v-model="duration"
      :rules="durationRules"
      label="Duración HH:mm"
      required
    ></v-text-field>

    <v-text-field
      v-model="date"
      :rules="dateRules"
      label="Fecha de estreno dd/mm/yyyy o dd-mm-yyyy"
      required
    ></v-text-field>

    <v-checkbox
          v-model="check"
          label="Acepto los términos"
          :rules="checkRules"
          required
        ></v-checkbox>

    <v-btn color="green" @click="validate()" dark class="mt-4">
        Agregar
    </v-btn>

    <v-btn color="error" class="mt-4 ml-4" @click="reset()">
      Borrar todo
    </v-btn>
    
    <v-btn color="primary" class="mt-4 ml-4" @click="verPeliculasDisponibles()">
        ver Películas 
    </v-btn>

    </v-form>

    <v-snackbar
      v-model="snackbar"
    >
      Se agrego la película

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</v-container>
</template>

<script>
    //los tipos de inputs con los que se trabajan aca son text-field, text-area, select y checkbox. 
    
    import axios from 'axios'
    export default {
        data() {
            return {
                valid: true,
                snackbar: false,
                name: '',
                nameRules: [
                    v => !!v || 'El nombre de la pelicula',
                    v => (v && v.length <= 30) || 'El nombre no debe tener mas de 30 caracteres',
                ],
                desc: '',
                descRules: [
                    v => !!v || 'Descripción requerida',
                    v => (v && v.length <= 250) || 'La descripción no debe tener mas de 50 caracteres',
                ],
                genre: '',
                genreRules:[
                    v => !!v || 'Genero requerido'
                ],
                duration: '',
                durationRules: [
                    v => !! v || 'Duración es requerida', 
                    v => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v) || 'Duración en formato HH:mm'
                ],
                date: '',
                dateRules: [
                    v => !! v || 'Fecha de estreno requerida',
                    v => /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(v) || 'Ingrese fecha dd/mm/yyyy'
                ], 

                check: '', 
                checkRules: [
                    v => !!v || 'Acepte los términos'
                ], 
                genres: [
                    'Ciencia Ficción', 
                    'Drama', 
                    'Bélico', 
                    'Aventuras',
                    'Histórico', 
                    'Terror',
                    'Comedia'
                ]
        }
    }, 
    
    methods: {
        validate () {
        if(this.$refs.form.validate()) {
        const newMovie = {
            name:  this.name,
            desc: this.desc, 
            genre: this.genre,
            duration: this.duration,
            date: this.date
        }
        
        this.agregar(newMovie)
        this.$refs.form.reset()
        }
      }, 

      reset() {
          this.$refs.form.reset()
      }, 
      
      verPeliculasDisponibles() {
          this.$router.push('/movies')
      },

      agregar(movie) {
          axios.post('https://61b92f2138f69a0017ce5eef.mockapi.io/consults', movie)
          .then((response) => {
                console.log(response.data) 
                this.snackbar = true})
          .catch((error) => console.log(error))
      }
    }, 
}

</script>

<style scoped>
    h1, h3{
        text-align: center;
    }
</style>