import data from "../../data.json";
import UsersForm from "../form/index.vue";

export default {
  name: "users",
  components: { UsersForm },
  props: [],
  data() {
    return {
      search: "",
      headers: getHeaders(),
      users: [],
      isLoading: true,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: defaultItem(),
      defaultItem: defaultItem(),
    };
  },

  created() {
    this.initialize();
  },
  mounted() {},

  methods: {
    initialize() {
      this.users = data;
      this.isLoading = false;
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
      this.$swal(
        "Usuario eliminado",
        "El usuario fue eliminado correctamente",
        "success"
      );
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$refs.userForm.resetValidation();
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (!this.$refs.usersForm.validate()) return;

      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
        this.$swal(
          "Usuario actualizado",
          "El usuario fue actualizado correctamente",
          "success"
        );
      } else {
        this.users.push(this.editedItem);
        this.$swal(
          "Usuario creado",
          "El usuario fue creado correctamente",
          "success"
        );
      }
      this.close();
    },

    chipColor(item) {
      return item.isAdmin ? "green" : "gray";
    },

    chipText(item) {
      return item.isAdmin ? "Sí" : "No";
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo usuario" : "Editar usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
};

const getHeaders = () => {
  return [
    //{ text: 'Id', value: 'id' },
    {
      text: "Nombre",
      value: "name",
      width: 150,
      align: "start",
    },
    {
      text: "Apellido",
      value: "lastname",
      width: 140,
      align: "start",
    },
    { text: "Email", value: "email" },
  ];
};

const defaultItem = () => {
  return {
    name: "",
    lastname: "",
    email: "",
  };
};
