/**
 * Crear un algoritmo que devuelva el número menor y mayor
 * de un array
 * 
 * Este algoritmo, generalmente se pregunta en las  entrevistas
 * técnicas.  La prueba es resolverlos sin utilizar built-in functions.
 * Sin iterarlo más de una vez y sin ordenarlo.
 */
// condicion ? expresion_si_verdadero : expresion_si_falso
let array = [4, 10, 14, -10, -200, 110];

function getMenorMayor(arr){
    let menor = arr[0]; // establecer los parámetros para trabajar
    let mayor = arr[0]; // dentro del campo de juego, el array.
    for(numero of arr){ 
        menor = (menor < numero) ? menor : numero; 
        mayor = (mayor > numero) ? mayor : numero; 
    }
    return [menor, mayor]// fin

}

let numeros = getMenorMayor(array);
console.log(numeros);