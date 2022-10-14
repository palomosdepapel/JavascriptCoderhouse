let arreglo_navegacion = new Array();
let gen_id = 1;

alert("Bienvenidos al sistema de vuelo");

let flag = true;

while (flag) {
  let mensaje = "Indique la fase de vuelo que desea realizar: ";
  mensaje += "\n1) Cargar nuevo checkpoint ";
  mensaje += "\n2) Salir ";

  let resp = prompt(mensaje);

  switch (resp) {
    case "1":
      ingresar_nuevo_checkpoint();
      break;
    case "2":
      alert("Gracias por volar con nosotros");
      flag = false;
      break;
    case null:
      alert("Gracias por volar con nosotros");
      flag = false;
      break;
    default:
      alert("No ingreso una opcion valida");
  }
}

function ingresar_nuevo_checkpoint() {
  let nav = solicitar_datos_nav();
  if (nav) {
    nav.set_id(gen_id);
    gen_id++;
    arreglo_navegacion.push(nav);
  }
}

function solicitar_datos_nav() {
  let check = true;
  while (check) {
    let msj = "";
    let velocidad = parseFloat(prompt("Ingrese velocidad"));
    let alabeo = parseFloat(prompt("ingrese alabeo"));
    let cabeceo = parseFloat(prompt("Ingrese cabeceo"));
    let guiniada = parseFloat(prompt("Ingrese guiñada"));
    let altitud = parseFloat(prompt("Ingrese altitud"));

    if (isNaN(velocidad)) {
      msj += "\nDebe ingresar un valor numerico en velocidad";
    }
    if (isNaN(alabeo)) {
      msj += "\nDebe ingresar un valor numerico en alabeo";
    }
    if (isNaN(cabeceo)) {
      msj += "\nDebe ingresar un valor numerico en cabeceo";
    }
    if (isNaN(guiniada)) {
      msj += "\nDebe ingresar un valor numerico en guiñada";
    }
    if (isNaN(altitud)) {
      msj += "\nDebe ingresar un valor numerico en altitud";
    }
    if (msj != "") {
      alert(msj);
      check = confirm("Desea cargar de nuevo los datos");
    } else {
      return new Navegacion(velocidad, alabeo, cabeceo, guiniada, altitud);
    }
  }
  return false;
}