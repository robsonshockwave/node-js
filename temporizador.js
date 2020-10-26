//temporizador
//instalando uma lib de temporizador
//npm i node-schedule@1.3.0 -E

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
//vai executar de 5 em 5 segundos (por causa do */) em qualquer minuto às 12 horas, em qualquer dia, em qualquer mês, na terça-feira

//para cancelar um temporizador
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) //vai cancelar após 20 segundos

//regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //vai executar de segunda a sexta
regra.hour = 12 //na hora 12
regra.second = 30 //sempre no segundo 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
//-------------------------------------------------