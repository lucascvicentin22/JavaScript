function atualizaRelogio(){
    const data = new Date();
    const divRelogio = document.getElementById("relogio")
    divRelogio.textContent = data;
}
setInterval(atualizaRelogio,1000);
atualizaRelogio();