let movimientos = [38000, 0, -12000, 1350000, 47000, -490000, 14000, 0, 48000, -50000, 100000, -20000, 0 , 30000];

for(let i = 0; i < movimientos.length; i++){
    let movimiento = movimientos[i];
    if(movimiento == 0){
        continue;
    }
    if(movimiento > 1000000){
        console.log("posicion del pago a comercio: ", i)
        break;
    }
}

