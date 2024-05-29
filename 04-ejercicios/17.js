/**
 * Reescriba el if..else utilizando operadores ternarios múltiples'?'.

Para legibilidad, es recomendad dividirlo en múltiples lineas de código.
 

let message;

if (login == 'Empleado') {
  message = 'Hola';
} else if (login == 'Director') {
  message = 'Felicidades';
} else if (login == '') {
  message = 'Sin sesión';
} else {
  message = '';
}

*/

let message = (login == 'Empleado') ? 'Hola' :
  (login == 'Director') ? 'Felicidades' :
  (login == '') ? 'Sin sesión' :'';