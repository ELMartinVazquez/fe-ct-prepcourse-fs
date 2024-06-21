function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let Suma=0;
  let AcomuladorSuma=0;
  let Promedio=0;
  for (i=0; i<resultadosTest.length; i++){
    Suma = resultadosTest[i] + AcomuladorSuma;
    AcomuladorSuma=Suma;


  }
  Promedio=AcomuladorSuma / resultadosTest.length;
  return Promedio;
  
}
promedioResultadosTest([10,9,7,8]);

module.exports = promedioResultadosTest;
