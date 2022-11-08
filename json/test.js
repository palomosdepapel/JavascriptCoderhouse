// prueba json local
const listado  = document.getElementById("listado");
const listadoProductos = "https://palomosdepapel.github.io/JavascriptCoderhouse/json/productos.json";

fetch(listadoProductos)
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(producto => {
      listado.innerHTML += `
        <h2>Nombre: ${producto.nombre} </h2>
        <p>Precio: $ ${producto.precio}</p>
        <p>ID: ${producto.id}</p>
      `      
    });
  })
  .catch(error => console.log(error))
  .finally(() => console.log("Proceso finalizado"))