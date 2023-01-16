// Com o  TypeScript ainda podemos deixar que o interpretador 
// atribua os tipos de forma dinâmica

// String
let nome: string = 'João'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false

let minhaIdade: any // Estabelecemos que qualquer tipo é aceito
minhaIdade = 27
console.log(typeof minhaIdade)

minhaIdade = 'Minha idade eh 27'
console.log(typeof minhaIdade)

// array
// Informamos que o array pode ser heterogêneo
let hobbies: any[] = ['Cozinhar', 'Estudar', 'Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]

// tuplas (quantidade e ordem dos tipos fixos)
let endereco: [string, number] = ['Av Principal', 100]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde, // 1
    Azul, // 2
    vermelho = 100, // 100
    Roxo // 101 
    // Suporta Valores duplicados
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)


// funções
function retornaNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornaNome())

function digaOi(): void{
    console.log('Oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(4.5, 2))

// tipo funcao
let calculo: (a: number, b:number) => number

calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario: {nome: string, idade: number} = {
    nome: 'Joao',
    idade: 20
}

// Alias (Deftype)
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

// Desafio
let funcionario: Funcionario = {
    supervisores: ['Erick', 'Rafael'],
    baterPonto(horas): string {
        return (horas > 8)? 'Fora do horario':'Ponto Normal' 
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))


// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)


// Checando Tipos
let valor = 30

if(typeof valor === 'number'){
    console.log('É um number')
}else {
    console.log(typeof valor)
}

// NEVER
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preco inválido!')
        }
    }
}

produto.validarProduto()

let altura = 12
//altura = null
// Para aceitar valores nulos
let alturaOpcional: null | number = 12

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const pessoa1: Contato = {
    nome: 'Fulano',
    tel1: '9876543',
    tel2: null
}

