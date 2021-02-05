let recebido = gets().split(" ");

let a = parseInt(recebido[0]);
let b = parseInt(recebido[1]);
let q = parseInt(a/b);
let r = a - b*q;

if(r < 0){
    r += Math.abs(b);
    q = (a-r)/b;
}

console.log(parseInt(q) + " " + parseInt(r));