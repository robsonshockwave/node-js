//Instância Única vs Nova Instância
//node faz cache dos modulos
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}
//-------------------------------------------------