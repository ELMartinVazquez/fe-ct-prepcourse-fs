function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const ArrayNuevo = [];
  const NumeroTabla = 6;
  

  for (let i=0; i<=10; i++){
      ArrayNuevo.push(i*NumeroTabla);
   
  }
  return ArrayNuevo;
  
}
tablaDelSeis();

module.exports = tablaDelSeis;
