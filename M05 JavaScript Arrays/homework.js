/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array.shift());

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return(array.pop());
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return(array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var numerosMasUno = [];
   for (let i = 0; i < array.length; i++) { 
      const masUno = array[i] + 1;
      numerosMasUno.push(masUno);
   }
   return(numerosMasUno);
}


function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return(array);  
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var newPalabras = palabras.join(' ');
   return(newPalabras);
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)){
      return(true);
   }else return(false);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado = 0;
   for (var i = 0; i < arrayOfNums.length; i++){
      resultado = resultado + arrayOfNums[i];
   }
   return(resultado);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0;
   var suma = 0;
   for (var i = 0; i < resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
   }
   promedio = suma / resultadosTest.length;
   return(promedio);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   resultado = 0;
   resultado = Math.max(...arrayOfNums);
   return resultado;
   // const numeroMasGrande = Math.max.apply(null, arrayOfNums);
   // return(numeroMasGrande); 
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
         // Comprobar si no se pasaron argumentos
      if (arguments.length === 0) {
        return 0;
      }
      
      // Inicializar el producto en 1
      let producto = 1;
    
      // Multiplicar cada argumento
      for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
      }
      return producto;
    }
    

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantidad = 0;
   
      for (let i = 0; i < array.length; i++){
         if (array[i] > 18){
            cantidad ++;
         }
      }
      return(cantidad);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

      if (numeroDeDia === 1 || numeroDeDia === 7){
         return('Es fin de semana'); //Sábado y domingo
      } else if (numeroDeDia >= 2 && numeroDeDia <= 6) {
         return "Es dia laboral"; // Lunes a Viernes
       } else {
         return "Número de día no válido"; // En caso de un número de día no válido
       }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   // Convertir el número a una cadena de texto.
   const numStr = num.toString();
   
   // Verificar si el primer carácter de la cadena es "9".
   return numStr.charAt(0) === '9';
   }

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

    // Si el arreglo tiene menos de 2 elementos, consideramos que todos son iguales.
  if (array.length < 2) {
   return true;
 }

  // Comparamos cada elemento del arreglo con el primero.
  for (let i = 1; i < array.length; i++) {
   if (array[i] !== array[0]) {
     return false; // Encontramos un elemento diferente, por lo que no son todos iguales.
   }
 }

 // Si llegamos hasta aquí, todos los elementos son iguales.
 return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
   // Utilizamos el método filter para crear un nuevo arreglo con los meses buscados.
   const mesesBuscados = array.filter((mes) => {
      return mes === "Enero" || mes === "Marzo" || mes === "Noviembre";
   });
   
   // Verificamos si se encontraron los tres meses.
   if (mesesBuscados.length === 3) {
      return mesesBuscados;
   } else {
      return "No se encontraron los meses pedidos";
   }
    }
    
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla = [];
   for (let i = 0; i < 11; i++){
      tabla.push((i) * 6);
   }
   return(tabla)
;}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var newMayorACien = [];
   for (var i = 0; i < array.length; i++){
      if (array[i]> 100){
         newMayorACien.push(array[i]);
      }
   }
   return(newMayorACien);
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var resultados = [];
   
   for (let i = 0; i < 10; i++) {
      num += 2;
      resultados.push(num);
   
      if (num === i) {
         return "Se interrumpió la ejecución";
      }
   }
   
   return resultados;
}
    

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo = [];
   var suma = num;
   for (var i = 0; i < 10; i++){  
      
      if (i === 5){
         continue;
      }else {
         suma = suma + 2;
         arreglo.push(suma);
      };
   }
   return(arreglo);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
