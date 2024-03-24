const valor1 = 10;
const valor2 = 20;
const resultado = valor1 + valor2;

const selectElement = document.getElementById('resultadoSelect');

// Opção 1: Definir o valor da opção selecionada
selectElement.value = resultado;

// Opção 2: Adicionar uma nova opção com o resultado
const novaOpcao = document.createElement('option');
novaOpcao.value = 'resultado';
novaOpcao.textContent = `Resultado: ${resultado}`;
selectElement.appendChild(novaOpcao);
