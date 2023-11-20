const input = document.getElementById("texto");
const n2 = document.getElementById("n2")
input.addEventListener("blur", function(){
    console.log(input.value);
})
n2.addEventListener("blur", somar)

function somar() {
    const n1 = parseInt (document.getElementById("n1").value);
    const nu2 = parseInt(n2.value)

    let resultado = n1 + nu2;
    console.log(resultado)
}