/**
 * 
Map() en JavaScript se refiere al objeto Map, que es una estructura de datos 
que almacena pares clave-valor y mantiene el orden de inserción de las claves. 
A diferencia de los objetos, las claves en un Map pueden ser de cualquier tipo,
 incluidos objetos y valores primitivos. Esto lo hace útil para almacenar 
asociaciones de datos más complejas que las que se pueden lograr con un objeto normal.
*¿Para qué se utiliza?
    + Almacenar datos asociados: Puede usarse para almacenar información asociada a una clave, 
     como un diccionario.
    + Mantener el orden de inserción: A diferencia de los objetos, un Map garantiza que las 
      claves se mantendrán en el orden en que se insertaron.
    + Iterar de manera predecible: Al iterar sobre un Map, los elementos se devuelven en 
      el orden en que se insertaron, lo que puede ser útil en ciertos casos.
 */

      let mapa = new Map(); //estructura de datos que almacena pares clave-valor 
                      //y mantiene el orden de inserción de las claves.
// Agregar elementos al Map
mapa.set('a', 1);
mapa.set('b', 2);
mapa.set('c', 3);
mapa.set(1, 3); // esto solo ejemplifica que la clave es de cualquier tipo
mapa.set(2, 3); // no es un caso práctico y claramente no es lógico.
mapa.set(0, 3);


// Acceder a un valor utilizando la clave
console.log(mapa.get('a')); // Imprime: 1
console.log(mapa.get(1));
console.log(mapa);
alert("He comprendido el concepto");
// Iterar sobre los elementos del Map en el orden de inserción


// Iterar sobre los elementos del Map en el orden de inserción
for (let [clave, valor] of mapa) {
    console.log(`${clave} es ${valor}`);
}


// Imprime:
// a = 1
// b = 2
// c = 3
let valorB = mapa.get('b');
console.log(valorB);
//Otra forma de crear maps
let mapaDos = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);


console.log(mapaDos.get('a')); // Imprime: 1
console.log(mapaDos.get('b')); // Imprime: 2
console.log(mapaDos.get('c')); // Imprime: 3
alert("He comprendido el concepto");
let mapaTres = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);


console.log(`Utilizando for-of`);
for (let [clave, valor] of mapaTres) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
}
alert("He comprendido el concepto");

