# RetosAcademiaX
//Declaracion de las variables

let nombre = 'Diego';
let email = 'diego@correo.com';
let mensaje = 'Hola, tu curso es genial, gracias por los retos';

// Funcion para validar
function validarFormulario(nombre, email, mensaje) {
    return nombre && email && mensaje;
}


//Funcion Enviar msj
function enviarMensaje(enExito, enError) {


    if (validarFormulario(nombre, email, mensaje)) {
        enExito();
    } else {
        enError();
    }

}
//Impresion de funciones
enviarMensaje(
    () => console.log('¡Formulario enviado con éxito!'),
    () => console.log('Por favor completa todos los campos.')
);
