//objeto global no node
require('./global') //não precisa atribuir a uma variavel, fazendo assim já irá carregar o MinhaApp

console.log(MinhaApp.saudacao())

//pode até mudar os valores dos atributos
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
//agr n pode mudar mais pq freezei ele
//-------------------------------------------------