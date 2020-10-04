const btIniciar = document.querySelector(".btIniciar");
const btReiniciar = document.querySelector(".btReiniciar")
const btPomodoro = document.querySelector('.btPomodoro');
const btPausaCurta = document.querySelector('.btPausaCurta');
const btPausaLonga = document.querySelector('.btPausaLonga');
const timer = document.querySelector('.timer');

// Aciona a configuração default do Pomodoro.
let tempoDaContagem = 25;
zerarContador(tempoDaContagem);
selecionaBotao(btPomodoro);

btPomodoro.addEventListener('click', function () {
    tempoDaContagem = 25;
    reiniciarContagemRegressiva(tempoDaContagem);
    selecionaBotao(btPomodoro);
});
btPausaCurta.addEventListener('click', function () {
    tempoDaContagem = 5;
    reiniciarContagemRegressiva(tempoDaContagem);
    selecionaBotao(btPausaCurta);
});
btPausaLonga.addEventListener('click', function () {
    tempoDaContagem = 10;
    reiniciarContagemRegressiva(tempoDaContagem);
    selecionaBotao(btPausaLonga);
});

btIniciar.addEventListener('click', function () {
    contagemRegressiva(tempoDaContagem);
});

btReiniciar.addEventListener('click', function () {
    reiniciarContagemRegressiva(tempoDaContagem)
})

let intervaloDeContagem;

function contagemRegressiva(tempoMinutos) {
    btIniciar.classList.add('invisivel');
    btReiniciar.classList.remove('invisivel');
    let minutos = tempoMinutos;
    let segundos = 0;
    intervaloDeContagem = setInterval(function () {
        // Faz a contagem regressiva
        if (segundos <= 0) {
            segundos = 60;
            minutos--;
        }
        segundos--;

        // Formata os números
        let minutosTxt = minutos;
        let segundosTxt = segundos;
        if (minutos < 10) minutosTxt = "0" + minutos;
        if (segundos < 10) segundosTxt = "0" + segundos;

        // Mostra a contagem
        timer.textContent = `${minutosTxt}:${segundosTxt}`;

        // Confirma o final da contagem
        if (minutos <= 0 && segundos <= 0) {
            clearInterval(intervaloDeContagem);
            //TODO Adicionar um aviso para quando a contagem tiver terminado
        }
    }, 1000)
}

// Reinicia a contagem
function reiniciarContagemRegressiva(tempoDaContagem) {
    btReiniciar.classList.add('invisivel');
    btIniciar.classList.remove('invisivel');
    clearInterval(intervaloDeContagem);
    zerarContador(tempoDaContagem);

}

function zerarContador(tempoDaContagem) {
    tempoDaContagemTxt = tempoDaContagem;
    if (tempoDaContagem < 10) tempoDaContagemTxt = "0" + tempoDaContagem;
    timer.textContent = `${tempoDaContagemTxt}:00`;
}

function selecionaBotao(selecionado) {
    btPomodoro.classList.remove('selecionado');
    btPausaCurta.classList.remove('selecionado');
    btPausaLonga.classList.remove('selecionado');
    selecionado.classList.add('selecionado');
}