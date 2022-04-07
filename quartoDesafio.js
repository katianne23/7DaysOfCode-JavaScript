/**Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicia */

const numero = Math.floor(Math.random() * (10- 0 +1)+0);
let chute = "";
let acertou = false;

for (let cont= 0; cont < 3; cont ++){
    chute = prompt("Adivinhe um número de 0 a 10");
    if(chute == numero){
        alert(`Parabéns, você acertou! O numero era ${numero}`);
        acertou = true;
        break;
    }
    alert("Numero errado!");
}
if(!acertou){
    alert(`Infelizmente, voce não acertou. O numero era ${numero}`);
}