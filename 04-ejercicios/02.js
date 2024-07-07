/**
 * Nombre: ancho x alto
 * 8k    7680 x 4320
 * 4k    3840 x 2160
 * WQHD  2560 x 1440
 * FHD   1920 x 1080  (2000, 1200)
 * HD    1280 x 720
 * 
 * Ejemplos
 * 1400 x 1000 ---> HD, los dos parámetros deben cumplir
 * 1400 x 400 ----> False
 * 
 */


function nombreResolucion(ancho, alto){ 
    if (ancho >= 7680 && alto >=4320) {
        return("8K");
    } else if (ancho >= 3840 && alto >=2160) {
        return("4k");
    } else if (ancho >= 2560 && alto >=1440) {
        return("WQHD");
    } else if (ancho >= 1920 && alto >=1080) {
        return("FHD");
    } else if (ancho >= 1280 && alto >=720) {
        return("HD");
    } else {
        return("False");
    }

}

let nombre = nombreResolucion(1280, 720);// HD,  segundo con 3840,2160  ?
console.log(nombre);



