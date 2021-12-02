<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            product
          </th>
          <th class="text-left">
            price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.product"
        >
          <td>{{ item.product }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            product: 'Frozen Yogurt',
            price: 159,
          },
          {
            product: 'Ice cream sandwich',
            price: 237,
          },
          {
            product: 'Eclair',
            price: 262,
          },
          {
            product: 'Cupcake',
            price: 305,
          },
          {
            product: 'Gingerbread',
            price: 356,
          },
          {
            product: 'Jelly bean',
            price: 375,
          },
          {
            product: 'Lollipop',
            price: 392,
          },
          {
            product: 'Honeycomb',
            price: 408,
          },
          {
            product: 'Donut',
            price: 452,
          },
          {
            product: 'KitKat',
            price: 518,
          },
        ],
      }
    },
  }
</script>