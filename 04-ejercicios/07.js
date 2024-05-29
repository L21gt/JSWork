/** 
 * Crea un algoitmo que devuelva el precio
 * del producto más impuestos
 */

function precioTotal(precio, impuesto) {
    let conImpuesto = precio + (precio * impuesto);
    let conImpuestoAprox = conImpuesto.toFixed(2);
    return conImpuestoAprox;

}

let resultado = precioTotal(19.90, 0.12);
console.log(resultado)