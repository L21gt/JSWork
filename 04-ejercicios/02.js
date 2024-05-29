/**
 * Nombre: ancho x alto
 * 8k   7680 x 4320
 * 4k   3840 x 2160
 * WQHD 2560 x 1440
 * FHD  1920 x 1080
 * HD   1280 x 720
 * 
 * Ejemplos
 * 1400 x 1000 ---> HD, los dos parametros deben cumplir
 * 1400 x 400 ----> False
 * 
 */
/**function nombreResolucion(ancho, alto){
}

let nombre = nombreResolucion(1280, 720); //HD, segundo con 3840,2160   ?
console.log(nombre);
**/

function nombreResolucion(height, width) {
    if (height === 7680 && width === 4320) {
      console.log("La resolucion es 8k");
    } else if (height === 3840 && width === 2160) {
        console.log("La resolucion es 4k");
    } else if (height === 2560 && width === 1440) {
        console.log("La resolucion es WQHD");
    } else if (height === 1920 && width === 1080) {
        console.log("La resolucion es FHD");
    } else if (height === 1280 && width === 720) {
        console.log("La resolucion es HD");
    } else {
      console.log("No se encontro la resolucion");
    }
  }
  
  let resolucion = nombreResolucion(1920, 1080);
  