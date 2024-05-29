

/** 
 * Crea un algoritmo que solicite el precio 
 * de tres platos del menú de un restaurante
 * y el impuesto que debe ser cobrado. 
 * Despliega con alert el monto total de la factura.
 */

function precioTotal(sopaPrecio, ensaladaPrecio, carnePrecio, tax) {
    let total = sopaPrecio + ensaladaPrecio + carnePrecio;
    let conImpuesto = total + (total *(tax/100));
    let conImpuestoAprox = conImpuesto.toFixed(2);
    return conImpuestoAprox;

}
let sopa =parseInt( prompt("Precio de la sopa"));
let ensalada = parseInt(prompt("Precio de la Ensalada"));
let carne = parseInt(prompt("Precio de la carne"));
let impuesto = parseInt(prompt("Impuesto, debe ser un número entero"));


let resultado = precioTotal( sopa, ensalada, carne, impuesto);
alert(`Total:  Q${resultado}`);