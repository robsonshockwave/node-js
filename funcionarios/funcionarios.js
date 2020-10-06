//arquivo package.json
// npm init vai criar um arquivo package.json com perguntas e npm init -y sem perguntas
// na package.json instalou o axios
// axios serve pra fazer requisição

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//axios é um client http, faz requisições para obter informações de algo que é remoto

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
// usando o axel pra pegar um requisição json
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    
    //mulher chinesa com menor salário
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
})
//-------------------------------------------------