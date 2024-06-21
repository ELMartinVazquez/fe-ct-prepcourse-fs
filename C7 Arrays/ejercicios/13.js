function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var ArrayPares=[];
  for (i=0; i<array.length; i++){
    if (array[i]%2==0){
      ArrayPares.push(array[i]);
    }
  }
  return ArrayPares;
}

filtrarNumerosPares([4,7,9,10,12]);

module.exports = filtrarNumerosPares;
