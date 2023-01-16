"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
class DataEsperta {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsp = new DataEsperta(3, 11, 1991);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R\$${this.preco} (${this.desconto * 100}% off)`;
    }
}
const prod = new Produto('Caneta Bic Preta', 4.2);
prod.desconto = .05;
console.log(`${prod.nome} está saindo a R\$${prod.precoDesconto()}`);
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(_ => carro1.acelerar());
console.log(carro1.acelerar());
Array(20).fill(0).forEach(_ => carro1.frear());
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        if (valor >= 0 && valor <= 120)
            this._idade = idade;
    }
}
const pessoa = new Pessoa;
// chamada do metodo set
pessoa.idade = 10;
// chamado do metodo get
console.log(pessoa.idade);
// Atributos e métodos estáticos
class Matematica {
    areaCirc(raio) {
        return Matematica.PI * Math.pow(raio, 2);
    }
}
Matematica.PI = 3.1415;
const m1 = new Matematica();
Matematica.PI = 4.2;
console.log(m1.areaCirc(m1.areaCirc(4)));
class Calculo {
    constructor() {
        this._resultado = 0;
    }
    get resultado() {
        return this._resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this._resultado = numeros.reduce((acc, curr) => acc + curr);
    }
}
//# sourceMappingURL=classes.js.map