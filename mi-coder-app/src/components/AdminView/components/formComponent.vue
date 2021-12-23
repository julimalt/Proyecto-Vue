<template>
	<div class="container">
		<form ref="userForm" @submit="onSubmit">
			<div>
				<label for="title">Titulo</label>
				<input
					type="text"
					v-model="title"
					id="title"
					placeholder="Menta granizada"
					class="form-control"
				/>
			</div>
			<div>
				<label for="description">Descripcion</label>
				<input
					type="text"
					v-model="description"
					name="description"
					id="description"
					placeholder="Colocar la composicion"
					class="form-control"
				/>
			</div>
			<div>
				<label for="descriptionExtendida">Descripcion Extendida</label>
				<input
					type="text"
					v-model="descriptionExtendida"
					name="descriptionExtendidan"
					id="descriptionExtendida"
					placeholder="Colocar una descripcion extendida, otras variantes y combinaciones"
					class="form-control"
				/>
			</div>
			<div>
				<label for="img">URL - Imagen</label>
				<input
					type="url"
					v-model="img"
					name="img"
					id="img"
					class="form-control"
				/>
			</div>
			<div>
				<label for="stock">Stock</label>
				<input
					type="text"
					id="stock"
					v-model="stock"
					placeholder="2"
					class="form-control"
				/>
			</div>
			<div>
				<label for="price">Precio</label>
				<input
					type="text"
					id="price"
					v-model="price"
					placeholder="2"
					class="form-control"
				/>
			</div>

			<button type="submit" class="btn btn-outline-primary">
				{{ buttonLabel }}
			</button>
		</form>
	</div>
</template>

<script>
import { isObjectEmpty } from "../../../utils/operations";
export default {
	name: "FormComponent",
	data: function () {
		return {
			title: "",
			description: "",
			descriptionExtendida: "",
			img: "",
			stock: 0,
			price: 0,
			id: "",
			buttonLabel: "Registrar",
		};
	},
	props: {
		productToEdit: Object,
	},
	watch: {
		productToEdit: function () {
			if (!isObjectEmpty(this.productToEdit)) {
				this.title = this.productToEdit.title;
				this.description = this.productToEdit.description;
				this.descriptionExtendida = this.productToEdit.descriptionExtendida;
				this.img = this.productToEdit.img;
				this.stock = this.productToEdit.stock;
				this.price = this.productToEdit.price;
				this.id = this.productToEdit.id;
			}
			this.buttonLabel = "Editar";
		},
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
			const newProduct = {
				title: this.title,
				description: this.description,
				descriptionExtendida: this.descriptionExtendida,
				img: this.img,
				stock: this.stock,
				price: this.price,
			};
			this.id !== ""
				? this.$emit("editTheProduct", { ...newProduct, id: this.id })
				: this.$emit("newUser", newProduct);
			this.cleanForm();
		},
		cleanForm() {
			this.title = "";
			this.description = "";
			this.descriptionExtendida = "";
			this.img = "";
			this.stock = 0;
			this.price = 0;
			this.id = "";
			this.buttonLabel = "Registrar";
		},
	},
};
</script>