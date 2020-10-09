//passando parametros entre modulos
module.exports = function(...nomes) { //parametro variavel, na qual pode passar quantos nomes quiser
    return nomes.map(nome => `Boa semana ${nome}!`)
}
//-------------------------------------------------