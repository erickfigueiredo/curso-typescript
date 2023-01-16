function echo(objeto: any) {
    return objeto
}

console.log(echo('João'.length))
console.log(echo(27).length)
console.log(echo({ nome: 'João', idade: 27 }))

// Usando Generics
function echoMelhorado<T>(objeto: T) {
    return objeto

}
console.log(echoMelhorado('João'.length))
console.log(echoMelhorado<number>(27))
console.log(echo({ nome: 'João', idade: 27 }))

// Generics disponíveis na API
const avaliacoes: Array<any> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(el => console.log(el))
}


type Aluno = { nome: string, idade: number }

/* interface Aluno {
    nome: string, idade: number
} */

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir(['Erick'])
imprimir<Aluno>([
    { nome: 'Erick', idade: 21 },
    { nome: 'João', idade: 21 },
    { nome: 'Vinícius', idade: 21 },
    { nome: 'Victor', idade: 22 },
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Class com Generics
abstract class OperacaoBinaria<T, Q> {
    constructor(public operando1: T, public operando2: T) {
    }

    abstract executar(): Q
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar():number {
        return this.operando1 + this.operando2;
    }
}

console.log(new SomaBinaria(1, 2).executar());
console.log(new SomaBinaria(31, 217).executar());

class DiferencaEntreData extends OperacaoBinaria <Data, string> {
    executar(): string {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        
        const dif = Math.abs(t1 - t2);
        const dia = 1000*60*60*24
        return `${Math.ceil(dif/dia)} dia(s).`
    }

    getTime(data: Data): number {
        let {dia, mes, ano} = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
}

const d1 = new Data(1,2,2021)
const d2 = new Data(10,4,2022)
console.log(new DiferencaEntreData(d1,d2).executar());