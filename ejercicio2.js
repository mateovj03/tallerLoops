const prompt = require('prompt-sync')();

let pinCorrecto = "1234";
let numeroIntentos = 0;
let intento = prompt("Escribe tu PIN: ");

while(intento !== pinCorrecto){
    numeroIntentos++;
    console.log("PIN incorrecto. Intenta de nuevo.");
    intento = prompt("Escribe tu PIN: ");
}
console.log("Bienvenido a Nequi!");
