/**   Ejercicio_01
 * Escribe una funcion que devuelva el numero
 * mayor de dos numeros arbitrarios
 */

function cualEsMayor(a, b) {
    return a > b ? a : b;
}


let mayor = cualEsMayor(10,5);

console.log(mayor);
console.log(`El mayor en cualEsMayor es ${mayor}`) // Interpolacion

function cualesMayorDos(a,b){  
    return a > b ? a : b;
}

mayor = cualesMayorDos(20,10)

console.log(mayor);
console.log(`El mayor cualEsMayorDos es ${mayor}`);