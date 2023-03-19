//Funciones declarativas

function miFuncion(){
    return 3;
}

miFuncion();

//funciones de expresion - funciones anonimas

let miFuncion = function(a,b){
    return a + b;
}

miFuncion();

/////////////////////////////////////////
let miNombre = "Ernesto"

function nombre(){
    let miApellido = "Garcia Lechuga"
    console.log(`Hola me llamo ${miNombre} ${miApellido}`)
}
nombre();

////////////////////////////////////////////