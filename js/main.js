//Este script modifica las clases del header > nav de acuerdo a la resolución de pantalla:
jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww < 992) {
      $("nav").removeClass("navbar-dark bg-dark");
      $("nav").addClass("navbar-light bg-light");
    } else if (ww >= 993) {
      $("nav").removeClass("navbar-light bg-light");
      $("nav").addClass("navbar-dark bg-dark");
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  alterClass();
});

// El carrito vacío en principio
let carrito=[];
// Los productos que quiero mostrar en la web
let productos=[];
// Encargado de relacionar el carrito y los productos
let gestor=[];
// clave carrito
const clave_carrito = "carrito";

//ruta de los datos en formato json
const urljson = 'json/productos.json';

// Detectar el evento de carga: cuando DOM esté listo y el contenido esté cargado... ejecuto este bloque de código.
document.addEventListener('DOMContentLoaded',() => {
  //busco clave carrito y devuelvo toda la información que tenga
  // a la variable carrito le asigno lo que recupero de local storage (convertido por parseo)
  // Un OR para que valide si el estado local storage no existe, entonces quede vacío el arreglo 
  // OPERADOR AVANZADO
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // inicializar gestor para darle vida a la clase gestor
  gestor = new GestionarProductos();
  // llamando iniciar para buscar la info y la plasma en la web
  gestor.iniciar();
})

// Crear nueva función agregar productos al carrito que recibe un ID
function addCarrito(id){
  // concateno el id con la caja dinámica id row
  const prod = document.querySelector('#row_'+id);
  // nuevo producto para agregar a la colección de mi carrito (offcanvas de bootstrap)
  let producto = new Producto ( id,
                                prod.querySelector("h3").textContent,
                                prod.querySelector(".precio").textContent.substring(1,12),
                                prod.querySelector("img").src
                              );
// pasamos el producto que queremos agregar
gestor.addCart(producto)

}

// Crear nueva función eliminar producto al carrito que recibe un ID
function eliminar(id){
// pasamos el producto que queremos eliminar
  gestor.eliminarArticulo(id);
}
// Función que finaliza el proceso de compra
function comprar(id){
    gestor.hacerPedido(id);
  }


// Eventos de tecla para buscador
document.querySelector('.buscar').addEventListener('keyup', () => {
  let q = document.querySelector('.buscar').value;
  //Empezamos a buscar solo cuadno hay se hayan tipeado mas 2 letras o mas
  if( q.length >= 2 ) { 
      gestor.mostrarHeader(`Resultados para: ${q}`);
      gestor.buscar( q );        
  } else if ( q.length === 0 ) {
      //Muestro todo sino hay nada el buscador   
      gestor.mostrarHeader('Todos los productos en stock');
      gestor.cargaProductos( productos );
  } 
})

