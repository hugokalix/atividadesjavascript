/*
 * 1 Sistema de pedidos - Empresa de bolo de pote
 * Crie um array chamado sabores com pelo menos 4 sabores de bolo de pote. Depois:
 * Mostre todos os sabores no console.
 * Adicione um novo sabor ao final do array.
 * Remova o último sabor.
 * Mostre o tamanho total do array após as alterações.
 */

let sabores = ["Chocolate", "Morango", "Prestigio", "Ninho"];
console.log("Sabores iniciais:", sabores);

sabores.push("Doce de Leite");
sabores.pop();

console.log("Tamanho total do array:", sabores.length);

/*
 * 2 Controle de clientes - Confeitaria
 * Crie um array com o nome de 5 clientes que fizeram pedidos na confeitaria. Em seguida: 
 * Mostre o primeiro e o último cliente do array. 
 * Verifique se o cliente "Carlos" está na lista usando um método de array. 
 * Mostre a posição do cliente "Maria". 
 */

let clientes = ["Ana", "Carlos", "Maria", "João", "Beatriz"];

console.log("Primeiro cliente:", clientes[0]);
console.log("Último cliente:", clientes[clientes.length - 1]);

let temCarlos = clientes.includes("Carlos");
console.log("Carlos está na lista?", temCarlos);

let posicaoMaria = clientes.indexOf("Maria");
console.log("A posição de Maria é:", posicaoMaria);

/*
 * 3 Lista de encomendas - Bolo de pote 
 * Crie dois arrays: 
 * Depois: 
 * pedidos Manha com 3 números de pedidos. 
 * pedidos Tarde com 3 números de pedidos. 
 * Junte os dois arrays em um terceiro array chamado todos Pedidos. 
 * Mostre o resultado no console. 
 */

let pedidosManha = [101, 102, 103];
let pedidosTarde = [104, 105, 106];

let todosPedidos = pedidosManha.concat(pedidosTarde);
console.log("Todos os pedidos:", todosPedidos);

/*
 * 4 Controle de serviços - Ateliê de costura 
 * Crie um array chamado servicos contendo: "barra de calça", "ajuste de vestido" e "reforma de camisa". 
 * Depois: 
 * Adicione um novo serviço no início do array.
 * Remova o primeiro serviço da lista. 
 * Mostre o array final no console. 
 */

let servicos = ["barra de calça", "ajuste de vestido", "reforma de camisa"];

servicos.unshift("troca de zíper");
servicos.shift();

console.log("Serviços atualizados:", servicos);


/*
 * 5 Agenda de pacientes - Psicólogo 
 * Crie um array chamado pacientes com pelo menos 4 nomes. 
 * Depois: 
 * Use um for para mostrar todos os pacientes com seus índices no console no formato: Índice X: Nome do paciente. 
 */

let pacientes = ["Lucas", "Fernanda", "Rafael", "Juliana"];

for (let i = 0; i < pacientes.length; i++) {
    console.log(`Índice ${i}: ${pacientes[i]}`);
}


/*
 * 6 Horários de atendimento - Clínica de psicologia
 * Crie uma matriz chamada agenda com dois dias e três horários de atendimento em cada dia. 
 * Exemplo de estrutura: 
 * Depois: 
 * Dia 13 horários 
 * Dia 23 horários 
 * Use dois for para mostrar todos os horários no formato: [linha] [coluna] = horário. 
 */

let agenda = [
    ["08:00", "09:00", "10:00"], 
    ["13:00", "14:00", "15:00"]  
];

for (let linha = 0; linha < agenda.length; linha++) {
    for (let coluna = 0; coluna < agenda[linha].length; coluna++) {
        console.log(`[${linha}] [${coluna}] = ${agenda[linha][coluna]}`);
    }
}