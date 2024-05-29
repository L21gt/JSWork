/**
 * Construir una función que  permita obtener un elemento por su
 * índice.
 * Debemos validar que el valor que pasemos como índice no sea menor a cero
 * y que el elemento este en el rango del array
 */

function getbyIdx(arr, idx) {
    if(idx <=0 || idx>=arr.length){ // validación
        return 'Elemento no existe';
    }
    return arr[idx];
}
       

let resultado = getbyIdx([1,2,3,4,5], 3);
console.log('El valor es: ',resultado)