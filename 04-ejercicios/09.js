/**
 * Crear un algoritmo que devuelva un
 * array de objetos en base a pares.
 * 
 * En este ejercicio realizaremos la operación inversa del ejercicio anterior
 * 08.js.  Tendremos un array de pares y lo que tenemos que conseguir es crear
 * una función que nos devuelva  un array donde cada uno de los elementos
 * sea un objeto.
 * 
 * 
 */

let pairs = [ // Soy un array de pares
    [1, { name: "Fernando"}],
    [2, { name: "Esteban"}],
    [3, { name: "Laura"}],
];

// El resultado esperado es el siguiente
let array = [
    { id: 1, name: 'Fernando'},
    { id: 2, name: 'Esteban'},
    { id: 3, name: 'Laura'},
];


//Solución
function toCollection(arr) { // arr es [[ 1,{name:..}], [ 2,{name:..}], [ 3,{name:..}] ]
                             //             idx[0]          idx[1]           idx[2]
                             //            elemento[]      elemento[]       elemento[]
                             //        [     [0,1]    ,       [0,1]   ,       [0,1] ]   
    let collection = []; //array que recibe los datos
    for(idx in arr){ // con el for... in ingresamos al indice y no al valor
        let elemento = arr[idx];
        console.log('Yo soy elemento',elemento,'con idx: ',idx);
        collection[idx] = elemento[1];
        console.log('Yo soy elemento[1] de esta iteración: ', elemento[1]);
        console.log(collection[idx]);
        collection[idx].id = elemento[0];//agregamos la propiedad .id, coloca el elemento[0] 
                                         //como id de collection
        console.log('Yo soy elemento[0] de esta iteración: ', elemento[0]);
        console.log(collection[idx].id );

    }
    return collection;
    

}
//

let resultado = toCollection(pairs);
console.log(`Soy resultado ${resultado}`, resultado);
console.log(`Soy lo que esperabas ${array}`, array);