$('#texto').blur(function(){
    let textoDigitado = $('#texto').val();

    let elementoTexto = $("<p id='paragrafo'>" + textoDigitado + "</p>")
    $('#container').append(elementoTexto);
});

$('#esconder').click(function(){
    $('#paragrafo').hide();
});
$('#vermelho').click(function(){
    $('body').css('background-color', 'red')
});
$('#azul').click(function(){
    $('body').css('background-color', 'blue')
});
$('#preto').click(function(){
    $('body').css('background-color', 'black')
});

$('#botaoTitulo').click(function(){
    $('h1').toggleClass('estiloH1');
});
$('#removerEstilo').click(function(){
    $('h1').removeClass('estiloH1');
});