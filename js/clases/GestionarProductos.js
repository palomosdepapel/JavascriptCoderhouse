// diferentes acciones
class GestionarProductos {
  // método iniciar
  iniciar() {
    //hacemos fetch a la url (ruta en main.js)
    fetch(urljson)
    .then(respuesta => respuesta.json())
    .then(resultado => {
      productos = resultado.productos;
      // filter para traer sólo los productos destacados (genera un nuevo arreglo)
      let productosDestacados = productos.filter(prod => prod.destacado == 1);
      // manipular en la web con this. Porque va aser una función de esta clase en particular: gestionarProductos
      //this.cargaProductos(productosDestacados);
      this.cargaProductos(productosDestacados);
      this.modalProductos(productosDestacados);
      
      
    });
    //llamar funciones
    this.mostrarCarrito();
    this.actualizarContador();
  }  

  //método cargar productos. Recibe una colección de productos
  cargaProductos(productos) {
    //identifico con DOM el contenedor donde quiero mostra los productos destacados
    const divProductos = document.querySelector("#productos"); // o get elementByID
    // Resetear si tenía algo cargado
    divProductos.innerHTML = "";
    // mostrar mensaje si no hay nada para mostrar
    if (productos.length === 0) {
      // mensaje en el div headerProductos cuando no ha encontrado productos
      this.mostrarHeader("No se han encontrado productos");
      return false;
    }
    else {
      // for each para cada elemento (producto) encontrado en esta colección (productos) se crean cajas con lo requerido... 
      productos.forEach((producto) => {

        const { id: id_prod,
          nombre: nombre_prod,
          precio: precio_prod,
          img: img_prod,
          cantidad: cant_prod,
          descripcion: descripcion_prod } = producto;

        // crear caja 
        let prod = document.createElement('div');
        // agrega cada caja con una clase específica
        prod.classList.add('swiper-slide');
        // agrega el ID para identificar fácilmente
        prod.setAttribute('id', 'row_' + producto.id);
        // generar contenido (Solo la para productos destacados) de la caja con su id, nombre, ruta de imagen, enlace url 
        prod.innerHTML = `
                          <div class="card">
                            <a class="favorite" href="javascript:addFavorito(${producto.id})"><i class="bi bi-bookmark"></i></a>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#modal${producto.id}">
                              <img src="./${producto.img}" class="card-img-top scale-up-center" alt="${producto.nombre}" />
                            </a>
                            <div class="card-body">
                              <h3>${producto.nombre}</h3>
                              <div class="data">
                                <p class="precio">$${producto.precio}</p>
                              </div>
                              <a class="addCart grow blink-1" href="javascript:addCarrito(${producto.id})"><i class="bi bi-cart2"></i></a>
                            </div>
                          </div>
                          `;
        // caja dinámica generada por casa elemento encontrado
        divProductos.appendChild(prod);
      })
    }
  }

  //método cargar modal productos. Recibe una colección de productos
  modalProductos(productos) {
    //identifico con DOM el contenedor donde quiero mostra los productos destacados
    const divModal = document.querySelector("#modal"); // o get elementByID
    // Resetear si tenía algo cargado
    divModal.innerHTML = "";
    // mostrar mensaje si no hay nada para mostrar
    if (productos.length === 0) {
      // mensaje en el div headerProductos cuando no ha encontrado productos
      this.mostrarHeader("No se han encontrado productos");
      return false;
    }
    else {
      // for each para cada elemento (producto) encontrado en esta colección (productos) se crean cajas con lo requerido... 
      productos.forEach((producto) => {

        const { id: id_prod,
          nombre: nombre_prod,
          precio: precio_prod,
          img: img_prod,
          cantidad: cant_prod,
          descripcion: descripcion_prod } = producto;

        // crear caja 
        let modal = document.createElement('div');
        // agrega cada caja con una clase específica
        modal.classList.add('div');
        // agrega el ID para identificar fácilmente
        modal.setAttribute('id', 'div_' + producto.id);
        // generar contenido (Solo la para productos destacados) de la caja con su id, nombre, ruta de imagen, enlace url 
        modal.innerHTML = `
                          <div class="modal fade" id="modal${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5 pb-0" id="exampleModalLabel">${producto.nombre}</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  <img src="./${producto.img}" class="card-img-top" alt="${producto.nombre}" />
                                </div>
                                <div class="modal-footer">
                                  <small> ${producto.descripcion}</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          `;
        // caja dinámica generada por casa elemento encontrado
        divModal.appendChild(modal);
      })
    }
  }

  // Buscar productos
  buscar(q) {
    let resultado = productos.filter(producto => producto.nombre.toLowerCase().includes(q.toLowerCase()) || producto.descripcion.toLowerCase().includes(q.toLowerCase()));
    this.cargaProductos(resultado);
  }

