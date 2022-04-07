/* Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:estino do personagem seria totalmente diferente?

 */

const area = prompt("Qual area você quer seguir 'Front-end' ou 'Back-end'? Digite o nome da aréa");
let linguagem = "";
if(area === "Front-end"){
    linguagem = prompt("Você quer aprender React ou Vue?");

}
else if (area === "Back-end"){
    linguagem = prompt("Você quer aprender c# ou Java");

}
else {
    alert("Voce não inseriu uma área válida");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);

}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}