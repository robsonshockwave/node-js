//objeto global do node
//console.log(global)

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

//qualquer outro arquivo terá acesso ao MinhaApp
//-------------------------------------------------