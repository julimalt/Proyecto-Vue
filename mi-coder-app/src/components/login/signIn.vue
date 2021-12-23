<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                required></v-text-field>
            </v-flex>
          <v-flex>
              <v-select id="rol" v-model="rol" class="custom-select" label="Elegir un rol" :items="items"/>
            </v-flex>  
            <v-flex class="text-xs-center" mt-5>
              <v-btn outlined color="orange darken-3" type="submit">Sign In</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
const axios = require("axios");

export default {
	name: "LoginView",
	data: ()=>({items: ['Admin', 'User'], function () {
		return {
			users: [],
			mail: "",
			contra: "",
			errors: [],
			rol: "",
		};
	},}),
  
	methods: {
		findUser() {
			return this.users.find(
				(user) =>
					user.email === this.mail &&
					this.contra === user.password &&
					user.rol === this.rol,
			);
		},
		login() {
			axios
				.get("https://61b92f2138f69a0017ce5eef.mockapi.io/users")
				.then((response) => {
					console.log(response);
					this.users = response.data;
					if (this.findUser()) {
						this.$router.push(
							this.rol === "admin" ? "/admin/dashboard" : "/products",
						);
					} else {
						console.log("TODO: no se loguea");
					}
				});
		},
	},
};
</script>