let recebido =gets();

let convertido =  recebido.split(" ");

function mult(a, b) {
    return a * b;
}

let quilometros = mult(convertido[0], convertido[1]);

let resultado = quilometros / 12;

console.log(resultado.toFixed(3));