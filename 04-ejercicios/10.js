/**
 * Crear un array de longitud N, y que sus 
 * elementos sean números de 1 hasta N
 */
let longitud = Number(prompt('Ingrese un número positivo'));

function crearArray(n) {
    if(n <= 0){
        alert('El número no puede ser negativo');
        return [];
    }
    let newArray = [];
    for(i = 0; i < n ; i++){
        newArray[i] = i + 1;
    }
    return newArray;






}

let resultado = crearArray(longitud);

console.log(resultado);

