let paragrafo1 = document.getElementById('paragrafo1');
    let paragrafo2 = document.getElementById('paragrafo2');
    
    paragrafo1.addEventListener('click', function() {
      let textoParagrafo2 = paragrafo2.textContent;
      paragrafo2.textContent = paragrafo1.textContent;
      paragrafo1.textContent = textoParagrafo2;
    });
    
    paragrafo2.addEventListener('click', function() {
      let textoParagrafo1 = paragrafo1.textContent;
      paragrafo1.textContent = paragrafo2.textContent;
      paragrafo2.textContent = textoParagrafo1;
    });