//loop For

let estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++) {
  let item = estudiantes[i];
  saludarEstudiantes(item)
}

// ?tambien se puede utilizar el for de la siguiente manera para recorrer un array

for (let estudiante of estudiantes){
  saludarEstudiantes(estudiante)
}



// Loop while

while(estudiantes.length > 0){
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante)
  }



