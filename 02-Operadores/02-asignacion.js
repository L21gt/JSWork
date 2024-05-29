// Operadores de asignación compuesta
let  asignacionCompuesta = 10;
asignacionCompuesta  += 10; // 20
asignacionCompuesta  -= 10; // 10
asignacionCompuesta  *= 10; //100
asignacionCompuesta  /= 10; // 10
asignacionCompuesta  **= 2; // 100
console.log(asignacionCompuesta);

let comparacion = 10;
// operadores de comparación de igualdad
console.log('resultado de == 10 ',comparacion == 10); // true
console.log('resultado de != 10',comparacion != 10); // false
console.log('resultado de == 10',comparacion == '10'); // true????, == intenta convertir los 
                                                      // operandos a un tipo común
// Cuidado con los anteriores, podrián darte problemas 
//Es mejor utilizar los siguientes                            
console.log('resultado de === 10',comparacion === 10);  // true, === operador de igualdad estricta, 
                                                        //  compara valores y tipos de datos
console.log('resultados de === "10"', comparacion === '10');
console.log('resultados de !==',comparacion !== '10');
console.log('resultado de !== 10', comparacion !== 10);


// Operadores de comparacion relacionales
console.log('resutado de > 10', comparacion > 10); // false
console.log('resultado de >= 10',comparacion >= 10); // true
console.log('resultado de < 10',comparacion < 10); // false
console.log('resultado de <=10',comparacion <= 10) // true