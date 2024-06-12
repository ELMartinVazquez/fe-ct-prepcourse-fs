function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > 0 && b > 0 && a != b){
    var producto=1;
    for (i=a; i<=b;i++){
      producto=producto*i;
    }
    console.log(producto);
    return producto;
  }else if (a===b){
    return a || b;
  }else if (a <= 0){
    return 0;
  }
  
}

productoEntreNúmeros(5,5);

module.exports = productoEntreNúmeros;