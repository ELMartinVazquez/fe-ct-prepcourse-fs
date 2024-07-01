const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  for (i=0; i<array.length; i++){
    if(callback(array[i])){
      return array[i];  
    }
  }

  return "No se encontró el elemento";

};

//function EvaluarElemento(array,elemento){
  //return array.includes(elemento);
//};
//console.log(buscarElemento([8,9,10],EvaluarElemento(9)));




module.exports = buscarElemento;
