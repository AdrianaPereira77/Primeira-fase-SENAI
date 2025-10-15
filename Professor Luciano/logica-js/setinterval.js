// setInterval(()=>{
//     console.log("executei")
// },2000)

//exercício acima é para q ele execute sem parar a cada 2 segundos 



const prompt = require('prompt-sync')()

let contadorInicial = Number(prompt("digite um valor inicial"))
let contadorFinal = Number(prompt("Digite um valor final"))
let intervalo = setInterval(()=>{
    contadorInicial++
    console.log(contadorInicial)
    if(contadorInicial === contadorFinal){
clearInterval(intervalo)
    }
},1000)

//explicação do código acima
//Esse código que você fez serve para criar um contador automático, que aumenta um número a cada segundo ⏱️ até chegar em um valor final.
// 1️⃣ Pede ao usuário dois números:

// um valor inicial

// um valor final

// 2️⃣ Depois ele começa a contar, de 1 em 1, mostrando cada número no console (a cada segundo).

// 3️⃣ Quando o contador chega no número final, ele para automaticamente.




