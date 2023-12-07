# RetosAcademiaX
// Declaramos usuarios como lista vacia
const usuarios = [];

// Creamos uan clase para crear usuarios que agrega usuarios a la lista
class CrearUsuario {
    constructor(nombre) {
        this.nombre = nombre;
    }

    agregarUsuario() {
        usuarios.push(this.nombre);
        console.log(`Usuario '${this.nombre}' agregado.`);
    }
}
// Creamos una funcion que imprima la lista de usuarios
function listaUsuarios() {
    console.log('Lista de usuarios:')
    for (const usuario of usuarios) {
        console.log(usuario);
    }
}

// Index
const crear1 = new CrearUsuario('Juan');
const crear2 = new CrearUsuario('María');
//Impreme los usuarios agregados
crear1.agregarUsuario();
crear2.agregarUsuario();
//Imprime la lista de usuarios
listaUsuarios();
