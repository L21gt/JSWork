/**
 * while, do while, for tienen en común que nosotros podemos
 * calcular cómo vamos a realizar una iteración, 
 * definimos la variable, indicarle la condición y luego lo 
 * que se debe realizar cuando se termine la iteración.
 */

/**
 * for...of es una estructura de bucle en JavaScript que se utiliza
 *  para iterar sobre elementos de objetos iterables como arrays, strings,
 *  maps, sets, etc. Proporciona una forma más sencilla y legible
 *  de iterar sobre estos elementos en comparación con un bucle for, while, do while 
 *  tradicional.
 * 
 *  Lo anterior también se puede realizar con los loops que ya hemos visto, pero 
 * es un poco más laborioso.
 */

let nombres = ['Juan', 'Magdalena', 'Pedro'];

for (let nombre of nombres) { // aquí el of es el truco
    console.log('Con for-of',nombre);
    alert('Comprende usted el concepto');
}
//Juan
//Magdalena
//Pedro


/**
 *El código for (let [indice, nombre] of nombres.entries()) {...} es una forma de iterar
  sobre un array en JavaScript utilizando el método entries() que devuelve un iterador de
  pares clave/valor para cada índice y valor en el array. 
  0/'Juan'  (clave/valor) , 1 'Magdalena', 2 'Pedro' (clave/valor)


 * nombres.entries(): Este método devuelve un nuevo objeto Iterador que contiene los pares 
   clave/valor para cada índice y valor en el array nombres.
 */
for (let [indice, nombre] of nombres.entries()) {// array.metodo()
    console.log(indice, nombre);
    alert('Comprende usted el concepto');
}

//Es posible obtener lo mismo con for-of y con while
let i = 0;
while (i < nombres.length) {// array.propiedad, devuelve la cantidad de elementos en el array
    console.log("Con while",nombres[i]);//observa la sintaxis array[indice]
    i++;
}
//Juan
//Magdalena
//Pedro