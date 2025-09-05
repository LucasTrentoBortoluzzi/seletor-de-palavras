const botaoMostrePalavras = document. querySelector('#botaoPalavraChave');
botaoMostrePalavras.addEventListener('clik', moatraPalavraChave);

function moatraPalavraChave(){
    const texto = document.querySelector('#esntrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavraChave = processaTexto(texto);
    campoResultado.textContent = palavraChave.join(",");


}




function processaTexto(texto) {
    let palavras = texto.split(/\P(L)+/u);
    return palavras;
}
