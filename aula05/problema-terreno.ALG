Algoritmo "semnome"

Var
  b1,b2,h,resultado,area,preco:real


Inicio
      escreval("Problema: terreno")

        b1 <-10.0
        b2<-30.0
        h<-200.00
        
        area<-b1*b2
        preco<-area*h
        escreval("Exemplo 1:")
        escreval
        escreval("Largura do terreno: ", b1:8:2)
        escreval("Comprimento do terreno: ", b2:8:2)
        escreval("Valor em metro quadrado: ", h:8:2)
        escreval
        escreval("Area do terreno: ", area:8:2)
        escreval("Preço do terreno: ", preco:8:2)

        escreval
        escreval("Exemplo 2:")
        escreval
        b1 <-12.0
        b2<-20.0
        h<-150.00
        
        area<-b1*b2
        preco<-area*h
        
        escreval("Largura do terreno: ", b1:8:2)
        escreval("Comprimento do terreno: ", b2:8:2)
        escreval("Valor em metro quadrado: ", h:8:2)
        escreval
        escreval("Area do terreno: ", area:8:2)
        escreval("Preço do terreno: ", preco:8:2)
Fimalgoritmo