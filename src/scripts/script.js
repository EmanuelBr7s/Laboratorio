function limpiar() {
    document.getElementById('miFormulario').reset();
    document.getElementById('result').textContent = ''; // Limpiar el resultado
    document.getElementById('comparacion').textContent = ''; // Limpiar comparación
}

function calcular(operacion) {
    var x = parseFloat(document.getElementById('valor1').value);
    var y = parseFloat(document.getElementById('valor2').value);
    var resultado;

    switch (operacion) {
        case 'sumar':
            resultado = x + y;
            break;
        case 'restar':
            resultado = x - y;
            break;
        case 'multiplicar':
            resultado = x * y;
            break;
        case 'division':
            resultado = y !== 0 ? x / y : 'No se puede dividir entre cero';
            break;
        default:
            resultado = 'Operación no válida';
    }

    document.getElementById('result').textContent = resultado; 
}

function comparar() {
    var x = parseFloat(document.getElementById('valor1').value);
    var y = parseFloat(document.getElementById('valor2').value);
    var resultadoComparacion;

    if (x > y) {
        resultadoComparacion = 'Valor 1 es mayor que Valor 2';
    } else if (x < y) {
        resultadoComparacion = 'Valor 1 es menor que Valor 2';
    } else {
        resultadoComparacion = 'Valor 1 es igual a Valor 2';
    }

    document.getElementById('comparacion').textContent = resultadoComparacion; 
}

function limpiar1() {
    document.getElementById('mi').reset();
    document.getElementById('resultadoEdad').textContent = ''; 
    document.getElementById('resultadoDescuento').textContent = ''; 
    document.getElementById('resultadoConducir').textContent = ''; 
}

function verificar() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const est = document.getElementById('estudiante').value;

    const MaEd = edad >= 18;
    const tLic = true; 

    const puedeConducir = MaEd && tLic;
    document.getElementById('resultadoConducir').textContent = "Puede conducir?: " + puedeConducir;

    if (MaEd) {
        document.getElementById('resultadoEdad').textContent = "Eres mayor de edad";
    } else {
        document.getElementById('resultadoEdad').textContent = "No eres mayor de edad";
    }

    if (est === "si") {
        document.getElementById('resultadoDescuento').textContent = "Tienes derecho a un descuento";
    } else {
        document.getElementById('resultadoDescuento').textContent = "No puedes adquirir el descuento";
    }
}

