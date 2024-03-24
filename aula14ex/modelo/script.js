function calcular(){
    
    let num = window.document.getElementById('txtnúmero') 
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0){
        
        alert('Por favor, digite um número.')
    
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}` //Linha de código importante para outras linguagens como PHP, mas não tanto pra JS. Porém, importante a inserção desta linha, para que seja identificado o valor específico de cada item.
            tab.appendChild(item)
        }
    }    
}
