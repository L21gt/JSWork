// Precedencia

//Multiplicación antes que Suma
let resultaUno = 10 + 5 * 2; // Primero se multiplica 5 * 2, luego se suma 10
console.log(resultadoUno); // Resultado: 20

//Parentesis para modificar la precedencia
let resultadoDos = (10 + 5) * 2; // Los paréntesis fuerzan a sumar 10 + 5 primero, luego se multiplica por 2
console.log(resultadoDos); // Resultado: 30

//Operadores de Incremento/Decremento tienen mayor precedencia que la Suma
let xTres = 5;
let resultadoTres = xTres++ + 2; // El operador ++ se ejecuta primero, luego se suma 2
console.log(resultadoTres); // Resultado: 7
console.log(xTres); // x ahora es 6

//Asignación tiene menor precedencia que la Suma
let xCuatro = 5;
let yCuatro = 10;
xCuatro += yCuatro * 2; // Primero se multiplica y * 2, luego se suma a x
console.log(xCuatro); // Resultado: 25



//Asociatividad
/**       operadores binarios
 *  En JavaScript, la mayoría de los operadores binarios son asociativos 
 * de izquierda a derecha, lo que significa que se evalúan de izquierda
 * a derecha cuando tienen el mismo nivel de precedencia.
*/

let resultado = 10 + 5 + 2; // Primero se suma 10 + 5, luego el resultado se suma con 2
console.log(resultado); // Resultado: 17


/**       operadores de asignación
 * Por otro lado, los operadores de asignación (=, +=, -=) son asociativos
 * de derecha a izquierda, lo que significa que se evalúan de derecha a izquierda:
 */

let x = 5;
let y = 10;
y += x += 2; // Primero se evalúa x += 2, luego y += (resultado de x += 2)
console.log(x, y); // Resultado: x = 7, y = 17
