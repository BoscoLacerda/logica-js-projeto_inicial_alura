alert('Bem-vindo ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto)
let nome = prompt('Qual seu nome?');
let chute = prompt(`${nome}, escolha um número entre 0 e 10:`);
console.log('O usuário chutou: ' + chute);

//se chute fo igual ao número secreto
if(chute == numeroSecreto){
    console.log('Resultado da comparação:', chute == numeroSecreto);
    alert(`Isso aí! Você descobriu o número secreto, ${numeroSecreto}.`);
} else{
    console.log('Valor do número secreto:', numeroSecreto);
    alert('Que pena! Você errou, o número secreto era: ' + numeroSecreto);
}