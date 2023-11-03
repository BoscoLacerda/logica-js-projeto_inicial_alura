alert('Bem-vindo ao jogo do número secreto');
let numeroSecreto = 8;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 0 e 10:');

//se chute fo igual ao número secreto
if(chute == numeroSecreto){
    alert(`Isso aí! Você descobriu o número secreto, ${numeroSecreto}.`);
} else{
    alert('Que pena! Você errou o número secreto!')
}