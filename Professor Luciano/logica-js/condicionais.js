const prompt = require("prompt-sync")()

const notaFinal = parseFloat (prompt("Digite a nota final: "))
const frequencia = parseFloat (prompt("Digite a frequencia (1-10)"))


if(notaFinal >= 7 && frequencia >= 8){
    console.log("Aprovado")
}else{
    console.log("reprovado")
} 

//insira uma variável frequência do aluno (0 a 10)
//a aprovação só irá acontecer se o aluno tiver nota final maior que 7 e a frequência for maior que 8