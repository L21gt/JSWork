let numero = 100;
let tuNombre = "Jose";
let verdadero = true;
let indefinido;
let nula = null;

//cuando ejecutemos observa el tipo
console.log(tuNombre);
console.log(typeof tuNombre); //string, buscalo en console

//cambiamos el valor y automatico cambia el tipo.
tuNombre = 50;
console.log(tuNombre);        
console.log(typeof tuNombre);   //number, buscalo en console
console.log(typeof numero);     //number, buscalo en console
console.log(typeof verdadero);  //boolean, buscalo en console
console.log(typeof indefinido); //undefined, buscalo en console
console.log(typeof nula);       //object, buscalo en console