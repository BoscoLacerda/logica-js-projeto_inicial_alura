alert('Bem-vindo ao jogo do número secreto');
let nome = prompt('Qual seu nome?');
console.log('Nome do usuário: ' + nome);
let numeroMaximo = prompt(`${nome}, escolha um número máximo para jogar:`);
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log('Valor do número secreto: ' + numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`${nome}, escolha um número entre 1 e ${numeroMaximo}:`);
    console.log('Chute do usuário: ' + chute);
    // se chute fo igual ao número secreto
    if(chute == numeroSecreto){
        console.log('Resultado da comparação:', chute == numeroSecreto);
        console.log('Tentativas: ' + tentativas);
        break;        
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}!`);