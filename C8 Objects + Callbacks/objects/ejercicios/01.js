const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   return objeto[propiedad];
   
};

console.log(obtenerValorPropiedad({nombre: 'Juan', edad: 25}, "edad"));


module.exports = obtenerValorPropiedad;
