console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista

console.log(listaDeDestinos);

listaDeDestinos.push(`Porto Alegre`); //adicionando um item na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1); //removendo item da lista
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //removendo item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);
console.log(listaDeDestinos[1], listaDeDestinos[0]);
