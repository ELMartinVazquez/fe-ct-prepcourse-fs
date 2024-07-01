function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  // return objetoUsuario[recorido][1].likes;

  let sumaLikes = 0;
  for(i=0; i<objetoUsuario.posts.length; i++){
   
      sumaLikes = sumaLikes + objetoUsuario.posts[i].likes;
  }

  return sumaLikes;

}
console.log(sumarLikesDeUsuario({posts: [{nombre: "365 enfoques", likes: 9},{nombre: "Rock", likes: 20}]}))

module.exports = sumarLikesDeUsuario;