  // función que agrega el producto al carrito después de dal clic en agrega el producto (icono carrito de cada producto)
  addCart(infoProducto) {
    // true o false
    const existe = carrito.some(producto => producto.id === infoProducto.id);

    if (existe) {
      const articulos = carrito.map(producto => {
        // si el producto existe, entonces se aumenta la cantidad del contador (cant 2, cant 3, etx)
        if (producto.id === infoProducto.id) {
          // aumento cantidad y lo retorno
          producto.cantidad++;
          return producto;
        }
        // si no lo encuentra, se retorna tal cual 
        else {
          return producto;
        }
        carrito = articulos;
      })

      //alert("Se actualizó la cantidad de productos")
      Toastify({
        text: "Se actualizo la cantidad del producto",
        duration: 2000,
        gravity: 'top',
        style: {
          background: "linear-gradient(to right, #0BC9AC, #7FDBD8)",
        },
        position: "center"

      }).showToast();
    }
    else {
      // como no existe, se agrega (cant 1)
      carrito.push(infoProducto);
      //alert("Se agregó el producto exitosamente");
      Toastify({
        text: "Se agregó el producto exitosamente",
        duration: 2000,
        gravity: "top",
        style: {
          background: "linear-gradient(to right, #0BC9AC, #7FDBD8)",
        },
        position: "center"

      }).showToast();
    }
    // se actualiza el carrito
    this.actualizarCarrito();
  }

  // se actualiza el carrito cada vez que se agrega un producto
  actualizarCarrito() {
    // actualiza el contador que arranca en 0
    this.actualizarContador();
    // plasma el cambio
    this.mostrarCarrito();
    // guarda el estado del carrito en local storage así se refresque la página
    this.guardarCarrito();
  }

  actualizarContador() {
    let totalProductos = this.contarProductos();
    // el id a cambiar
    let countCarrito1 = document.querySelector("#cuentaProductos1");
    countCarrito1.innerHTML = parseInt(totalProductos);
    let countCarrito2 = document.querySelector("#cuentaProductos2");
    countCarrito2.innerHTML = parseInt(totalProductos);
  }

  // conteo productos
  contarProductos() {
    // inicia en 0
    let contadorProductos = 0;
    // de lo que tengo en el carrito seleccionado hago un foreach ...para cada producto encontrado mira cantidad y suma otra... 
    carrito.forEach((producto) => {
      contadorProductos = contadorProductos + parseInt(producto.cantidad);
    })
    // una vez que recorre, devuelve la estrura del producto
    return contadorProductos;
  }
  
  // Se quitan los productos del carrito
  eliminarArticulo(id) {
    Swal.fire({
      title: '"¿Esta seguro de eliminar el producto?"',
      showCancelButton: true,
      cancelButtonColor: '#F391A8',
      confirmButtonText: 'Si, eliminarlo',
      confirmButtonColor: '#6FE5CF',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter(articulo => articulo.id != id);
        this.actualizarCarrito();
        this.mostrar_notificacion("el articulo fue eliminado del carrito", 2000, "top", "center", "");
      }
    })
  }
  // Al comprar, se vacía el carrito
  hacerPedido(id) {
    Swal.fire({
      title: '"¡Pedido realizado!"',
      text: "Gracias por confiar en nosotros",
      confirmButtonColor: '#6FE5CF',
      icon: 'success',
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = [];
        this.actualizarCarrito();
      }
    })
  }


  // se guarda el contenido del carrito en local storage
  guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  //crea una función genérica para mostrar mensaje (refresca y muestra)
  mostrarHeader(msj) {
    //detectar el id
    const headerProductos = document.querySelector("#headerProductos");
    // a este id con innerHTML es igual al mensaje
    headerProductos.innerHTML = msj;
  }


  //mostrar carrito
  mostrarCarrito() {
    let detalleCarrito = document.querySelector("#idCarrito");
    detalleCarrito.innerHTML = "";
    
    let total = 0;
    carrito.forEach((producto) => {
      const row = document.createElement("div");
      
      row.classList.add("row");
      total = total + (producto.precio * parseInt(producto.cantidad));
      row.innerHTML = `
                
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${producto.img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${producto.nombre}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${producto.precio}
                        </div>

                        <div class="col-2 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${producto.cantidad}
                        </div>

                        <div class="col-1 d-flex align-items-center justify-content-center p-2 border-bottom">
                            <a href="javascript:eliminar(${producto.id})">
                              <i class="bi bi-x-square"></i>
                            </a>
                        </div>

                      `;
      detalleCarrito.appendChild(row);
    })
    
    let row = document.createElement('div');
    row.classList.add('row');

    row.innerHTML = `
    
                      <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                          Total a pagar:
                      </div>
                      <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                          <b> $ ${total}</b>
                      </div>
                      <div class="col-12 d-flex align-items-center justify-content-center p-4 border-bottom">
                          <a class="btn btn-primary" href="javascript:comprar()" id="compra"> Finalizar compra </a>
                      </div>
                      
                    `;
    
    // html en el carrito
    detalleCarrito.appendChild(row);

    // si el carrito está vacío, entonces el boton finalizar se oculta
    if (carrito.length === 0) {
      document.getElementById("compra").style.display = "none";
    } else {
      document.getElementById("compra").style.display = "block";
    };
    
  }

  mostrar_notificacion(texto, duracion, gravedad, posicion, estilo) {

    Toastify({
      text: texto,
      duration: duracion,
      gravity: gravedad,
      position: posicion,
      style: {
        background: "linear-gradient(to right, #0BC9AC, #7FDBD8)",
      }

    }).showToast();


  }
  
} 