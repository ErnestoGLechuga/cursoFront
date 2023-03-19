let articulos = [
    {nombre: `Bici`,costo: 3000,},
    {nombre: `Tv`,costo: 2500,},
    {nombre: `Libro`,costo: 320,},
    {nombre: `Celular`,costo: 10000,},
    {nombre: `Laptop`,costo: 20000,},
    {nombre: `Teclado`,costo: 500,},
    {nombre: `Audifonos`,costo: 1700,}
];


//* Metodo de filtrado generando un nuevo array, con todas las conicidencias dentro del filtro aplicado
let articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
console.log(articulosFiltrados)



//* Metodo de mapeo generando un nuevo array

let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
console.log(nombreArticulos)



//* Metodo "Find" para buscar, regresando un valor booleano, generando un nuevo array, asi mismo solo devuelve la primer coicidencia

let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === `Laptop`
});
console.log(encuentraArticulo)


//* Metodo "forEach()" regresa el nombre del array especificado (nombre, precio, edad, estarura, etc...) filtrado sobre el array, pero no genera uno nuevo

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


//* Metodo "Some()" regresa una validacion en booleano y genera un array

let articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos)