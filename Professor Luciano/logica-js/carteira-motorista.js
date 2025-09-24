//+18 + cnh 

const prompt = require("prompt-sync")()
const idade = parseFloat (prompt("Qual a sua idade: "))
const cnh = (prompt("Tem carteira de motorista? (Sim) (Não)"))

if(idade >= 18 && cnh == "Sim"){
    console.log("Pode dirigir garota")
    }else if(idade <18){
    console.log("Você é pequenininho vá crescer")
}else{
    console.log("Tente a sorte")
} 

