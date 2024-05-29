

 
/** Este algoritmo, generalmente se pregunta en las  entrevistas
* técnicas.  La prueba es resolverlos sin utilizar built-in functions.
* Sin iterarlo más de una vez y sin ordenarlo.
*/
// condicion ? expresion_si_verdadero : expresion_si_falso
let array =[];

let cuantosNumeros = parseInt(prompt("Cuántos números quiere ingresar"));

for (j = 1; j <= cuantosNumeros; j++) {
    array[j] = parseInt(prompt("Ingrese un número"))
   
}

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
alert(`Los números son [${numeros}]`);
