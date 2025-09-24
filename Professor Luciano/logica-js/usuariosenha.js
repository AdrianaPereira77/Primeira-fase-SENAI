//usuario = adm 
//senha = "12345"

const prompt = require("prompt-sync")()

const usuario = parseFloat (prompt("Qual seu usuário: "))
const senha = parseFloat (prompt("Digite a senha de (1-10)"))


if(usuario == "adm" && senha == 12345){
    console.log("Opa acertou")
}else{
    console.log("Acesso negado")
} 
