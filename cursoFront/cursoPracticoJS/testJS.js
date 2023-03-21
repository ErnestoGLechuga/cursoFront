let nombre = "Ernesto";
let apellido = "Lechuga";
let nombreUsuarioPlatzi = "Bicerya";
let edad = 30;
let email = "bicerya2023@gmail.com"
let adulto = true;
let ahorros = 2000;
let deudas = 5000;

let nombreCompleto = `Mi nombre es ${nombre} ${apellido}`;
let dineroReal = ahorros - deudas;

function presentacion(name, lastname,nickname){
    let completeName = `${name} ${lastname}`
    return console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`)
}
presentacion("Ernesto", "Lechuga", "Tuercas")

////////////////////////////////////////////////////

let tipoDeSuscripcion = "Free";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else{
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

///////////////////////////////////////////////////


let tiposDeSuscripciones = ["Free","Basic","Expert","ExpertPlus"];

let accesosDeUsuarios = ["Solo puedes tomar los cursos gratis","Puedes tomar casi todos los cursos de Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]

for (let i = 0; i < tiposDeSuscripciones.length; i++) {
    let mensaje = `Tienes una suscripcion ${tiposDeSuscripciones[i]}, por lo que ${accesosDeUsuarios[i]}`
    console.log(mensaje)
}


//* Otra forma de resolver el problema utilizando un objeto y una funcion es de la siguiente manera.

let tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function conseguirTipoSuscripcion(suscripcion){
    if(tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }

    console.warn(`Ese no es un tipo de suscripcion que exista actualmente`)
}
///////////////////////////////////////////////////

let i = 0;

while (i < 5) {
    console.log(`El valor de i es: ${i}`)
    i++
}

let i2 = 10;

while (i2 >= 2) {
    console.log(`El valor de i es: ${i2}`)
    i2--
}

///////////////////////////////////////////////////////


let respuesta = prompt(`Cual es el resultado de la suma de 2 + 2?`);

function validarResultado(validacion) {
   if (validacion == 4) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
validarResultado(respuesta);



///////////////////////////////////////////////////////////


function primerElemento(elemento){
    console.log(elemento[0])
}
primerElemento(["Ernesto", "Yamel", "Erya", "Tuercas", "Pancho"])



function todosLosElementos(elementos){
    for (let i = 0; i < elementos.length; i++) {
        let element = elementos[i];
        console.log(element)
    }
}
todosLosElementos(["Ernesto", "Yamel", "Erya", "Tuercas", "Pancho"])



let miCarro = {
    marca: 'Ford',
    modelo: 'Mustang',
    annio: 1969
  };
  
  function elementosDeUnObjeto(objeto) {
    for (let carro in objeto) {
      console.log(objeto[carro]);
       }
   }
  elementosDeUnObjeto(miCarro);


  ////////////////////////////////////////////////////////

