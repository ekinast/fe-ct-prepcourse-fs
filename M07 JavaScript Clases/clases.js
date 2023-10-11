// function Auto(puertas, color, marca, año, ruedas){
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;
//     this.informacion = function (){
//         console.log('Este es un ' + this.marca + ' de color ' + this.color);
//     };
// }

// var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

// miPrimerAuto.informacion();

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);

// class Auto{
//     constructor (puertas, color, marca, año, ruedas){
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año = año;
//     this.ruedas = ruedas;
//     }

//     informacion() {
//         console.log('Este es un ' + this.marca + ' de color ' + this.color);
//     }
// }

// var miSegundoAuto = new Auto(4, 'Blanco', 'FIAT', 2015, 4);

// miSegundoAuto.informacion();

// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca);

class Football{
    constructor(jugador){
        this.jugador = jugador;
    }

    obtenerNombre() {
        console.log(this.jugador)
    }
}

var argentina = new Football('Messi');
var brasil = new Football('Pele');

argentina.obtenerNombre();
brasil.obtenerNombre();