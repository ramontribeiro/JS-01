console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 19;
const estaAcompanhada = true;
const passagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1);
// }
// //a pessoa é menor de idade
// else if (estaAcompanhada) {
//   //== true - se não colocar, ele considera como verdadeiro
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1);
// } else {
//   console.log("Não é maior de idade e não pode vender");
// }

// console.log(listaDeDestinos);

//comparadores - boleanos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("\nmaior de idade ou acompanhado");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("Não é maior de idade e não pode vender");
}

console.log("\nEmbarque: \n\n");
if (idadeComprador >= 18 && passagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);
