function logarClasse(construtor: Function) {
    console.log(construtor)
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio
}

// Factory de decorator
function decorator(a: string, b: number) {
    return function(_: Function):void {
        console.log(a + ' ' + b)
    }
}

// Obs: Decorator é chamado sempre que a classe é carregada
// nesse sentido não podemos criar um decorator que é chamado
// sempre que uma nova classe é instanciada

// Assinatura do construtor mais generico possivel
type Constructor = { new(...args: any[]): {}}

function logarObjeto(construtor: Constructor) {
    return class extends construtor {
        constructor(...args: any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    } 
}

/* new Eletrodomestico()
new Eletrodomestico()
new Eletrodomestico() */

//@logarClasse
//@logarClasseSe(true)
//@decorator('Teste', 123)
//@logarObjeto

interface Eletrodomestico{
    imprimir?():void
}

@imprimivel
class Eletrodomestico implements Eletrodomestico{
    constructor(){
        console.log('Novo...')
    }
}

function imprimivel(construtor: Function) {
    construtor.prototype.imprimir = function() {
        console.log(this);
    }
}

// Para ignorar a validação uma vez que o compilador não consegue inferir a ação do decorator
(<any>new Eletrodomestico()).imprimir()

// Para o caso da interface
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()


class ContaCorrente {
    @naoNegativo
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor
            return true
        }

        return false
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10248.57)

cc.sacar(5*10e3)
console.log(cc.getSaldo())

/* cc.getSaldo = function() {
    return this['saldo'] + 7000
} */

console.log(cc.getSaldo())

// Object.freeze()
function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
    console.log(alvo)
    console.log(nomePropriedade)
    descritor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo['_'+nomePropriedade]
        },

        set: function(valor: any): void {
            if(valor < 0) {
                throw new Error('Saldo Inválido')
            } else {
                alvo['_'+nomePropriedade] = valor
            }
        }
    })
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
    console.log(alvo)
    console.log(nomeMetodo)
    console.log(indiceParam)
}
