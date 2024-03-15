window.alert('SEJA BEM VINDO AO MEU PROGRAMINHA!!')

let n1 = Number(window.prompt('Digite o primeiro número: ')) //Necessária a conversão para dado numérico, pois o que vem da entrada é uma string.
let n2 = Number(window.prompt('Digite o segundo número: ')) //Necessária a conversão para dado numérico, pois o que vem da entrada é uma string.

if (n1 > n2) {
    document.write(`O número <strong>${n1}</strong> é o maior.`)   
} else if (n2 > n1) {
    document.write(`O número <strong>${n2}</strong> é o maior.`)
} else {
    document.write(`Os valores informados são iguais: <strong>${n1} =  ${n2}</strong>`)
}
