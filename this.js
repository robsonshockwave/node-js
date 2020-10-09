//entendendo o this
console.log(this === global) //false
console.log(this === module) //false

console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

//dentro de uma função o this não aponto pro exports mas fora sim
//this dentro de uma função aponta para o global e fora aponta pro module.exports
logThis() //false
//-------------------------------------------------