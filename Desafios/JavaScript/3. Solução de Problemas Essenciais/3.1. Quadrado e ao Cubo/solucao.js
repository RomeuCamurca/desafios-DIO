let n = parseInt(gets());

function quadrado(recebido) {
    for (let i = 1; i <= recebido; i++) {
        let a, b;
        a = i * i;
        b = i * i * i;

        console.log(i, a, b);
    }
}

quadrado(n);