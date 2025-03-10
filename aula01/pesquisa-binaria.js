
function pesquisa_binaria(lista, item) {
    let baixo = 0; //Começamos no primeiro número da lista  
    let alto = lista.length - 1; //Último número da lista 

    while (baixo <= alto) {//Enquanto não tiver terminado a busca  
        let meio = Math.floor((baixo + alto) / 2);//Pegamos o numero do meio
        let chute = lista[meio]; //Pegamos o chute do meio

        if (chute === item) { //se o chute for maior que o item
            return meio; // retornar a posição dele
        }
        if (chute > item) { // Se o número for maior que o que queremos...
            alto = meio - 1; //  Procuramos só na parte de baixo da lista
        } else {
            baixo = meio + 1; //Procuramos só na parte de cima da lista
        }
    }
    return null;
}

const minha_lista = [1, 3, 5, 7, 9];
console.log(pesquisa_binaria(minha_lista, 3)); // retorna 1
console.log(pesquisa_binaria(minha_lista, 1)); // retorna 0
console.log(pesquisa_binaria(minha_lista, 8)); // retorna null (não encontrado)



