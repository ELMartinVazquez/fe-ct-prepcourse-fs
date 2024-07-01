function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   return objeto;
}

console.log(actualizarValorPropiedad({nombre:"Elvia", edad: 18},"nombre", "Luz" ));

module.exports = actualizarValorPropiedad;
