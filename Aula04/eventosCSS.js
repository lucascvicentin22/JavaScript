let botao = document.getElementById('btn');
let botao2 = document.getElementById('btn2');
botao.addEventListener('click', function(){
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.classList.add('azul');
})

botao2.addEventListener('click', function(){
    let paragrafo = document.getElementById('paragrafo');
    paragrafo.classList.remove('azul')
})