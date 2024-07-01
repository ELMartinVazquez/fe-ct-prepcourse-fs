function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if(objetoUsuario.hasOwnProperty('password')  && objetoUsuario.password === password){
    return true;

  }else{
    return false;
  }

}

console.log(verificarPassword({nombre: "Luz", email: "Luz@gmail.com", password:"1234"}, "1234"))

module.exports = verificarPassword;
