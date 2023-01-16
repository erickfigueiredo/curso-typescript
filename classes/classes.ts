class Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}


const aniversario = new Data(3, 11, 1991)

class DataEsperta {
    constructor(public dia: number, public mes: number, public ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const aniversarioEsp = new DataEsperta(3, 11, 1991)


class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) { }

    precoDesconto(): number {
        return this.preco * (1 - this.desconto);
    }

    public resumo(): string {
        return `${this.nome} custa R\$${this.preco} (${this.desconto * 100}% off)`
    }
}

const prod = new Produto('Caneta Bic Preta', 4.2);
prod.desconto = .05;

console.log(`${prod.nome} está saindo a R\$${prod.precoDesconto()}`)


class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) { }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }

        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }

    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
Array(50).fill(0).forEach(_ => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(_ => carro1.frear())
console.log(carro1.frear())

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20);
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}
const f40 = new Ferrari('F40', 324)

// Getters & Setters
class Pessoa {
    private _idade:number = 0;

    get idade(): number {
        return this._idade
    }

    set idade(idade: number) {
        if(valor >= 0 && valor <= 120)
            this._idade = idade
    }
}

const pessoa = new Pessoa
// chamada do metodo set
pessoa.idade = 10
// chamado do metodo get
console.log(pessoa.idade)

// Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1415;

    areaCirc(raio: number): number {
        return Matematica.PI * raio ** 2;
    }
}

const m1 = new Matematica();
Matematica.PI = 4.2
console.log(m1.areaCirc(m1.areaCirc(4)))


abstract class Calculo{
    protected _resultado: number = 0

    abstract executar(...numbers: number[]): void

    get resultado(): number {
        return this._resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]):void {
        this._resultado = numeros.reduce((acc, curr) => acc + curr)
    }
}
