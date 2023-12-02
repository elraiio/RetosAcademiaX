// Tu archivo JavaScript principal
import { Verificacion } from './RetoModulosExport';

//Declaramos variables e imprimimos
const verificacion = new Verificacion('martin@correo.com');
console.log(verificacion.proceso() ? 'correo electrónico es valido' : 'correo electrónico es invalido');
