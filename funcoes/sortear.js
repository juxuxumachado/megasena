export function sortear(qtd=6, numeros=[]){
    if (qtd < 6 || qtd > 15) {
        throw "Quantidade inválida"
    }
    if (numeros.length == qtd){
        return numeros.sort((a, b) => a - b)
    }

    const aleatorio = parseInt(Math.random() * 60) + 1

    if (!numeros.includes(aleatorio)){
        // Quando aleatório não estiver em números
        // Adicionar o aleatorio na lista
        return sortear(qtd,[...numeros, aleatorio])
    }
    return sortear(qtd,numeros)
}