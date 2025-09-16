programa {
  funcao inicio() {
    inteiro valor, notas100, notas50, notas20, notas10, notas5, notas2, notas1, valorOriginal
    escreva("Digite o valor: ")
    leia(valorOriginal)
    valor = valorOriginal
    notas100 = valor / 100
    valor = valor % 100
    notas50 = valor / 50
    valor = valor % 50
    notas20 = valor / 20
    valor = valor % 20
    notas10 = valor / 10
    valor = valor % 10
    notas5 = valor / 5
    valor = valor % 5
    notas2 = valor / 2
    valor = valor % 2
    notas1 = valor 
    escreva("\nNotas R$100: " + notas100)
    escreva("\nNotas R$50: " + notas50)
    escreva("\nNotas R$20: " + notas20)
    escreva("\nNotas R$10: " + notas10)
    escreva("\nNotas R$5: " + notas5)
    escreva("\nNotas R$2: " + notas2)
    escreva("\nNotas R$1: " + notas1)
    escreva("\nvalor: R$" , valorOriginal)
    



  }
}
