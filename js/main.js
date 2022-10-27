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

//Initializar sliders del home page:
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// El carrito vacío en principio
let carrito=[];
// Los productos que quiero mostrar en la web
let productos=[];
// Encargado de relacionar el carrito y los productos
let gestor=[];
// clave carrito
const clave_carrito = "carrito";

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

// Eventos de tecla para buscador
document.querySelector('#buscar').addEventListener('keyup', () => {
  let q = document.querySelector('#buscar').value;
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