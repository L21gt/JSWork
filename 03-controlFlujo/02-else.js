let edad = 18;

if (edad >= 18) {
    console.log ("Eres mayor de edad");
}else {
    console.log("Eres menor de edad");
}


let hora = 14; // cambiar valores

if (hora < 12) {/* la primera condicion que
                se cumpla es la que se ejecuta
                lo demas se ignora*/
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}