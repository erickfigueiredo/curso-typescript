"use strict";
// Com o  TypeScript ainda podemos deixar que o interpretador 
// atribua os tipos de forma dinâmica
// String
let nome = 'João';
console.log(nome);
// nome = 28
// numbers
let idade = 27;
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
let minhaIdade; // Estabelecemos que qualquer tipo é aceito
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'Minha idade eh 27';
console.log(typeof minhaIdade);
// array
// Informamos que o array pode ser heterogêneo
let hobbies = ['Cozinhar', 'Estudar', 'Esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// tuplas (quantidade e ordem dos tipos fixos)
let endereco = ['Av Principal', 100];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["vermelho"] = 100] = "vermelho";
    Cor[Cor["Roxo"] = 101] = "Roxo"; // 101 
    // Suporta Valores duplicados
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
// funções
function retornaNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.5, 2));
// tipo funcao
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'Joao',
    idade: 20
};
// Desafio
let funcionario = {
    supervisores: ['Erick', 'Rafael'],
    baterPonto(horas) {
        return (horas > 8) ? 'Fora do horario' : 'Ponto Normal';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// Checando Tipos
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um number');
}
else {
    console.log(typeof valor);
}
// NEVER
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarProduto();
let altura = 12;
//altura = null
// Para aceitar valores nulos
let alturaOpcional = 12;
const pessoa1 = {
    nome: 'Fulano',
    tel1: '9876543',
    tel2: null
};
//# sourceMappingURL=tipo.js.map