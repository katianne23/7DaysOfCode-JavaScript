/** você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:
 */
let frutas = [];
let laticínios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";
while (adicionarMais != "não"){
    adicionarMais = prompt("Voce deseja adicionais mais comida da lista? Resposta 'Sim' ou 'Não'.");
    while(adicionarMais != "Sim" &&  adicionarMais != "Não"){
        alert(`Operação não reconhecida`);
       adicionarMais = prompt("Voce deseja adicionais mais comida da lista? Resposta 'Sim' ou 'Não'.");
    }
    if(adicionarMais === "Não"){
        break;
    }

    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida pertence: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutaa.push(comida);
    } else if (categoria === 'laticínios'){
        laticínios.push(comida);
    } else if (categoria === 'doces'){
        doces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else{
        alert("Essa categoria não é pré-definida.");
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);