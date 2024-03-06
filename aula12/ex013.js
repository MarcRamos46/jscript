var agora = new Date() /*Pega a data do sistema*/
var diasem = agora.getDay() /*Da data pega apenas o dia: getDay()*/

console.log(diasem) 

/*Estrutura switch-case-break semelhante em C*/
/*Não esquercer do BREAK*/
switch(diasem) {
    case 0:
        console.log('DOMINGO')
        break
    case 1:
        console.log('SEGUNDA')
        break
    case 2:
        console.log('TERÇA')
        break
    case 3:
        console.log('QUARTA')
        break
    case 4:
        console.log('QUINTA')
        break
    case 5:
        console.log('SEXTA')
        break
    case 6:
        console.log('SÁBADO')
        break
    default:
        console.log('[Erro]: DIA INVÁLIDO!')
        break
}