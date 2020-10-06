//sistema de módulo usando exports
console.log(module.exports) 
console.log(module.exports === this) //true
console.log(module.exports === exports) //true

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }

//no final de tudo, para exportar o arquivo/objeto para o outro módulo tem que usar o module.exportes
//só p this e exports não garantem
//-------------------------------------------------