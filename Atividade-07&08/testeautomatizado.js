/*
 * 1 Sistema de pedidos - Empresa de bolo de pote
 * Crie um array chamado sabores com pelo menos 4 sabores de bolo de pote. Depois:
 * Mostre todos os sabores no console.
 * Adicione um novo sabor ao final do array.
 * Remova o último sabor.
 * Mostre o tamanho total do array após as alterações.
 */

let todos_sabores = ["Brigadeiro", "coco", "limão", "cenoura"];
console.log("Sabores iniciais:", todos_sabores);
todos_sabores.push("Leite condesado");
todos_sabores.pop();
console.log(" O Tamanho total do array:", todos_sabores.length);



/*
 * 6 Horários de atendimento - Clínica de psicologia
 * Crie uma matriz chamada agenda com dois dias e três horários de atendimento em cada dia. 
 * Exemplo de estrutura: 
 * Depois: 
 * Dia 13 horários 
 * Dia 23 horários 
 * Use dois for para mostrar todos os horários no formato: [linha] [coluna] = horário. 
 */

let agenda_24horas = [
    ["05:00", "06:00", "12:00"],
    ["14:00", "04:00", "02:00"]
];

for (let linha=0; linha < agenda_24horas; linha++) {
    for (let coluna = 0; coluna < agenda_24horas[linha].length; coluna++) {
        console.log(`[${linha}] [${coluna}] = ${agenda_24horas[linha][coluna]} `);
    }
}


/*
 * 5 Agenda de pacientes - Psicólogo 
 * Crie um array chamado pacientes com pelo menos 4 nomes. 
 * Depois: 
 * Use um for para mostrar todos os pacientes com seus índices no console no formato: Índice X: Nome do paciente. 
 */

let pacientes_clinica = ["Hugo", "Isabely", "Fernanda", "maria"];

for (let i = 0; i < pacientes_clinica.length; i++) {
    console.log(`Índice ${i}: ${pacientes_clinica[i]}`);
}



/*
 * 4 Controle de serviços - Ateliê de costura 
 * Crie um array chamado servicos contendo: "Reforma de calça", "remend" e "Costura Básica". 
 * Depois: 
 * Adicione um novo serviço no início do array.
 * Remova o primeiro serviço da lista. 
 * Mostre o array final no console. 
 */

let servicos_atelie = ["Reforma de calça", "remendo", "Costura Básica"];

servicos_atelie.unshift("troca de zíper");
servicos_atelie.shift();

console.log("Serviços atualizados:", servicos_atelie);



/*
 * 2 Controle de clientes - Confeitaria
 * Crie um array com o nome de 5 clientes que fizeram pedidos na confeitaria. Em seguida: 
 * Mostre o primeiro e o último cliente do array. 
 * Verifique se o cliente "matheus" está na lista usando um método de array. 
 * Mostre a posição do cliente "eduardo". 
 */


let lista_clientes = ['matheus', 'fernando', 'eduardo', 'rafael', 'cristian']
console.log("Primeiro cliente:", lista_clientes[0]);
console.log("Ultimo cliente:", lista_clientes[lista_clientes.length - 1]);

let esta_nalistamatheus = lista_clientes.includes('matheus');
console.log('Matheus esta na lista?', esta_nalistamatheus);

let posicao_eduardo = lista_clientes.indexOf('eduardo');
console.log("A posição de Maria é:", posicao_eduardo);



/*
 * 3 Lista de encomendas - Bolo de pote 
 * Crie dois arrays: 
 * Depois: 
 * pedidos tarde com 3 números de pedidos. 
 * pedidos madrugada com 3 números de pedidos. 
 * Junte os dois arrays em um terceiro array chamado todos Pedidos. 
 * Mostre o resultado no console. 
 */

let pedidos_tarde = [10, 8, 9];
let pedidos_madrugada = [26, 25, 23];

let todos_pedidos = pedidos_tarde.concat(pedidos_madrugada);
console.log("Todos os pedidos:", todos_pedidos);













