const botaoEscuro = document.getElementById('modo-escuro');
const botaoClaro = document.getElementById('modo-claro');
botaoEscuro.addEventListener('click', function(){
    document.body.classList.add('tema-escuro');
})
botaoClaro.addEventListener('click', function(){
    document.body.classList.remove('tema-escuro');
})