console.log("desafio detetive".toUpperCase());
console.log("Por Favor!Preste atenção nas Regras");console.log("REGRAS:\nNeste jogo, definimos dois valores, sendo que\n        (1) é Sim e (0) é NÂO \n Abaixo responda as perguntas, conforme a REGRA ACIMA\n Comece Agora!: \n");

let telefone = parseInt(prompt("Telefonou pra vitima?\n"));
let localCrime = parseInt(prompt("Esteve no local do crime?\n"));
let morava = parseInt(prompt("Mora perto da vitima\n"));
let devia = parseInt(prompt("Devia para vitima?\n"));
let trabalho = parseInt(prompt(" Ja trabalhou com a  vitima?\n"));
let resultado= telefone+localCrime+morava+devia+trabalho;


if (resultado == 2) {

console.log("Oque está escondendo em? VOCÊ É SUSPEITO!.");

} else if (resultado <= 4 && resultado >=3) {

  console.log("Entrou no esquema errado meu bom. VOCÊ É CÚMPLICE");
}

else if (resultado == 5) {

  console.log("Te pegamos!! Não é mesmo seu(a) ASSASINO(A)!!");
}

else {

  console.log("Fica na paz querido(a) TU É INOCENTE!");
}


