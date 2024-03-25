function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateONumero = parseInt(document.getElementById('ate').value);

    if(ateONumero < quantidade ){
        alert('a quantidade de numeros esta acima da permitida, verifiuqe');
        return;
    }
    if(ateONumero-doNumero < quantidade){
        alert('coloca os trem direito caboclo');
        return;
    }

    let sorteado = [];
    let numero;

    for (let i = 0 ;i < quantidade ; i++){
        numero = obterNumeroAleatorio(doNumero,ateONumero);
        while(sorteado.includes(numero)){
            numero = obterNumeroAleatorio(doNumero,ateONumero);
            //alert('tentando obter novo numero')
        }
        sorteado.push(numero);
}
 let numeroSosrteados = document.getElementById('resultado');
 resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:${sorteado}</label>`;
     alterarStatusBotao();
}
  
function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML='<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>' ;
    alterarStatusBotao();
}