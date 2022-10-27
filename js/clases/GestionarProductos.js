  // diferentes acciones
class GestionarProductos{
  // método iniciar
  iniciar(){
    // lo productos que quiero cargar son... el contenido es este...
    productos = [
      {
        "id": 1,
        "nombre": "Desayuno Aniversario",
        "descripcion": "",
        "precio": 153990,
        "stock": 50,
        "img": "img/0001.jpg",
        "destacado": 1,
        "categoria": "Cajas sorpresas",
        "link": "producto02.html",
        "favorito": 1
      },
      {
        "id": 2,
        "nombre": "Un momento muy especial",
        "descripcion": "Llevamos hasta tu casa o lugar de trabajo todos los detalles con los que deseas expresar tus sentimientos.",
        "precio": 269990,
        "stock": 50,
        "img": "img/0002.jpg",
        "destacado": 1,
        "categoria": "Anchetas",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 3,
        "nombre": "Bouquet 12 rosas surtidas",
        "descripcion": "",
        "precio": 66900,
        "stock": 50,
        "img": "img/0003.jpg",
        "destacado": 1,
        "categoria": "Flores",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 4,
        "nombre": "Chocolates en ramillete",
        "descripcion": "",
        "precio": 64990,
        "stock": 50,
        "img": "img/0004.jpg",
        "destacado": 0,
        "categoria": "Ramilletes",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 5,
        "nombre": "Arreglo caja de girasoles y chocolates Ferrero",
        "descripcion": "",
        "precio": 98990,
        "stock": 50,
        "img": "img/0005.jpg",
        "destacado": 0,
        "categoria": "Flores",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 6,
        "nombre": "Bombón y sus amigas",
        "descripcion": "",
        "precio": 175900,
        "stock": 50,
        "img": "img/0006.jpg",
        "destacado": 1,
        "categoria": "Anchetas",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 7,
        "nombre": "Desayuno Un detalle solo para ti (caja decorada)",
        "descripcion": "",
        "precio": 85990,
        "stock": 50,
        "img": "img/0007.jpg",
        "destacado": 0,
        "categoria": "Cajas sorpresas",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 8,
        "nombre": "Caja de rosas",
        "descripcion": "",
        "precio": 69990,
        "stock": 50,
        "img": "img/0008.jpg",
        "destacado": 0,
        "categoria": "Flores",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 9,
        "nombre": "Cerveza alemana y chocolates (con bombas)",
        "descripcion": "",
        "precio": 81990,
        "stock": 50,
        "img": "img/0009.jpg",
        "destacado": 0,
        "categoria": "Cajas sorpresas",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 10,
        "nombre": "Arreglo de 3 girasoles, peluditos, Baileys y chocolatina Lindt",
        "descripcion": "",
        "precio": 199990,
        "stock": 50,
        "img": "img/0010.jpg",
        "destacado": 0,
        "categoria": "Anchetas",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 11,
        "nombre": "Flores con naranjas y globo burbuja",
        "descripcion": "Variedad de flores con naranjas y globo burbuja en caja coleccionable",
        "precio": 89990,
        "stock": 50,
        "img": "img/0011.jpg",
        "destacado": 0,
        "categoria": "Anchetas",
        "link": "producto02.html",
        "favorito": 0
      },
      {
        "id": 12,
        "nombre": "Arreglo de 3 girasoles, statice, Baileys y chocolatina Lindt",
        "descripcion": "",
        "precio": 201990,
        "stock": 50,
        "img": "img/0012.jpg",
        "destacado": 0,
        "categoria": "Anchetas",
        "link": "producto02.html",
        "favorito": 0
      }
    ]
    // filter para traer sólo los productos destacados (genera un nuevo arreglo)
    let productosDestacados = productos.filter(prod => prod.destacado == 1);
    // manipular en la web con this. Porque va aser una función de esta clase en particular: gestionarProductos
    this.cargaProductos(productosDestacados);
    //llamar funciones
    this.mostrarCarrito();
    this.actualizarContador();
  }


  //método cargar productos. Recibe una colección de productos
  cargaProductos(productos){
    //identifico con DOM el contenedor donde quiero mostra los productos destacados
    const divProductos = document.querySelector("#productos"); // o get elementByID
    // Resetear si tenía algo cargado
    divProductos.innerHTML = "";
    // mostrar mensaje si no hay nada para mostrar
    if(productos.length === 0){
      // mensaje en el div headerProductos cuando no ha encontrado productos
        this.mostrarHeader("No se han encontrado productos");
        return false;
    } 
    else{
      // for each para cada elemento (producto) encontrado en esta colección (productos) se crean cajas con lo requerido... 
      productos.forEach( (producto) => {

        const {  id : id_prod,
                  nombre : nombre_prod,
                  precio: precio_prod,
                  img : img_prod,
                  cantidad : cant_prod ,
                  descripcion : descripcion_prod} = producto;
        
        // crear caja 
        let prod = document.createElement('div');
        // agrega cada caja con una clase específica
        prod.classList.add('swiper-slide');
        // agrega el ID para identificar fácilmente
        prod.setAttribute('id','row_'+producto.id);
        // generar contenido (Solo la para productos destacados) de la caja con su id, nombre, ruta de imagen, enlace url 
        prod.innerHTML = `<div class="card">
                            <a class="favorite" href="javascript:addFavorito(${producto.id})"><i class="bi bi-bookmark"></i></a>
                            <a href="${producto.link}">
                              <img src="./${producto.img}" class="card-img-top scale-up-center" alt="${producto.nombre}" />
                            </a>
                            <div class="card-body">
                              <h3>${producto.nombre}</h3>
                              <div class="data">
                                <p class="precio">$${producto.precio}</p>
                              </div>
                              <a class="addCart grow blink-1" href="javascript:addCarrito(${producto.id})"><i class="bi bi-cart2"></i></a>
                            </div>
                          </div>`;
                          // caja dinámica generada por casa elemento encontrado
        divProductos.appendChild(prod);
      })
    }
  }


