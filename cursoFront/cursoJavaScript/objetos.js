//* Creacion de un Objeto, donde "this" hace referencia a la variable
//* en este caso "miAuto"

let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
  };
  
console.log(miAuto.detalleDelAuto());

//* Funciones constructuras, nos ayudan a crear objetos en caso de requerir
//* mas informacion, no creando las variables 1 por 1

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autos = [];

for (let i = 0; i < 30; i++) {
    
    let marca = prompt(`Ingrese la marca del carro`);
    let modelo = prompt(`Ingrese el modelo del auto`);
    let annio = prompt(`Ingrese el año del auto`);
    autos.push(new auto(marca, modelo,annio));
    
}

console.log(autos)


//* Playground 

//* Este objeto puede contener diferentes propiedades. 
//* Debes asegurarte de que tenga la propiedad licensePlate 
//* (la placa del auto). Si sí la tiene, devuelve el objeto original 
//* con la propiedad drivingLicense como true. Si no la tiene, 
//* devuelve el objeto original con la propiedad drivingLicense como false.

function solution(car) {
    if (car.licensePlate === null || car.licensePlate === undefined) {
      car.drivingLicense = false;
    }
    else {
      car.drivingLicense = true;
    }
    return car;
  }