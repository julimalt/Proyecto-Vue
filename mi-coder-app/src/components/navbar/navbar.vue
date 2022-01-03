<template>
  <v-app>
       <v-toolbar app color="orange darken-3" dark max-height="65">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          color="transparent"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left light>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </v-app>
    </template>

    <script>
        
 export default {

  data(){
    return {
      appTitle: 'Not THAT Bigbox',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home' },
          { title: 'Login', path: '/signin', icon: 'mdi-account-lock-open' },
          { title: 'Cart', path: '/cart', icon: 'mdi-cart' },
     ],
    }
  },
};
     </script>