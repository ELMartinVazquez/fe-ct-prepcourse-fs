function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  const NuevoArray= [];
 
  for (i=0; i<array.length; i++){

    NuevoArray.push(cb(array[i]));
   
  }

  return NuevoArray;    

}

function ImprimirElemento(elemento){
  return elemento;

};
console.log(map([1,2,3], ImprimirElemento));

module.exports = map; 
