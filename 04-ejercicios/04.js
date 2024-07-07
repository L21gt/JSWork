/** Ejercicio
 * Imprimir que números son impares y cuales pares
 * del 0 al 20
 */

function paresImpares(numero){
    for(let i = 0; i <= numero; i++){
        if(i % 2 == 0){
            console.log(i, 'es par');
        }else{
            console.log(i,'es impar')
        }
    }

}

paresImpares(20);


// otra forma
let i = 0;
while(i <= 20){
    if(i % 2 == 0){
        console.log( i,' es un numero par')
    }else {
        console.log(i,'es un numero impar');
    }
    i++;
}