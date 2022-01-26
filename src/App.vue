<template>
  <v-app>
    <navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/navbar/navbar.vue"

export default {

components: {
 navbar,
 },
};
</script>