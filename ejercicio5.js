let usuarios = [
    {nombre: "Juan", movimientos: [38000, -12000, 1350000]},
    {nombre: "Maria", movimientos: [20000, -5000, 15000]},
    {nombre: "Pedro", movimientos: [10000, -3000, 25000]}
];

for(let usuario of usuarios){
    let totalUsuario = 0;
    for(let movimiento of usuario.movimientos){
        totalUsuario += movimiento;
    }
    console.log("Usuario: ", usuario.nombre, " - Total: ", totalUsuario);
}
