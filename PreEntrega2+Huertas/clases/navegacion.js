/**
 * Clase que modela la entidad dron
 */
class Navegacion {
  /**
   * Constructor
   * @param {*} velocidad velocidad del dron (airspeed)
   * @param {*} alabeo alabeo del dron (roll)
   * @param {*} cabeceo cabeceo del dron (pitch)
   * @param {*} guiniada guiniada del dron (heading)
   * @param {*} altitud altitud del dron (altitude)
   */
  constructor(velocidad, alabeo, cabeceo, guiniada, altitud) {
    this.velocidad = velocidad;
    this.alabeo = alabeo;
    this.cabeceo = cabeceo;
    this.guiniada = guiniada;
    this.altitud = altitud;
  }

  /**
   * Muestra el conjunto de datos de navegación del dron
   */

  mostrar_descripcion() {
    return;
    "Airspeed: " +
      this.velocidad +
      " - " +
      "Roll: " +
      this.alabeo +
      " - " +
      "Pitch: " +
      this.cabeceo +
      " - " +
      "Heading: " +
      this.guiniada +
      " - " +
      "Altitude: " +
      this.altitud;
  }

  /**
     * Setea un nuevo id
     * @param {*} nuevo_id  el nuevo id a setear
     */
  set_id(nuevo_id) {
    this.id = nuevo_id;
  }
}
