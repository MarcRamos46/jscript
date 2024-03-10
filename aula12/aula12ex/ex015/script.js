function verificar () {
    var data = new Date()
    var ano = data.getFullYear()//pega o ano com os 4 dígitos
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] => Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos.` - TESTE
        var gênero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto') //Significa que um elemento HTML (no caso, uma imagem/img) será criado via JScript e não no código HTML. Isto poderia ser feito no código HTML (deveria por questão de organização)
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'foto-crianca-homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-homem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-homem.png')
                
            }
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src', 'foto-crianca-mulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center' //estilo: poderia ser feito no style.css
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)//Adiciona um elemento - appendChild(img)
    }
 
}