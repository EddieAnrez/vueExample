var app = new Vue({
    el: '#app',
    data: {
        list: [

        ],
        nombre: '',
        promedio: ''
    },
    methods: {
        agregarNota: function() {
            estadoA = false;
            if (this.promedio >= 12.5) {
                estadoA = true;
            }
            if (this.nombre != "" && this.promedio != "") {
                this.list.push({ nombre: this.nombre, promedio: this.promedio, estado: estadoA });
                this.nombre = "";
                this.promedio = "";

            } else {
                alert("Nombre y promedio no pueden estar vacios");
            }
        }
    }
})