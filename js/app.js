const data = [
  {
    nombre: "Producto uno",
    precio: 100,
    id: 1,
  },
  {
    nombre: "Producto dos",
    precio: 200,
    id: 2,
  },
  {
    nombre: "Producto tres",
    precio: 300,
    id: 3,
  },
  {
    nombre: "Producto cuatro",
    precio: 400,
    id: 4,
  },
  {
    nombre: "Producto cinco",
    precio: 500,
    id: 5,
  },
];

const labels = ["ID", "NOMBRE", "PRECIO"];

Vue.component("app-th", {
  props: ["label"],
  template: `<th scope="col">{{label}}</th>`,
});

Vue.component("app-thead", {
  props: ["labels"],
  template: `<thead>
          <tr>
            <app-th v-for="(label, index) in labels"
                    :key="label"
                    :label="label"></app-th>           
          </tr>
        </thead>`,
});

Vue.component("app-tr", {
  props: ["item"],
  template: `<tr>
                <td>{{item.id}}</td><td>{{item.nombre}}</td>
              <td>{{item.precio}}</td>
            </tr>`,
});

Vue.component("app-table", {
  props: ["items", "labels"],
  template: `<table class="table table-dark table-striped">
                <app-thead :labels="labels"></app-thead>
                <tbody>
                    <app-tr v-for="(item, index) in items"
                        :key="item.id"
                        :item="item"
                    ></app-tr>
                </tbody>                
            </table>`,
});

let app = new Vue({
  el: "#app",
  data: { products: data, labels: labels },
});
