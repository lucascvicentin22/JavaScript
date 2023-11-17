// document = Minha página do html
// getElementById = pegando meu objeto(tag) do html
// createElement = criando elemento(tag) no html


/* appendChild = Adicionando uma tag do html dentro de outra

    Exemplo abaixo, estou adicionando um paragrafo a minha div
*/

var divContainer = document.getElementById("container");

var novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Testando meu paragrafo";

divContainer.appendChild(novoParagrafo);

console.log(novoParagrafo);