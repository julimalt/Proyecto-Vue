<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            LastName
          </th>
           <th class="text-left">
            Email
          </th>
           <th class="text-left">
            Consult
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="consult in consults"
          :key="consult.id"
        >
          <td>{{ consult.name }}</td>
          <td>{{ consult.lastname }}</td>
          <td>{{ consult.email }}</td>
          <td>{{ consult.mensaje }}</td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

  export default {
    components: {},
    props: [],
    data: () => ({
      consults: [],
    }),

    computed: {},
    mounted() {fetch("https://61b92f2138f69a0017ce5eef.mockapi.io/consults")
      .then((res) => res.json())
      .then((data) => {
        this.consults = data;
      });},
    methods: {},
  };
</script>
