"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
//cpf = '789.101.132-78'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++)
    console.log(i);
//console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar);
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log('Ola' + pessoa);
falarCom('João');
// this
function normalComThis() {
    //console.log(this)
}
normalComThis();
const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
normalComThisEspecial();
// Para descobrir o this da arrow precisamos descobrir quem era o this na linha anterior à sua declaração
//const arrowComThis = () => console.log(this)
//arrowComThis()
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio) {
        inicio--;
        console.log(inicio);
    }
    console.log('Final!');
}
contagemRegressiva();
contagemRegressiva(5);
// Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'fernanda'];
//const turmaB: string[] = ['Erick', 'Marcelo', 'Sávio', ...numbers]
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 3, 4, 5, 6);
console.log(numeros);
// Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
const objExample = {
    name: 'Erick',
    peso: 12,
    a: {
        b: 'C'
    }
};
const { name: n, peso: p, a: { b: base } } = objExample;
//# sourceMappingURL=ecmascript.js.map