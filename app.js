alert('Bem-vindo ao jogo do número secreto');
let numeroSecreto = 5;
console.log('Valor do número secreto: ' + numeroSecreto);
let nome = prompt('Qual seu nome?');
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`${nome}, escolha um número entre 0 e 10:`);
    console.log('Chute do usuário: ' + chute);
    // se chute fo igual ao número secreto
    if(chute == numeroSecreto){
        console.log('Resultado da comparação:', chute == numeroSecreto);
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}, com ${tentativas} tentativas!`);
    } else{
        if (chute > numeroSecreto){
            alert(`Ops, você errou! O número secreto é menor que ${chute}.`);
        } else{
            alert(`Ops, você errou! O número secreto é maior que ${chute}.`);
        }
        // tentativas = tentativas +1;
        tentativas++;
    }
}