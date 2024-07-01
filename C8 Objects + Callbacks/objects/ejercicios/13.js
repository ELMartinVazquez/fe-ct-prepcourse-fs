function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  var resultado = delete objeto[propiedad];

  return objeto;

}

console.log(eliminarPropiedad({escuela: "EIT", clave: "CVW2F4", tipo: "privada"}, "tipo"))

module.exports = eliminarPropiedad;
