// adicionando clique no botão javascript
let btnjavascript = document.getElementById("btn-javascript");

btnjavascript.addEventListener('click', function(){
    alert(" Cliquei no botão do JavaScript")
})
// adicionando click no botão jquery
$('#btn-jquery').click(function(){
    alert(" Cliquei no botão do Jquery")
})
let btnCriaParagrafoJS = document.getElementById('cria-paragrafo-javascript');

btnCriaParagrafoJS.addEventListener("click", function(){
    let novoParagrafoJS = document.createElement('p');
    novoParagrafoJS.textContent = "Coca-Cola todos os dias não é ruim";
    let div = document.getElementById("container");
    div.appendChild(novoParagrafoJS)
})
// criando elemento com jquery
$('#cria-paragrafo-jquery').click(function(){
    let novoParagrafoJquery = $('<p>Amanha vou tomar mais Coca-Cola </p>');
    let novotitulo = $('<h1> Titulo Principal </h1>')
    $('#container').append(novotitulo)
    $('#container').append(novoParagrafoJquery);
})
// Evento blur para quando eu sair do meu input dumero2
$('#numero2').blur(function(){
    let numero1 = parseInt($('#numero1').val());
    let numero2 = parseInt($('#numero2').val());
    let resultado = numero1 + numero2;
    let resultadoTexto = $('<h3>' + resultado + '</h3>');
    $('#container').append(resultadoTexto);
})