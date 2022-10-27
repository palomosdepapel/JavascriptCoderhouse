// clase producto con todas las características:
class Producto{
  //paso los datos a manipular
  constructor(id,nombre,precio,img){
    this.id = id;
    this.nombre = nombre;
    this.precio= precio;
    this.img= img;
    // cantidad en 1 para mantener al menos uno en el carrito
    this.cantidad = 1;
  }
}