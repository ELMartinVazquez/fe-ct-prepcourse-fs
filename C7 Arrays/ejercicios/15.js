function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let MayorIndice = 0;
  let NumeroMayor = array[0];

  for (i=1; i<array.length; i++){
    if (array[i] > NumeroMayor){
      NumeroMayor = array[i];
      MayorIndice = i;
    }
  }
  
  return MayorIndice;
 
 
}


encontrarIndiceMayor([24,27,6,2]);

module.exports = encontrarIndiceMayor;
