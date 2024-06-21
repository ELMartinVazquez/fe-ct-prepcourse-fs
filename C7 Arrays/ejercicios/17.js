function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let Suma=0;
  let acomulador=0;
  for (i=0; i<arrayOfNums.length; i++){
    Suma = arrayOfNums[i] + acomulador;
    acomulador=Suma;
  }

  
  return acomulador;

}

agregarNumeros([10,30,10,2])

module.exports = agregarNumeros;
