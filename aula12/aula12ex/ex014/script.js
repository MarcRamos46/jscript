function carregar () {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date() //Data da sistema
    var hora = data.getHours() //Hora do sistema
    msg.innerHTML = `Agora são ${hora} horas.` //Altera o contéudo da variável msg com a string entre as crases. A variável continha o que estava na div marcada pelo id="msg"
    
    // Faz o conteúdo da var imagem mudar de acordo com os testes condicionais abaixo:
    if (hora >= 0 && hora < 5){
        //Boa madrugada
        imagem.src = 'foto-madrugada.png'
        document.body.style.background = '#030303' 
    } else if (hora >=5 && hora < 12){
        //Bom dia
        imagem.src = 'foto-manha.png'
        document.body.style.background = '#d8c0a8'
    } else if (hora >=12 && hora < 18) {
        //Boa tarde
        imagem.src = 'foto-tarde.png'
        document.body.style.background = '#f19d4c'
    } else {
        //Boa noite
        imagem.src = 'foto-noite.png'
        document.body.style.background = '#313734'
    }
}
