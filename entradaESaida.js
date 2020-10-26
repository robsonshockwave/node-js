//Process: Entrada e Saída Padrão
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

//vai imprimir true no terminal se digitar:
//node entradaESaida.js

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') //vai imprimir no terminal caso utilizar o -a
    process.exit() //pra matar o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //on('data') dispara quando o usuário aperta enter
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Faça ${nome}!!\n`)
        process.exit()
    }) //vai entrar com os dados a partir do enter
}
//-------------------------------------------------