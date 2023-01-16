let canal: string = 'Gaveta'
let inscritos: number = 610234

//canal = inscritos
console.log(canal)

function saudar(isManha: boolean) {
    let saudacao: string
    if(isManha) {
        saudacao = 'Bom dia!'
    }else {
        saudacao = 'Tenha uma boa vida!'
    }
    return saudacao
}

saudar(false)
