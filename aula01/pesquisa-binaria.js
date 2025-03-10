
function pesquisa_binaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let chute = lista[meio];

        if (chute === item) {
            return meio;
        }
        if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }
    return null;
}

const minha_lista = [1, 3, 5, 7, 9];
console.log(pesquisa_binaria(minha_lista, 3)); // retorna 1
console.log(pesquisa_binaria(minha_lista, 1)); // retorna 0
 


/*
function pesquisa_binaria(lista, item) {
    baixo = 0;
    alto = len(lista -1)

    while(baixo<= alto){
        meio = (baixo+alto)/2 
        chute = lista[meio]
        
        if( chute == item ){
            return meio      }
    }
    if(chute > item){
        alto = meio -1
    }else{
        baixo = meio  +1
        return null    
    }

    minha_lista = [1,3,5,7,9]
    console.log(pesquisa_binaria(minha_lista, [3]))//retorna 1
    console.log(pesquisa_binaria(minha_lista, [1]))//retorna null

*/
