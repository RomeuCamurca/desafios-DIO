let recebido = parseFloat(gets());

function calcularImpostoDeRenda(a) {
    let resultado;
    const reduzido = a - 2000.00;

    if (a <= 2000.00) {
        return "Isento";
    }

    else if (a >= 2000.01 && a <= 3000.00) {
        resultado = (reduzido * 8) / 100;
        return "R$ " + resultado.toFixed(2); 
    }

    else if (a >= 3000.01 && a <= 4500.00) {
        let dezoitoPorcento = reduzido - 1000;
        resultado = (((1000 * 8) / 100) + ((dezoitoPorcento * 18) / 100))
        return "R$ " + resultado.toFixed(2);
    }

    else if (a > 4500.00) {
        let vinteEOito = reduzido - 2500;
        resultado = (((1000 * 8) / 100) + ((1500 * 18) / 100) + ((vinteEOito * 28) / 100));
        return "R$ " + resultado.toFixed(2);
    }
}

console.log(calcularImpostoDeRenda(recebido));