let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Opción 1 seleccionada");
        break;// sin break continuaria a case 2, entraría sin ser case 2 true
    case 2:
        console.log("Opción 2 seleccionada");
        break;
    default:
        console.log("Opción no reconocida");
        break;
}


//multiples case
let dia = "Lunes";
switch (dia) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        console.log("Es un día laboral");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Es fin de semana");
        break;
    default:
        console.log("Día no reconocido");
        break;
}
alert('He comprendido el concepto');


//Sin break
opcion = 1;
switch (opcion) {
    case 1:
        console.log("Opción 1 seleccionada");
        // No hay break aquí, por lo que continuará y ejecutará el siguiente caso
    case 2:
        console.log("Opción 2 seleccionada");
        break;
    default:
        console.log("Opción no reconocida");
        break;
}



//tipo diferente
/**
 *En este ejemplo, se comparan diferentes 
 *tipos (number y string) y el caso coincidirá 
 *solo si los valores son del mismo tipo y tienen el mismo valor.
 */
 let valor = "10";
 switch (valor) {
     case 10:
         console.log("Número 10");
         break;
     case "10":
         console.log("Cadena '10'");
         break;
     default:
         console.log("Valor no reconocido");
         break;
 }
 alert('He comprendido el concepto');

 