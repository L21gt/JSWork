
/**    Ejercicio_01
 * Escribe una función que devuelva el número
 * mayor de dos números arbitrarios
 */

function cualEsMayor(a, b) {
    if (a > b) {
        console.log("a es mayor"); // explicar el tabulado, es opcional
        return a;
    } else { // recuerda que else es opcional, pero muy, muy, útil
        console.log("b es mayor");   
        return b; 

    }
    
}
    
let mayor = cualEsMayor(10,5);
    
console.log(mayor);
console.log(`El mayor en cualEsMayor es ${mayor}`);// interpolación

function cualEsMayorDos(a,b){
    return (a>b) ? a:b;  
}

mayor = cualEsMayorDos(20,10)
console.log(`El mayor cualEsMayorDos es ${mayor}`);