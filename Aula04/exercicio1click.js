// Função para exibir mensagem de boas-vindas
function exibirMensagem() {
// Captura o valor do input de texto
var nome = document.getElementById('texto').value;
            
// Verifica se o campo de texto está preenchido
if (nome !== '') {
// Cria a mensagem de boas-vindas
var mensagem = 'Olá, ' + nome + '! Seja bem-vindo(a)!';

// Exibe a mensagem na div com id "container"
document.getElementById('container').innerText = mensagem;
} else {
        alert('Por favor, insira seu nome.');
    }
}

// Adiciona um evento de clique ao botão
document.getElementById('btn').addEventListener('click', exibirMensagem);
