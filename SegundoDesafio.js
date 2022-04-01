/*Entender como capturar e armazenar valores dentro de variáveis.*/
const nome = prompt("Qual é o seu nome? ");
const idade = prompt ("Qual é sua idade?");
const linguagem= prompt("Qual linguagem de programação você esta estudando?")

var msg = "Olá " +nome+ ", você tem " +idade+ " anos e já está aprendendo " +linguagem;
document.write(msg);
