/*Declaração de variáveis */
let nome = "Rei";
let exp = 8000;
let nivel;

/*Ninho de ifs*/

if (exp < 1000) {
    nivel = "Ferro";
}
else if (exp > 1000 && exp <= 2000) {
    nivel = "Bronze"
}
else if (exp > 2000 && exp <= 5000) {
    nivel = "Prata"
}
else if (exp > 2000 && exp <= 5000) {
    nivel = "Ouro"
}
else if (exp > 6000 && exp <= 8000) {
    nivel = "Platina"
}
else if (exp > 8000 && exp <= 9000) {
    nivel = "Ascendente"
}

else if (exp > 9000 && exp <= 10000) {
    nivel = "Imortal"
}

else if (exp >= 10001) {
    nivel = "Radiante"
}

let fraseFinal = `O herói de nome ${nome} está no nível ${nivel}`

/*Imprime no console*/
console.log(fraseFinal)