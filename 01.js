const app = new Vue({
	el: '#app',
	data: {
		title: 'Un juego simple con Vue.js',
		frutas: [
			{nombre: 'manzana', cantidad: 100},
			{nombre: 'platano', cantidad: 40},
			{nombre: 'naranja', cantidad: 0}
		],
		suma: 0,
		nombre: '',
		cantidad: ''
	},
	computed: {
		sumar() {
			this.suma = 0;
			for(fruta of this.frutas) {
				//if (fruta.cantidad == "") {
				//	continue;
				//}

				this.suma += fruta.cantidad;
			}
			return this.suma;
		}
	},
	methods: {
		agregar() {
			if (this.nombre.trim() == "") {
				alert("Por favor llena nombre");
				return;
			}

			this.frutas.push({
				nombre: this.nombre,
				cantidad: this.cantidad ? this.cantidad : 0
			});

			this.nombre = '';
			this.cantidad = '';
		},
		eliminar(i) {
			delete this.frutas.splice(i,1);
		}
	}
})