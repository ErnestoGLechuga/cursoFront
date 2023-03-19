let edad = 18;

if (edad === 18) {
    console.log(`Sera tu primera vez votando!`);
} else if (edad > 18) {
    console.log(`Esta no es tu primera vez votando`);
}else{
    console.log(`Lo sentimos pero aun no tienes la edad para votar`);
}


//operador ternario
condition ? true : false;

let numero = 1;

let resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";

//reto de la clase
//juego de piedra, papel, tijera

function aleatorio(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+1);
}

function eleccion(jugada)
{
    let resultado = ""
    if (jugada == 1)
    {
        resultado = "Piedra🥌";
    }
    else if (jugada == 2)
    {
        resultado = "Papel 📰";
    }
    else if(jugada == 3)
    {
        resultado = "Tijera ✂";
    }
    else
    {
        resultado = "Perdiste";
    }
    return resultado
}

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;


while (triunfos < 3 && perdidas < 3)
{
    pc = aleatorio(1,3);
    jugador = prompt("Elige: 1 para pieda, 2 para papel, 3 para tijera");

    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    //combate

    if(pc == jugador)
    {
        alert("Empate");
    } 
    else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2))
    {
        alert("Ganaste!!!!");
        triunfos = triunfos + 1;
    } 
    else
    {
        alert("Perdiste! 😢")
        perdidas = perdidas + 1;
    }
}

alert(`Ganaste ${triunfos} veces. Perdiste ${perdidas} veces.`)