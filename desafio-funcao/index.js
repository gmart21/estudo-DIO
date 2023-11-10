let V = 105;
let D = 80;
let nivel;

function calculoVitorias(vitorias, derrotas) {
    let saldo = vitorias - derrotas;

    return saldo;
}

let resultado = calculoVitorias(V, D);

if (resultado < 10) {
    nivel = 'Ferro';
}

else if (resultado >= 11 && resultado <= 20) {
    nivel = 'Bronze'
}

else if (resultado > 21 && resultado <= 50) {
    nivel = 'Prata'
}

else if (resultado > 51 && resultado <= 80) {
    nivel = 'Ouro'
}

else if (resultado > 81 && resultado <= 90) {
    nivel = 'Diamante'
}

else if (resultado > 91 && resultado <= 100) {
    nivel = 'Lendário'
}

else if (resultado > 100) {
    nivel = 'Imortal'
}


let fraseFinal = `O Herói tem de saldo de ${resultado} está no nível de ${nivel}`

console.log(fraseFinal);