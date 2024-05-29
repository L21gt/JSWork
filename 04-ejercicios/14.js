// ¿Qué hace este programa?

let userName = prompt("Quién está ahí?", "");

if (userName == "Admin") {

    let pass = prompt("¿Contraseña?", "");

    if (pass === "Jedi") {
  alert( "¡Qué la fuerza te acompañe" );
    } else if (pass === "" || pass === null) {
  alert( "Cancelado." );
    } else {
  alert( "Contraseña incorrecta" );
    }

} else if (userName === "" || userName === null) {
    alert( "Canceledo" );
} else {
    alert( "No te conozco" );
}