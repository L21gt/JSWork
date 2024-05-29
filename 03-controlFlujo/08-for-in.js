// for...in se utiliza más comúnmente para iterar 
//sobre las propiedades enumerables de un objeto.
//Por defecto, las propiedades que se crean directamente en un objeto (es decir, no
//heredadas del prototipo) son enumerables, aún no hemos visto herencia.
let user = {
    id: 1,
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Guatemala'
};
for (let propiedad in user){
    console.log("Solo muestra la propiedad:",propiedad);
}



for (let propiedad in user){
    console.log("Propiedad y valor:",propiedad, user[propiedad]);
}


/**
 * La interpolación con ${} es una característica de JavaScript 
 * que permite incrustar expresiones dentro de una cadena de texto 
 * de manera más legible y conveniente.
 *  
 * Esta característica se utiliza dentro de las plantillas de cadenas
 * (template literals) que se definen utilizando comillas graves (``).
 */
console.log("*******Interpolacion*********");
let nombre = 'Juan';
console.log(`Hola, ${nombre}!`);
let a = 10;
let b = 20;
console.log(`La suma de ${a} y ${b} es ${a + b}`);
/**    for - in
 * se utiliza para iterar las propiedades de un objeto,
 * es para conocer las propiedades del objeto
 */

for (let propiedad in user) {
    console.log(`${propiedad}: ${user[propiedad]}`);
}

