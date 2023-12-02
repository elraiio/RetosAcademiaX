// clase para verificar si el correo es valido
export class Verificacion {
   constructor (correo){
       this.correo = correo;
   }
   proceso(){
       return this.correo === 'diego@correo.com';
   }
}
