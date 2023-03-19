// let frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

// let masFrutas = frutas.push("Uvas");
// console.log(frutas);



//* variable.push() sirve para insertar un elemento al final de un array
//* variable.pop() elimina el ultimo elemento de un array
//* variable.unshift() inserta un elemento al inicio de un array
//* variable.shift() elimina el primer elemento de un array
//* variable.indexOf("contenido") te regresa la posicion en el array del contenido que estas buscando



solution(["Huevo", "Gallina", "Vaca"])

function solution(arraySecreto){
for (let i = 0; i < arraySecreto.length; i++) {
    const element = arraySecreto[i];
    if (typeOf (element) == "string") {
        return true
    }else{
        return false
    }
}
}


//* la funcion inserta un estudiante al final, y si es el parametro
//* deathCount es mayor a 0 elimina la cantidad de veces en el array
//* y al final inserta el nombre al final del array

function solution(estudiantes, deathCount, nuevo) {
    if (deathCount == 0){
      estudiantes.push(nuevo)
      console.log(estudiantes)
      return estudiantes;
      
    } else if (deathCount > 0){
      for (let i = 0; i < deathCount; i++) {
        const item = estudiantes[i];
        estudiantes.pop(item)
      }
       estudiantes.push(nuevo)
    }
    console.log(estudiantes)
}

solution(["Nico", "Zule"], 0, "Santi")
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
solution(["Nath","Luisa","Noru"], 2, "Cami");