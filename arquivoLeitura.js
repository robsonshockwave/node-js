//lendo arquivos do node
const fs = require('fs') //vai pegar o file system direto do node

const caminho = __dirname + '/arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') //vai ler todo o arquivo pra depois gerar uma resposta
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//outra forma sincrona, vai trazer o arquivo já como um objeto
const config = require('./arquivo.json') //como n é arquivo js precisa colocar o .json
console.log(config.db)

//leitura de pasta
fs.readdir(__dirname, (err, arquivos) => { //vai pegar inteira do projeto
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})