const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach ((elemento) => {
    elemento.addEventListener('click', (evento) => {
        const peca = evento.target.parentNode; 
        const operacao  = evento.target.dataset.controle;
        manipulaDados(operacao, peca);
        atualizaEstatisticas(evento.target.dataset.peca, operacao);
    });
});


function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]')
    if (operacao == '+') {
        peca.value = parseInt(peca.value) + 1;
    }
    else if (operacao == '-') {
        peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatisticas(peca, operacao){
    elementoPecas = pecas[peca];
    estatisticas.forEach( (elemento) => {
        // devolve o nome dataset do elemento em estatisticas
        elementoData = elemento.dataset.estatistica 
        // devolve o conteudo do elemento em estatisticas em int
        elementoInt = parseInt(elemento.textContent)
        if (operacao == '+'){
            elemento.textContent = elementoInt + elementoPecas[elementoData];
        }
        else if (operacao == '-'){
            elemento.textContent = elementoInt - elementoPecas[elementoData];
        }
        
    });
    
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }
