document.getElementById('display').innerText = `${p1} x ${p2}`

const valores = {
    "pedra x pedra": "Empate",
    "papel x papel": "Empate",
    "tesoura x tesoura": "Empate",
    "pedra x papel": "p2 win",
    "pedra x tesoura": "p1 win",
    "papel x pedra": "p1 win",
    "papel x tesoura": "p2 win",
    "tesoura x pedra": "p2 win",
    "tesoura x papel": "p1 win",
};
let p1 = null, p2;

let pl1, pl2

function escolhaP1(escolha){
    document.getElementById('escolha1').innerText = 'escolheu';
    p1 = escolha;
}
function escolhaP2(escolha){
    document.getElementById('escolha2').innerText = 'escolheu';
    p2 = escolha;
}
function display(){
    var resultado = `${p1} x ${p2}`;
    document.getElementById('display').innerText =  valores[resultado];
    setTimeout(() => {
        document.getElementById('display').innerText = 'Façam suas escolhas'
        document.getElementById('escolha1').innerText = ''
        document.getElementById('escolha2').innerText = ''
    }, 3000);
}