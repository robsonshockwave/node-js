//Instância Única vs Nova Instância
//uma facotry retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
//-------------------------------------------------