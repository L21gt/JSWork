/**
 * Crear un algoritmo que devuelva la cantidad
 * de números positivos de un array
 */
let array = [4, 10, 14, 30, -10, -200, 110];

function cuantosPositivos(arr){
    let cantidadPositivos = 0;
    for(numero of arr){
        if (numero >= 0){
            cantidadPositivos++;
        }
    }
    return cantidadPositivos;

}

let resultado = cuantosPositivos(array);
console.log('La cantidad de numeros positivos es:',resultado);