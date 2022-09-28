// Basado en: https://youtu.be/9z6J_JN78Xs?t=311
// La idea es seguir el checklist de un avión o dron (prevuelo - encendido - despegue - ascenso - crucero - descenso - aproximación - aterrizaje - apagado )
// y que todo se muestre en el HUD o panel de información

const espacio = " ";
const velocidadMaxima = 25000;
const velocidadSonido = 666;
const id_Tecnico = "Técnico 49";

/* VERIFICACIÓN DE IDENTIDAD */
function confirmarIdentidad() {
  let nombre = prompt("Ingrese su nombre: ");
  //si el nombre coincide... podrá operar el drone
  if (validarDatos(nombre)) {
    alert("TÉCNICO 49, \n CONFIRMADO");
    iniciarInterfase();
    //en caso contrario...  nunca podrá pilotear el dron
  } else {
    alert("Acceso denegado");
  }
}

function validarDatos(nombre) {
  // if - else simple /////////////////
  if (nombre === id_Tecnico) {
    return true;
  } else {
    return false;
  }
}

function iniciarInterfase() {
  let altitud = parseInt(prompt("Ingrese su altitud en pies", "0"));
  let velocidad = parseInt(prompt("Ingrese su velocidad en nudos", "0"));

  /* Muestra si la velocidad es (super o sub)-sónica y convierte la velocidad en KTS a Mach */
  let Mach = velocidad / velocidadSonido;
  // limito el número a 2 décimas
  let MachconDecimal = Mach.toFixed(2);
  // comparo la velocidad del dron con la constante de la velocidad del sonido
  if (velocidad >= velocidadSonido) {
    console.log(
      "Su velocidad es" +
        espacio +
        velocidad +
        espacio +
        "KTS. Viaja a velocidad supersónica" +
        espacio +
        "(Mach" +
        espacio +
        MachconDecimal +
        ")"
    );
  } else {
    console.log(
      "Su velocidad es" +
        espacio +
        velocidad +
        espacio +
        "KTS. Viaja a velocidad subsónica" +
        espacio +
        "(Mach" +
        espacio +
        MachconDecimal +
        ")"
    );
  }

  /* VERIFICA LOS MODOS DE IGNICIÓN DEL MOTOR de  acuerdo a la velocidad y altitud del drone (BUBBLESHIP)
      La altitud se mide en pies (FT) y la velocidad en nudos (KTS)
      La velocidad de escape de la gravedad terrestre es 21749.5 KTS  */ /////
  // if anidado cuando tenemos más de 2 opciones ///////////////
  if (velocidad >= velocidadMaxima) {
    console.log("Atención, la velocidad máxima es de 25000 KTS");
  } else if (altitud >= 300000 || velocidad >= 22000) {
    console.log(
      "Su altitud es mayor o igual a" +
        espacio +
        altitud +
        espacio +
        "pies. Está en el espacio exterior y tiene activados los hiperpropulsores"
    );
  } else if (altitud >= 1000) {
    console.log(
      "Su altitud es mayor o igual a" +
        espacio +
        altitud +
        espacio +
        "pies. Está en la atmósfera terrestre y tiene activadas las turbinas"
    );
  } else if (velocidad >= 1) {
    console.log(
      "Su altitud es mayor o igual a" +
        espacio +
        altitud +
        espacio +
        "pies. Está en la atmósfera terrestre y tiene activadas las turbinas"
    );
  } else if (altitud >= 1 || (velocidad = 0)) {
    console.log(
      "Su altitud es mayor o igual a" +
        espacio +
        altitud +
        espacio +
        "pies. Está en la atmósfera terrestre y está levitando"
    );
  } else {
    console.log(
      "Su altitud es igual a" +
        espacio +
        altitud +
        espacio +
        "pies. Está en la superficie terrestre y está preparado para volar"
    );
  }

  // Operador ternario (condición) ? verdadero: falso  ///////////
  let potenciaTurbinas = 50;
  let indicadorPotenciaTurbinas =
    potenciaTurbinas > 95
      ? "Atención, potencia excedida"
      : "Las turbinas funcionan con normalidad";
  console.log(indicadorPotenciaTurbinas);

  /* Muestra distintos TIPOS DE HUD (Head Up Display) en el parabrisas del dron */
  //switch case
  let displayHUD = 1;

  switch (displayHUD) {
    case 0:
      console.log("El HUD está en modo - despegue o aterrizaje");
      break;
    case 1:
      console.log("El HUD está en modo - velocidad crucero");
      break;
    case 2:
      console.log("El HUD está en modo - combate");
      break;
    case 3:
      console.log("El HUD está en modo - zona prohibida");
      break;
    case 4:
      console.log("El HUD está en modo - retorno de emergencia");
      break;
    default:
      console.log("HUD Apagado");
      break;
  }

  /* Muestra indicador altitud del HUD (Head Up Display) en el parabrisas del dron al momento de despegar */
  //for
  let indicadorDespegue = [10, 20, 30, 40, 50, 60, 70, 80, 100];

  for (let i = 0; i < indicadorDespegue.length; i++) {
    console.log(indicadorDespegue[i]);
  }
}

// cuadno esta todo cargado se le pide datos al usuario
document.addEventListener("DOMContentLoaded", function () {
  confirmarIdentidad();
});
