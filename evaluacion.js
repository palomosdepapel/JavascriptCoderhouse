
//Verifica modos de ignición de  acuerdo a la velocidad y altitud del drone
// La altitud se mide en pies (FT) y la velocidad en nudos (KTS)
// La velocidad de escape de la gravedad terrestre es 21749.5 KTS 


//let estado = confirm("¿Está dentro de la atmósfera terrestre?");
let altitud = prompt("Ingrese su altitud");
let velocidad = prompt("Ingrese su velocidad");
const espacio = " "

if ((altitud >= 300000) || (velocidad >= 22000)) {
    console.log("Su altitud es mayor o igual a" + espacio + altitud + espacio + "pies. Está en el espacio exterior y tiene activados los hiperpropulsores");
}
else if  (altitud >= 1000) {
    console.log("Su altitud es mayor o igual a" + espacio + altitud + espacio + "pies. Está en la atmósfera terrestre y tiene activadas las turbinas");
}
else if  (velocidad >= 1) {
    console.log("Su altitud es mayor o igual a" + espacio + altitud + espacio + "pies. Está en la atmósfera terrestre y tiene activadas las turbinas");
}
else if  ((altitud >=1) || (velocidad = 0)) {
    console.log("Su altitud es mayor o igual a" + espacio + altitud + espacio + "pies. Está en la atmósfera terrestre y está levitando");
}
else{
    console.log("Su altitud es igual a" + espacio + altitud + espacio + "pies. Está en la superficie terrestre y está preparado para volar");
}
