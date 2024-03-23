function contar(){
    
    let tn1 = window.document.getElementById('txtn1') //Início
    let tn2 = window.document.getElementById('txtn2') //Fim 
    let tn3 = window.document.getElementById('txtn3')//Passo
    let res = window.document.getElementById('res') //Div onde será inserido o resultado

    if (tn1.value.length == 0 || tn2.value.length == 0 || tn3.value.length == 0) { // 1ª Validação
        res.innerHTML ="[ERRO]! Impossível contar."
    } else {
       
        res.innerHTML = 'Contando: <br>'//Posso usar <br> para quebrar linha porque foi usado o método .innerHTML
        
        let início = Number(tn1.value) 
        let fim = Number(tn2.value)
        let passo = Number(tn3.value)

    if (passo == 0) { // 2ª Validação
        window.alert('Passo INVÁLIDO! Considerando Passo = 1')
        res.innerHTML = 'Considerando Passo = 1: <br>'
        passo = 1
    }
    if (início < fim) { 
            //Contagem crescente
            while (início <= fim) {
                res.innerHTML += `${início} \u{1F449} `
                início += passo 
            }
        } else {
            //Contagem descrescente
            while (início >= fim) {
                res.innerHTML += `${início} \u{1F449} `
                início -= passo
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
        
}
