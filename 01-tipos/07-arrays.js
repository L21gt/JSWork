let soyArrayVacia = [];  // array literal
let soyArray = ['busqueda', 'ordemaniento','predictivos', 'probabilisticos'];

console.log(soyArray[0]);  // en el index [0] esta 'busqueda'
console.log(soyArray[3]);  // en el index [3] esta 'probabilisticos'

soyArray[4] = 'optimizacion';  //agregar un valor de la array en el index [4]
console.log(soyArray);

console.log(typeof soyArray);  // Saber el tipo del array

console.log('la longitud es: ', soyArray.length);  // es una propiedad, pero parece metodo