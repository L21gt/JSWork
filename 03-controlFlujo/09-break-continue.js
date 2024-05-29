// break, sale inmediatamente
//puede ser utilizado con todos los loops
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del bucle cuando i es igual a 5
    }
    console.log(i);
}
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Se va a saltar");
        continue; // Salta la iteración cuando i es igual a 2
        console.log("Esta línea no tiene sentido");
    }
    console.log(i);
}


// while*********************************************************
console.log("con while");
let i = 0;
while (i < 5) {
    if (i === 3) {
        break; // Sale del bucle cuando i es igual a 3
    }
    console.log(i);
    i++;
}

i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue; // Salta la iteración cuando i es igual a 3
    }
    console.log(i);
}


// do-while*********************************************************
console.log("con do-while");
i = 0;
do {
    console.log(i);
    i++;
    if (i === 3) {
        break; // Sale del bucle cuando i es igual a 3
    }
} while (i < 5);
i = 0;
do {
    i++;
    if (i === 3) {
        continue; // Salta la iteración cuando i es igual a 3
    }
    console.log(i);
} while (i < 5);

