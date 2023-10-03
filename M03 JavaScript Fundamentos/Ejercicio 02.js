/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return (x + y);
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return (x - y);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return (x /y);
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return (x * y);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
         if (y === 0) {
        // Manejo de división por cero, si es necesario
        return "No se puede dividir por cero";
      } else {
        // Calculo el resto de la división de x entre y
        return x % y;
    }
    
    // Ejemplo de uso:
    var resultado = obtenerResto(10, 3);
    console.log(resultado); // Esto imprimirá 1, ya que 10 dividido por 3 tiene un resto de 1.
    
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
