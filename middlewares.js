//padrão middleware (chain of resposibility)
//primeiro parametro é o objeto, e next é a função que quando disparado irá chamar o próximo passo da cadeia
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { //...middlewares = operador rest que ajuntará várias funções em um array
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
//exec(ctx, passo2, passo1, passo3) //pode trocar a ordem
console.log(ctx)

//-------------------------------------------------