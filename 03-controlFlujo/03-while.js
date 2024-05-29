let i = 0;
while (i < 10) {
    console.log("Iteración " + i);
    i++;
}
console.log('Ya salí del while, i vale:', (i + '')); // estoy haciendo un casting

console.log(typeof(i));
console.log('Ya salí del while, i vale:', i.toString());
console.log(typeof(i));
// ir a pythontutor.com


console.log(typeof(i));
console.log('Ya salí del while, i vale:', i.toString());
console.log(typeof(i));
//Ir a pythontutor.com


//segunda parte
//averiguar cuales son numeros pares

i = 0;
while (i < 10) {
    if(i % 2 == 0){
        console.log(i, 'Es un número par');
    }
    i++;
}

console.log('Salí del while' + i); //cambia el tipo de manera automática
console.log("tipo de i", typeof(i));