//1- Cadastro de cliente - Empresa de bolo de pote
/*Crie um objeto chamado cliente contendo as propriedades:
-nome
-telefone
-pedidoFavorito 

Depois:
-Mostre o  nome do cliente no console.
-Adicione uma nova propriedade chamada cidade
-Remova a propridade telefone
-Mostre o objeto final no console.*/

const cliente = {
    nome: "Hugo Souza",
    telefone: 40028922,
    pedidoFavorito: "Chocolate com morango",
};

console.log(cliente.nome);

cliente.cidade = "São Paulo";
delete cliente.telefone;
console.log(cliente);

//2- Cadastro de produto - Confeitaria
/*Crie dois objetos:
-Bolo com as propriedades sabor e preco.
-Ingredientes com as propriedades massa e recheio.

Depois:
-Crie um objeto chamado produtoFinal
-Use Object.assign()para juntar as propriedade dos dois objetos no produtoFinal
-Mostre o objeto no console. */


const objeto1 = {
    sabor: "Chocolate branco com ninho",
    preco: 30,
}

const objeto2 ={
    massa: "Branca com nozes",
    recheio: "Chocolate branco com creme de Ninho",
}

const produtoFinal = {};

Object.assign(produtoFinal, objeto1, objeto2);
console.log(produtoFinal);

//3- Serviço do ateliê de costura
/*Crie um objeto chamado serviço com as propriedades:
-tipo
-preco

Depois:
-Altere o valor do preco
-Adicione uma propridade chamada prazoEntrega
-Mostre o objeto atualizado no console.*/

const servico = {
    tipo: "Remendo",
    preco: 20,
}

servico.preco = 25;
servico.prazoEntrega = "1 dia"; 
console.log(servico);

//4- Ficha de paciente - Psicólogo
/*Crie um objeto paciente com as propriedades:

-nome 
-idade
-problema

Depois:
-Use Object.keys()para mostrar todas as propriedades do objeto.
-Mostre o resultado no console.*/

const paciente = {
    nome: "Yuri",
    idade: 24,
    problema: "Insônia"
}

const chaves = Object.keys(paciente);
console.log(chaves);

//5- Cadastro de costureira - Ateliê de costura
/*Crie um objeto chamado costureira com as propriedades:
-nome
-experiencia
-especialidade

Depois:
-Aumente o valor de experiencia em 1 usando operador de adição (+=).
-Mostre o objeto atualizado no console.
*/

const costureira = {
    nome: "Nicolle",
    experiencia: 19,
    especialidade: "Fazer barra",
}

costureira.experiencia += 1;
console.log(costureira.experiencia);


//6- Informações do terapeuta - Clínica de psicologia
/* Crie um objeto chamado terapeuta com as propriedades:
-nome
-epecialidade
-cidade

Depois:
-Use Object.values() para desestruturar os valores do objeto em três variáveis.
-Mostre os valores no console. */

const terapeuta = {
    nome: "Breno Bidon,",
    especialidade: "Psicoterapia,",
    cidade: "São Paulo.",
}
 
const [nome, especialidade, cidade] = Object.values(terapeuta);
console.log(nome, especialidade, cidade);