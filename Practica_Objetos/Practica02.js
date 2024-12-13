class Rectangulo {
    constructor(width, height) {
        // Validación en el constructor: Si alguno no es un número o es menor
        // o igual a cero, se asignará un valor por defecto de 1.
        if (typeof width === 'number' && width > 0) {
            this.width = width;
        } else {
            this.width = 1;
        }
        if (typeof height === 'number' && height > 0) {
            this.height = height;
        } else {
            this.height = 1;
        }
    }

    // Recibe dos números y permite cambiar las dimensiones del rectángulo
    cambiarDimensiones(width, height) {
        if (typeof width === 'number' && width > 0) {
            this.width = width;
        }
        if (typeof height === 'number' && height > 0) {
            this.height = height;
        }
    }

    // Devuelve el área del rectángulo (ancho x alto).
    calcularArea() {
        return this.width * this.height;
    }

    // Devuelve un nuevo objeto que es una copia del rectángulo
    copia() {
        return new Rectangulo(this.width, this.height);
    }

    // Compara áreas con otro rectángulo
    comparar(secondRec) {
        const areaActual = this.calcularArea();
        const areaOtro = secondRec.calcularArea();
        if (areaActual > areaOtro) {
            return "mayor";
        } else if (areaActual < areaOtro) {
            return "menor";
        } else {
            return "igual";
        }
    }
}

// Pruebas de la práctica 1
const rectangulo1 = new Rectangulo(5, 6);
console.log("Área del primer rectangulo:", rectangulo1.calcularArea());

rectangulo1.cambiarDimensiones(8, 9);
console.log("Área del primer rectangulo después de cambiar sus dimensiones:", rectangulo1.calcularArea());
const rectagulo2 = rectangulo1.copia();
console.log("Comparación del primer rectangulo con su copia:", rectangulo1.comparar(rectagulo2));

const rectangulo3 = new Rectangulo(3, 4);
console.log("Comparación del primer rectangulo con el tecer rectangulo:", rectangulo1.comparar(rectangulo3));

// Validación de valores por defecto
const rectangulo4 = new Rectangulo(-1, 0);
console.log("Rectángulo con valores por defecto:", rectangulo4.width, rectangulo4.height);

Array.prototype.calcularMediaArit = function () {
    // Comprobamos si el array está vacío
    if (this.length === 0){
        return 0; // Para evitar la división por cero
    } 
    // Utilizamos reduce() para sumar todos los elementos del array:
    const sumaTotal = this.reduce((acum, actual) => acum + actual, 0);
    // Dividimos la suma total entre la longitud del array para obtener la media.
    return sumaTotal / this.length;
};

const numeros = [20, 30, 60, 90];
console.log("Media de numeros:", numeros.calcularMediaArit());

const numerosVacios = [];
console.log("Media de un array vacío:", numerosVacios.calcularMediaArit());