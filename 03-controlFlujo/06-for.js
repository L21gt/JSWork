//Contiene todo dentro de una línea
//for(inicialización; comparación; iteración al terminar)
//for(expression; expression; expression)
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }



    for (let i = 1; i <= 5; ++i) { // ¿Por qué puedo volver a inicializar i?
        console.log(i);
    }


    //Compararemos el while con el for
let i = 0;
while (i < 10) {
    if(i % 2 == 0){
        console.log(i, 'Es un número par');
    }
    i++;
}
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        console.log(i, "Es un número par")
    }
}



let continuar = true;
while (continuar) {
    let respuesta = prompt("¿Quieres continuar? (si/no)");//while necesita que un valor cambie
    if (respuesta === "no") {
        continuar = false;
    }
}