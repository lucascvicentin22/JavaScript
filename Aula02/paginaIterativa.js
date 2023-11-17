document.getElementById("botao").addEventListener("click",
    function (){
        
        const novoParagrafo = document.createElement("p");

        const texto = document.getElementById("texto").Value;   
        
        // textContent escreve dentro do meu elemento do html

        novoParagrafo.textContent = texto;

        document.getElementById("texto").Value = "";

        document.getElementById("container").appendChild(novoParagrafo)
    }
)