// primero: probarlo con = 0 , segundo con = 10, tercero = 12, 
//****junto con do-while***
//Ejemplo para comparar con Do-While
let iWhile = 12;                  
while (iWhile < 10) { //Puede o no ejecutarse a la primera
    if (iWhile % 2 == 0) {
        console.log('Número par (while)', iWhile);
    }
    iWhile++;
}
console.log('Fuera del while');

let iDoWhile = 12;
//do{ } while( );
do { // Se ejecuta al menos una vez, primero ejecuta, **después evalúa** 
    if (iDoWhile % 2 == 0) {
        console.log('Número par (do - while)', iDoWhile);
    }
    iDoWhile++;
}
while (iDoWhile < 10);//evalúa al final **después evalúa**