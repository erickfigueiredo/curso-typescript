interface Humano {
    nome: string
    // Atributo opcional
    idade?: number
    // Para aceitar um atributo qualquer (dinâmico)
    [prop: string]: any
    saudar(sobrenome: string): void
}

interface FuncaoCalculo {
    (a: number, b: number): number
}

interface A {
    a(): void
}

interface B {
    b(): void 
}

interface ABC extends A, B {
    c(): void
}

namespace Interfaces {

    function saudarComOla(pessoa: Humano) {
        console.log('Olá, ' + pessoa.nome)
    }

    function mudarNome(pessoa: Humano) {
        pessoa.nome = 'Joana'
    }

    const pessoa: Humano = {
        nome: 'João',
        idade: 27,
        saudar(sobrenome: string) {
            console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
        }
    }

    saudarComOla(pessoa)
    mudarNome(pessoa)
    saudarComOla(pessoa)
    // Erro pois não adere à interface (antes não havia idade)
    // saudarComOla({nome: 'Jonas', idade:27})

    // Usando um contexto de classes
    class Cliente implements Humano {
        nome: string = ''
        ultimaCompra = new Date()
        saudar(sobrenome: string) {
            console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome)
        }
    }

    const meuCliente = new Cliente // Parenteses é opcional

    meuCliente.nome = 'Han'
    saudarComOla(meuCliente)
    meuCliente.saudar('Solo')
    console.log('Última compra: ' + meuCliente.ultimaCompra)


    let potencia: FuncaoCalculo = (base: number, expoente: number): number => base**expoente


    class RealA implements ABC {
        c(): void {
        }
        a(): void {
            
        }
        b(): void {
            
        }
    }
}