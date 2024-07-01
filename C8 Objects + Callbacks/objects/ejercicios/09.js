function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  let objeto= {};
  objeto.nombre = nombre;
  objeto.email = email;
  objeto.password = password;

  return objeto;
}

console.log(nuevoUsuario("Atenas","ate@gmail.com","1234"));

module.exports = nuevoUsuario;
