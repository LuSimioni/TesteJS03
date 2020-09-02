const arrBotoes = [];
const botoes = document.getElementById('botoes').children;


for (let i = 0; i < botoes.length; i++) {

    botoes[i].addEventListener("click", function(){
        if (arrBotoes.findIndex(element => element === i) === -1) {
            arrBotoes.push(i);
            if (botoes.length === arrBotoes.length) {
                console.log(arrBotoes.toString());
            }
        }
        console.log(botoes[i].innerText.split("-")[0]);

    })
}
