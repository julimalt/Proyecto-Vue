<template>
    <v-container>
        <h1>Tus Películas</h1>
    <div v-if="prog" class="text-center">
          <v-progress-linear
            color="primary"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
    </div>
    <v-data-table :headers="headers" :items="movies" class="mx-4" v-else> 
        <template v-slot:item.duration="{item}">
            {{item.duration|formatoHHmm}}
        </template>
    </v-data-table>
    <v-btn dark color="primary" class="mt-4" @click="volver()">volver</v-btn>
    </v-container>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import axios from 'axios'
    export default {
        
        data() {
            return {
                prog: true
            }
        },

        computed: {
            ...mapGetters(['movies', 'headers'])
        },

        methods: {
            ...mapActions(['setMovies']),
            getMovies() {
                axios.get('https://61c0e99533f24c0017823689.mockapi.io/movies')
                .then((response) => {
                    this.setMovies(response.data)
                    this.prog = false
                })
                .catch((error) => console.log(error))
            }, 

            volver() {
                this.$router.push('/')
            }
        },

        filters: {
            formatoHHmm: (value) => {
                if(value.includes('duration')) return '01:00 hs'
                return value.split(':')[0] + 'h ' + value.split(':')[1] + 's'
            } 
        },

        mounted () {
            this.getMovies()
        },

        
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>