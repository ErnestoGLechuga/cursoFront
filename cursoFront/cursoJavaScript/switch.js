let numero = 1;

switch (numero) {
    case 1:
        console.log(`Soy uno!`);
        break;
    case 2:
        console.log(`Soy un 2!`);
        break;
    case 100:
        console.log(`Soy un 100!`);
        break;    
    default:
        console.log(`No soy nada`);
        break;
}

switch (article) {
    case `computadora`:
        console.log(`Con mi computadora puedo programar usando JavaScript`);
        break;
    case `celular`:
        console.log(`En mi celular puedo aprender usando la app de Platzi`);
        break;
    case `cable`:
        console.log(`¡Hay un cable en mi bota!`);
        break;
    default:
        console.log(`Articulo no encontrado`);
        break;
}