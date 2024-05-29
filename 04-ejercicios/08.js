/**
 * Crear un algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */


// let array = [{ , }, { , }, { , }]   es un array de objetos
let array = [
    {
       id: 1, 
       name: 'Fernando'
    },

    {
        id: 2,
        name: 'Esteban'
    },

    {
        id: 3,
        name: 'Alejandra'
    }
];

/** 
 * Se le llama un array de pares a un array de arrays y cada uno de  de sus elementos,
 * los arrays, tienen como primer elemento a un identificador y el segundo
 * elemento tiene al objeto completo
 * */  

//************¿Qué es un array de pares************************ */
// Los pares son arrays de arrays //
let pares = [
    [1, {id: 1, name: "Fernando"}],
    [2, {id: 2, name: "Esteban"}],
    [3, {id: 3, name: "Alejandra"}]
];
//*************************************************** */

// arr = [{id:1,name:"Fernando"} , {id:2,name:"Esteban"} , {id:3,name:"Alejandra"  }] 
function toPairs(arr){
    let pairs = []; // en este array crearemos los pares [idxArr,{}]
    //iteramos sobre las propiedades enumerables de un objeto, repasa for-in
    for( idx in arr) { //necesitamos el indice de arr para crear otro arreglo, 
                      //se utiliza idx para referenciar a indice
        console.log(`Soy el indice idx[${idx}] de array:`);
        let elemento = arr[idx];
        console.log(`Soy el elemento ${elemento} del indice ${idx} del array`,elemento);
        pairs[idx] = [elemento.id, elemento]; // [[ elemento.id,{elemento}, [elemeto.id,{elemento}],[elemento.id,{elemento}]]
        console.log('Soy [elemento.id, elemento]', pairs[idx]);
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);

