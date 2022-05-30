console.log(`\nTrabalhando com Condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//USANDO WHILE

// let contador = 0;
// let destinoExiste = false;
// while (contador < 3) {
//   if (listaDeDestinos[contador] == destino) {
//     // console.log("Destino existe");
//     destinoExiste = true;
//     break;
//   } else {
//     // console.log("Destino não existe");
//     destinoExiste = false;
//   }
//   contador += 1;
// }

// console.log("Destino existe: ", destinoExiste);
// console.log("\nEmbarque: \n\n");
// if (idadeComprador >= 18 && passagemComprada) {
//   console.log("Boa viagem");
// } else {
//   console.log("Você não pode embarcar");
// }

// if (podeComprar && destinoExiste) {
//   console.log("Boa Viagem");
// } else {
//   console.log("Desculpe tivemos um erro!");
// }

//USANDO FOR

for (let cont = 0; cont < 3; cont++) {
  if (listaDeDestinos[cont] == destino) {
    destinoExiste = true;
    break;
  }
}

if (podeComprar && destinoExiste) {
  console.log("Boa Viagem");
} else {
  console.log("Desculpe tivemos um erro!");
}
