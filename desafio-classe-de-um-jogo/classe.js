// Array com objetos contendo informações do grupo;
let grupo = 
[{nome: 'Lier', idade: "22", tipo: "mago"},
 {nome: 'Kaiser', idade: "20", tipo: "guerreiro"},
 {nome: 'Jugo', idade: "19", tipo: "monge"},
 {nome: 'Marth', idade: "25", tipo: "ninja"}
];

// variaveis guardando informações para a função e para a estrutura de controle
let heroi_atacante = 3;
let classe = grupo[heroi_atacante].tipo
let ataque;

// Switch escolhendo ataque baseado na classe do personagem;
switch (classe) {
    case "mago": ataque = "magia"
    break

    case "guerreiro": ataque = "espada"
    break

    case "monge": ataque = "punhos"
    break

    case "ninja": ataque = "shuriken"
    break

    default: ataque = "Ninguém está atacando"
}


function atacar(heroi) {
    heroi = grupo[heroi_atacante];

    let heroi_nome = heroi.nome;
    let classe = heroi.tipo;
    let frase_impressa = `${heroi_nome}, o ${classe} atacou usando o ${ataque}`;

    return frase_impressa;
};

let imprimir = atacar(heroi_atacante);

console.log(imprimir);





