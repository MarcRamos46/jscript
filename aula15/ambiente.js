let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
/*console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]} e o quarto valor é ${num[3]}`)*/

/*for(let pos = 0; pos < num.length; pos++ ){ //Exibição tradicional
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}
for(let pos in num){//Para arrays e objetos em JAVASCRIPT
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`)
}
 let pos = num.indexOf(12) //Para não encontrado: indexOf() retorna -1.
 if (pos == -1) {
    console.log(`O valor não foi encontrado!!`)

 } else {
    console.log(`O valor está na posição ${pos}`)
 }*/
 
let nomes = ['maria', 'carlos', 'antônio', 'emerson', 'otávio', 'luís']
console.log(`Vetor original: ${nomes}`)
for (c in nomes) {
    console.log(`A posição ${c} tem o nome: ${nomes[c]}`)
}

nomes.push('andré')
console.log('O .sort() também coloca strings em ordem alfabética..............')
nomes.sort()
for (c in nomes) {
    console.log(`A posição ${c} tem o nome: ${nomes[c]}`)
}


