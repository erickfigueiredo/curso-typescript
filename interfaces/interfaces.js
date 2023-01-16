"use strict";
var Interfaces;
(function (Interfaces) {
    function saudarComOla(pessoa) {
        console.log('Olá, ' + pessoa.nome);
    }
    function mudarNome(pessoa) {
        pessoa.nome = 'Joana';
    }
    const pessoa = {
        nome: 'João',
        idade: 27,
        saudar(sobrenome) {
            console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
        }
    };
    saudarComOla(pessoa);
    mudarNome(pessoa);
    saudarComOla(pessoa);
    // Erro pois não adere à interface (antes não havia idade)
    // saudarComOla({nome: 'Jonas', idade:27})
    // Usando um contexto de classes
    class Cliente {
        constructor() {
            this.nome = '';
            this.ultimaCompra = new Date();
        }
        saudar(sobrenome) {
            console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
        }
    }
    const meuCliente = new Cliente; // Parenteses é opcional
    meuCliente.nome = 'Han';
    saudarComOla(meuCliente);
    meuCliente.saudar('Solo');
    console.log('Última compra: ' + meuCliente.ultimaCompra);
    let potencia = (base, expoente) => Math.pow(base, expoente);
    class RealA {
        c() {
        }
        a() {
        }
        b() {
        }
    }
})(Interfaces || (Interfaces = {}));
//# sourceMappingURL=interfaces.js.map