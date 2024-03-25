
function contar () {
    let tinício = window.document.getElementById('ini')
    let tfim = window.document.getElementById('fim')
    let tpasso = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    
    if (tinício.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0){
        res.innerHTML = "[ERRO]! Impossível contar."
    } else {
        res.innerHTML = 'Exibindo a contagem:<br><br>'
        let i = Number(tinício.value) //início
        let f = Number(tfim.value) //fim
        let p = Number(tpasso.value) //passo
        if (p == 0) {
            /*window.alert('Passo INVÁLIDO! Atribuindo valor 1.')*/
           p = Number(window.prompt('Passo INVÁLIDO! Atribua um valor:'))  
           res.innerHTML += `Exibindo contagem para passo = ${p} <br>`
        }
        if (i < f) {
            for (let cont = i; cont <= f; cont += p){
                res.innerHTML += `${cont} \u{1F449}`
            }
        } else {
            for (let cont = i; cont >= f; cont -= p){
                res.innerHTML += `${cont} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        res.innerHTML += '<p><em>Preencha os campos para nova contagem ou atualize a página para limpar.</em></p>'
    }
}