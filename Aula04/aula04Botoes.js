let botao = document.getElementById("btn");
botao.addEventListener("click", function(){
    let div = document.getElementById("container");
    let texto = document.getElementById("texto").value;
    let subtitulo = document.createElement("h4");
    subtitulo.textContent = texto;
    div.appendChild(subtitulo)
})