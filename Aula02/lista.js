// DOMContentLoaded é quando a minha página carrega 100%
document.addEventListener("DOMContentLoaded",
function(){
    const listaDeComida = ["Cereal","Pão", "Presunto", "Queijo", "Omelete", "Pão de Queijo"];
    const lista  = document.getElementById("lista-itens");

    listaDeComida.forEach(function (item){
        // criando uma li 
        const li = document.createElement("li");
        li.textContent = item;lista.appendChild(li);
        
    })
}
)