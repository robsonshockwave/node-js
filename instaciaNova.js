//Instância Única vs Nova Instância
//uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
//-------------------------------------------------