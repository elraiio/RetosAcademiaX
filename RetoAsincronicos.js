// Imprimimos el inciio solicitud
console.log("Iniciando solicitud API");
// Hacemos el pedido de datos
fetch ("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json=> {
        setTimeout(()=>{
       console.log("Datos obtenidos de la API:",json)
        },3000);// Despues de 3 segundos imprimimos los datos obtenidos
    });

   
