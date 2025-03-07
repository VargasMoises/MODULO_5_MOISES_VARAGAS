const args = process.argv.splice(2)
const [valorA, operador, valorB ] = args
if(!valorA || !operador || !valorB){
    console.error("Error: Uso: node calculadora.js <valor A> <operador> <valor B>")
    process.exit(1)
}
const primerValor = parseFloat(valorA)
const segundoValor = parseFloat(valorB)
if (isNaN(valorA) || isNaN(valorB) || (operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/")) {
    console.error("Error: Los valores ingresados deben ser: número, opradores: +, -, *, / y no deben ser vacíos \n ejemplo: node calculadora.js 5 + 5");
    process.exit(1);
}else if (operador === "/" && segundoValor === 0){
    console.error("Error: No se puede dividir por cero");
    process.exit(1);
}
let resultado= 0
switch(operador){
    case "+":
        resultado = primerValor + segundoValor
        break
    case "-":
        resultado = primerValor - segundoValor
        break
    case "*":
        resultado = primerValor * segundoValor
        break
    case "/":
        resultado = primerValor / segundoValor
        break
}
console.log(resultado);