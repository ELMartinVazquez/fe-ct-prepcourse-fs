function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  if (arguments.length ===0){
    return 0;
  }

  if (arguments.length=== 1){
    return arguments[0];
  }

  let Producto=0;
  let PrimerArgumento = arguments[0];

  for (i=1; i<arguments.length; i++){
    Producto = arguments[i] * PrimerArgumento;
    PrimerArgumento=Producto;
  }

 return PrimerArgumento;

}

multiplicarArgumentos(3,5,6)

module.exports = multiplicarArgumentos;
