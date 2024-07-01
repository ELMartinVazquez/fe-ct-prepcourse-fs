function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   return objeto.hasOwnProperty(propiedad);

}

console.log(verificarPropiedad({nombre: "Luz", estudia: "si", edad: 25}, "genero"));

module.exports = verificarPropiedad;
