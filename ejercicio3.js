const prompt = require('prompt-sync')();
let opcion;

do {
    console.log("Menu");
    console.log("/////////////");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero");
    console.log("3. Recargar");
    console.log("4. Salir");
    opcion = prompt("Elige una opción: ");
    if(opcion === "1"){
        console.log("Tu saldo es: $$$");
    }else if(opcion === "2"){
        console.log("enviando dinero...");
    }else if(opcion === "3"){
        console.log("recargando...");
    }else if(opcion === "4"){
        console.log("Saliendo del menú");
    }else{
        console.log("Opción inválida. Intenta de nuevo.");
    }
} while(opcion !== "4");