// let frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

// let masFrutas = frutas.push("Uvas");
// console.log(frutas);


/*
? variable.push() sirve para insertar un elemento al final de un array
? variable.pop() elimina el ultimo elemento de un array
? variable.unshift() inserta un elemento al inicio de un array
? variable.shift() elimina el primer elemento de un array
? variable.indexOf("contenido") te regresa la posicion en el array del contenido que estas buscando
*/


solution(["Huevo", "Gallina", "Vaca"])
//solution([1, "Gallina", "Vaca"])

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