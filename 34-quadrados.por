programa {
  funcao inicio() {
    real corre1, corre2, corre3, corre4, corre5, total
    escreva("Valor do primeiro corre: R$")
    leia(corre1)
    escreva("Valor do segundo corre: R$")
    leia(corre2)
    escreva("Valor do terceiro corre: R$")
    leia(corre3)
    escreva("Valor do quarto corre: R$")
    leia(corre4)
    escreva("Valor do quinto corre: R$")
    leia(corre5)
    total = corre1 + corre2 + corre3 + corre4 + corre5
    escreva("Total de hoje; R$" + total)
    //3.9
    real desconto
    desconto = total * 25/100
    escreva("\ndesconto: R$" + desconto)
    real totalLiquido 
    totalLiquido = total - desconto
    escreva("\nTotal liquido: R$ "+ totalLiquido)
    //3.10
    real salario
    salario = totalLiquido * 20
    escreva("\nEstimativa de salário: R$" + salario)
    

  }
}
