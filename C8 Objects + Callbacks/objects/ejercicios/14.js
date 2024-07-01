function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (objetoUsuario.email != null || objetoUsuario.email != undefined){
    return true;
    
  }else{
    return false;
  }

}

console.log(tieneEmail({nombre: "Luz", apellido: "Martín", email: undefined}))

module.exports = tieneEmail;
