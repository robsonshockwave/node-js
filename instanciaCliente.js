const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//como retorna uma função factory e dentro dessa função factory retorna um objeto é preciso colocar o ()
const contatorC = require('./instaciaNova')()
const contatorD = require('./instaciaNova')()

contadorA.inc()
contatora.inc()
console.log(contadorB.valor) //vai mudar pq o node faz cache

contatorC.inc()
contatorC.inc()
console.log(contatorD.valor) //não mudou pq usou a função factory
//-------------------------------------------------