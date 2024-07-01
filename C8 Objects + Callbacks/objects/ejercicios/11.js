function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  if (typeof objeto[metodo] === 'function') {
    // Invocar el método del objeto
    objeto[metodo]();
  }

}

console.log(invocarMetodo({gato:"Peluche", sobrenombre: "Pel", informacion: function(){console.log("Mi gato se llama" + this.gato)}},"informacion"));

module.exports = invocarMetodo;