  // Buscar productos
  buscar(q) { 
    let resultado = productos.filter( producto => producto.nombre.toLowerCase().includes( q.toLowerCase() ) || producto.descripcion.toLowerCase().includes( q.toLowerCase() ));      
    this.cargaProductos( resultado );                   
  }
 


  // función que agrega el producto al carrito después de dal clic en agrega el producto (icono carrito de cada producto)
  addCart(infoProducto){
    // true o false
    const existe = carrito.some( producto => producto.id === infoProducto.id);

   
    if(existe){
      const articulos = carrito.map( producto => {
        // si el producto existe, entonces se aumenta la cantidad del contador (cant 2, cant 3, etx)
        if(producto.id === infoProducto.id){
          // aumento cantidad y lo retorno
          producto.cantidad++;
          return producto;
        }
        // si no lo encuentra, se retorna tal cual 
        else{
          return producto;
        }
        carrito= articulos;
      })
        
        alert("Se actualizó la cantidad de productos")
    }
    else
    {
      // como no existe, se agrega (cant 1)
    carrito.push(infoProducto);
    alert("se agregó el producto exitosamente");
    }
  // se actualiza el carrito
  this.actualizarCarrito();
  }



  // se actualiza el carrito cada vez que se agrega un producto
  actualizarCarrito(){
    // actualiza el contador que arranca en 0
    this.actualizarContador();
    // plasma el cambio
    this.mostrarCarrito();
    // guarda el estado del carrito en local storage así se refresque la página
    this.guardarCarrito();
  } 



  actualizarContador(){
    let totalProductos = this.contarProductos();
    // el id a cambiar
    let countCarrito1 = document.querySelector("#cuentaProductos1");
    countCarrito1.innerHTML=  parseInt(totalProductos) ;
    let countCarrito2 = document.querySelector("#cuentaProductos2");
    countCarrito2.innerHTML=  parseInt(totalProductos) ;
  }



  // conteo productos
  contarProductos(){
    // inicia en 0
    let contadorProductos = 0 ;
    // de lo que tengo en el carrito seleccionado hago un foreach ...para cada producto encontrado mira cantidad y suma otra... 
    carrito.forEach((producto) => {
      contadorProductos = contadorProductos + parseInt(producto.cantidad);
    })
    // una vez que recorre, devuelve la estru
    return contadorProductos;
  }



  // Se quitan los productos del carrito
  eliminarArticulo(id) { 
    let resp = confirm("Esta seguro de eliminar el producto ?");
    if (resp)  {

        carrito = carrito.filter( producto => producto.id != id);
        this.actualizarCarrito();
        alert("El articulo fue eliminado del carrito");
    }       
  }


  // se guarda el contenido del carrito en local storage
  guardarCarrito(){
    localStorage.setItem('carrito', JSON.stringify( carrito ));
  }


 //crea una función genérica para mostrar mensaje (refresca y muestra)
  mostrarHeader(msj){
    //detectar el id
    const headerProductos = document.querySelector("#headerProductos");
    // a este id con innerHTML es igual al mensaje
    headerProductos.innerHTML = msj ;
  }


  //mostrar carrito
  mostrarCarrito(){
    let detalleCarrito = document.querySelector("#idCarrito");
    detalleCarrito.innerHTML = "";

    let total = 0;
    carrito.forEach((producto)=>{
      const row = document.createElement("div");
      row.classList.add("row");
      total += parseInt(producto.precio);
      row.innerHTML = `
                
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${producto.img}" width="80"/>
                        </div>

                        <div class="col-4 d-flex align-items-center p-2 border-bottom">
                            ${producto.nombre}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${producto.precio}
                        </div>

                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${producto.cantidad}
                        </div>

                        <div class="col-1 d-flex align-items-center justify-content-center p-2 border-bottom">
                            <a href="javascript:eliminar(${producto.id})">
                              <i class="bi bi-dash-square"></i>
                            </a>
                        </div>
      `;
      detalleCarrito.appendChild(row);
    })

    let row = document.createElement('div');
    row.classList.add('row');
    
    row.innerHTML = `   <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                            Total a pagar:
                        </div>
                        <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                            <b> $ ${total}</b>
                        </div>`;

    // html en el carrito
    detalleCarrito.appendChild(row);
  }

}