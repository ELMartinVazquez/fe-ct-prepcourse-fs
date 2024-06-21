function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let NumRepetidos = new Set();
  for (i=0; i<numeros.length; i++){
    if(NumRepetidos.has(numeros[i])){
      return numeros[i];
  }
  NumRepetidos.add(numeros[i]);
  
}
return undefined;
}

console.log(encontrarElementoRepetido([1,2,3,4,5,1]));

module.exports = encontrarElementoRepetido;