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
    <v-content>
      <router-view></router-view>
    </v-content>

     <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="orange darken-3">
        <strong class="subheading"
          >Contactanos!</strong
        >

        <v-spacer></v-spacer>

         <v-btn
          color="transparent"
          v-for="icon in icons"
          :key="icon.title"
          :to="icon.path">
          <v-icon left light>{{ icon.icon }}</v-icon>
          {{ icon.title }}
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      appTitle: 'Not THAT Bigbox',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home' },
          { title: 'Sign Up', path: '/signup', icon: 'mdi-baby-face-outline' },
          { title: 'Sign In', path: '/signin', icon: 'mdi-account-lock-open' },
          { title: 'Cart', path: '/cart', icon: 'mdi-cart' },
     ],
    icons: [{ title: 'Contact us', path: '/form', icon: 'mdi-cellphone-information' }],
    }
  },
};
</script>