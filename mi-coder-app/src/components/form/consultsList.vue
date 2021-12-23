<template>
    <v-container>
        <h1>Consultas</h1>
    <div v-if="prog" class="text-center">
          <v-progress-linear
            color="primary"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
    </div>
    <v-data-table :headers="headers" :items="consults" class="mx-4" v-else> 
        <template>
            {{item.name}}
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
            ...mapGetters(['consults', 'headers'])
        },

        methods: {
            ...mapActions(['setConsults']),
            getConsults() {
                axios.get('https://61b92f2138f69a0017ce5eef.mockapi.io/consults')
                .then((response) => {
                    this.setConsults(response.data)
                    this.prog = false
                })
                .catch((error) => console.log(error))
            }, 

            volver() {
                this.$router.push('/')
            }
        },


        mounted () {
            this.getConsults()
        },

        
    }
</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>