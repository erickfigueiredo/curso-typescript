"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João'.length));
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João'.length));
console.log(echoMelhorado(27));
console.log(echo({ nome: 'João', idade: 27 }));
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
avaliacoes.push('5.5');
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(el => console.log(el));
}
/* interface Aluno {
    nome: string, idade: number
} */
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Erick']);
imprimir([
    { nome: 'Erick', idade: 21 },
    { nome: 'João', idade: 21 },
    { nome: 'Vinícius', idade: 21 },
    { nome: 'Victor', idade: 22 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(1, 2).executar());
console.log(new SomaBinaria(31, 217).executar());
class DiferencaEntreData extends OperacaoBinaria {
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const dif = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(dif / dia)} dia(s).`;
    }
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
}
const d1 = new Data(1, 2, 2021);
const d2 = new Data(10, 4, 2022);
console.log(new DiferencaEntreData(d1, d2).executar());
//# sourceMappingURL=generics.js.map