const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
objeto[propiedad]=valor;
return objeto;

};

console.log(agregarNuevaPropiedad({nombre: "Luz", edad: 25}, "genero","femenino"));


module.exports = agregarNuevaPropiedad; 
