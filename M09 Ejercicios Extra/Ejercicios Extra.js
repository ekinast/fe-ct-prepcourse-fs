/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  var arrayPadre = [];

  for (var clave in objeto) {
    var arrayHijo = [clave, objeto[clave]];
    arrayPadre.push(arrayHijo);
  }

  return arrayPadre;

  //Object.keys() --> ['D','B','C']. Otra opción para recorrer el objeto.
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  /*function ordenador(objeto) {
      // { a: 5, d: 4, b: 5, c: 6, h: 3, j: 8}
      var ordenado = {};
  
      var claves = Object.keys(objeto).sort(); //[ 'a', 'b', 'c', 'd', 'h', 'j' ]
      claves.forEach(function (clave) {
        ordenado[clave] = objeto[clave]; //ordenado = {a: 5, b: 5, c: 6, ... }
      });
  
      return ordenado; //{ a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    }
  
    var contadorLetras = {};
  
    for (var i = 0; i < string.length; i++) {
      // {a: 5, d: 1, s: 3}
      var letra = string[i];
      if (contadorLetras.hasOwnProperty(letra)) {
        contadorLetras[letra] += 1;
      } else {
        contadorLetras[letra] = 1;
      }
    }
  
    var objetoOrdenado = ordenador(contadorLetras);
    return objetoOrdenado;*/
  var newObj = {};
  var cadenaOrdenada = string.split("").sort().join("");
  var letra = cadenaOrdenada[0];
  var cant = 0;

  for (var i = 0; i < cadenaOrdenada.length; i++) {
    if (cadenaOrdenada[i] === letra) {
      newObj[letra] = cant + 1;
      cant = cant + 1;
    } else {
      letra = cadenaOrdenada[i];
      newObj[letra] = 1;
      cant = 1;
    }
  }
  return newObj;
}

/*string = "adsjfdsfsfjsdjfhacabcsbajda";
nuevaCadena = numberOfCharacters(string);
console.log('En newObj hay ');
console.log(nuevaCadena)*/

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var letraMinus = "";
  var letrasMayus = "";

  for (var i = 0; i < string.length; i++) {
    var letra = string[i];
    if (letra.toLowerCase() === letra) {
      letraMinus = letraMinus + letra;
    } else {
      letrasMayus = letrasMayus + letra;
    }
  }

  var unionMayusMinus = letrasMayus + letraMinus;
  return unionMayusMinus;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  function invertir(palabra) {
    return palabra.split("").reverse().join("");
  }

  var arregloDePalabras = frase.split(" ");
  var arregloInvertidas = arregloDePalabras.map(function (palabra) {
    return invertir(palabra);
  });

  var stringinvertidas = arregloInvertidas.join(" ");
  return stringinvertidas;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var stringNumero = numero.toString(); // 23938 --> '23938'
  var stringInvertido = stringNumero.split("").reverse().join(""); //'83932'

  if (stringNumero === stringInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var stringResultado = "";

  for (var i = 0; i < string.length; i++) {
    var letra = string[i];
    if (letra !== "a" && letra !== "b" && letra !== "c") {
      stringResultado = stringResultado + letra;
    }
  }

  return stringResultado;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  for (var i = 0; i < arrayOfStrings.length - 1; i++) {
    for (var j = i + 1; j < arrayOfStrings.length; j++) {
      if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
        var aux = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[j];
        arrayOfStrings[j] = aux;
      }
    }
  }

  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  // array1 = [4, 2, 3, 7, 8]
  //                     num1
  //array2 = [1, 3, 4]
  //              num2

  var interseccion = [];

  for (var num1 of array1) {
    for (var num2 of array2) {
      if (num1 === num2) {
        interseccion.push(num1);
      }
    }
  }

  return interseccion;
}

// for tradicional

/* let array3 = [];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            array3.push(array1[i]);
         }
      }
      
   }
   return array3;
*/

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
