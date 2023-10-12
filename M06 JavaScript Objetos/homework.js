/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gatos = {
      nombre: nombre,
      edad: edad,
      meow: function(){
         return('Meow!')
      }
   };
   return(gatos);
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {
      nombre: nombre,
      email: email,
      password: password
   };
   return(usuario);
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
 
   objeto[propiedad] = null;
   return(objeto);
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   if (objeto.hasOwnProperty(metodo) && typeof objeto[metodo] === "function") {
      objeto[metodo]();
    }   
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   if (objetoMisterioso.hasOwnProperty("numeroMisterioso")) {
   var newNum = objetoMisterioso.numeroMisterioso * 5;
   return newNum;
   }
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.email) return true;
   else return false;
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objeto.hasOwnProperty(propiedad)) return true;
   else return false;
}

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.password === password) return true;
   else return false;
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:

   // Utilizamos el método map para crear un nuevo arreglo con los objetos de usuario modificados
   const usuariosPremium = objetoMuchosUsuarios.map(usuario => {
      // Copiamos el objeto de usuario original usando el operador de propagación (spread)
      const usuarioPremium = { ...usuario };
      // Establecemos la propiedad "esPremium" en true en el nuevo objeto
      usuarioPremium.esPremium = true;
      return usuarioPremium;
   });
   
   // Retornamos el nuevo arreglo con todos los usuarios en modo premium
   return usuariosPremium;

  /* objetoMuchosUsuarios.forEach(function (usuario){
      usuario.esPremium = true;
   })
   return objetoMuchosUsuarios;*/

   }
    
function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:

      // Verificamos si el objetoUsuario tiene la propiedad "posts" y si es un arreglo
      if (objetoUsuario.hasOwnProperty("posts") && Array.isArray(objetoUsuario.posts)) {
        // Inicializamos una variable para acumular los likes
        let totalLikes = 0;
    
        // Recorremos el arreglo de posts
        objetoUsuario.posts.forEach(post => {
          // Verificamos si el post tiene la propiedad "likes" y si es un número
          if (post.hasOwnProperty("likes") && typeof post.likes === "number") {
            // Sumamos los likes de este post al total
            totalLikes += post.likes;
          }
        });
    
        // Retornamos el total de likes
        return totalLikes;
      } else {
        // Si el objetoUsuario no tiene la propiedad "posts" o no es un arreglo, retornamos 0
        return 0;
    }
    /*el profe lo resolvió con .reduce? */
}  

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:

      // Verificamos si el objetoProducto tiene las propiedades necesarias
      if (
        objetoProducto.hasOwnProperty("precio") &&
        objetoProducto.hasOwnProperty("porcentajeDeDescuento")
      ) {
        // Agregamos la propiedad "calcularPrecioDescuento" como una función al objetoProducto
        objetoProducto.calcularPrecioDescuento = function() {
          // Calculamos el precio con descuento
          const precioSinDescuento = objetoProducto.precio;
          const porcentajeDeDescuento = objetoProducto.porcentajeDeDescuento;
          const precioConDescuento = precioSinDescuento - precioSinDescuento * porcentajeDeDescuento;
    
          // Retornamos el precio final con descuento
          return precioConDescuento;
        };
    
        // Retornamos el objetoProducto actualizado
        return objetoProducto;
      } else {
        // Si el objetoProducto no tiene las propiedades necesarias, retornamos el mismo objeto sin cambios
        return objetoProducto;
      }
    }
    

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
