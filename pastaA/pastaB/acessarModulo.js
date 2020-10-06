//sistema de módulo usando require
const moduloA = require('../../moduloA')
//const moduloA = require('C:\Users\robso\Desktop\node-JS\moduloA.js')
console.log(moduloA.ola)

const saudacao = require('saudacao') //com é o arquivo index que quer acessar não precisa colocar /index
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

//modulo http já vem no node
/*
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
*/
//-------------------------------------------------