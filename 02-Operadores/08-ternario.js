



let edad = 20;
let mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje); // Resultado: 'Eres mayor de edad'




/**  Ternario Multiple, estudialo si ya llegaste a 03-controlFlujo/12-else-if.js */
let message;  // Completa para ingresar Empleado o Director o Sin sesión

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}



let messageTernario = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Felicidades' :
  (login == '') ? 'Sin sesión' :'';
