//? h1.innerHTML = 'Patito <br> feo'; imprime texto y etiquetas HTML
//* h1.innerText = 'Patito <br> feo'; imprime todo como texto

//? h1.classList.add('rojo'); agrega la clase de la etiqueta
//* h1.classList.remove('rojo'); reemplaza la clase de la etiqueta


const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.getElementById('result');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     event.preventDefault();
//    let sumaInputs = (parseInt(input1.value) + parseInt(input2.value));
//     pResult.innerHTML = `El Resultado de la suma es: ${sumaInputs}`;
// }


btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    //event.preventDefault();
   let sumaInputs = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerHTML = `El Resultado de la suma es: ${sumaInputs}`;
}