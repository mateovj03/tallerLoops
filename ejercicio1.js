let movimientos = [38000, -12000, 1350000, 47000, -490000, 14000];
let total = 0, cantidadRetiros = 0;

for(let movimiento of movimientos){
    total += movimiento
    if(movimiento < 0){
        cantidadRetiros++;
    }
}

console.log("total: ", total);
console.log("cantidad de retiros: ", cantidadRetiros);
