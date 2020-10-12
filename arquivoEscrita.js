//escrevendo arquivos no node
const fd = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fd.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
}) //vai gerar o arquivoGerado.json
//-------------------------------------------------