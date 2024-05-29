/**
 * for...of es una estructura de bucle en JavaScript que se utiliza
 *  para iterar sobre elementos de objetos iterables como arrays, strings,
 *  maps, sets, etc. Proporciona una forma más sencilla y legible
 *  de iterar sobre estos elementos en comparación con un bucle for tradicional.
 */
let nombres = ['Juan', 'Magdalena', 'Pedro'];
for (let valor of nombres) {
    console.log('Con for-of',valor);
}
//Juan
//Magdalena
//Pedro


//Si necesitas el índice
for (let [indice, valor] of nombres.entries()) {
    console.log(indice, valor);
}



//puedes obtener lo mismo con for-of y con while
let i = 0;
while (i < nombres.length) {
    console.log("Con while",nombres[i]);
    i++;
}
//Juan
//Magdalena
//Pedro


