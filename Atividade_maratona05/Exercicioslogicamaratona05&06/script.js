// Exercício 1 - Bolo de Pote (for - Produção Diária)
// Objetivo: Produzir 10 bolos e mostrar cada um no console.

// O laço inicia no bolo 1 e vai até o bolo 10, incrementando de 1 em 1
for (let i = 1; i <= 10; i++) {
    // Exibe a mensagem concatenando o texto fixo com o número atual (i)
    console.log("Bolo de pote número " + i + " produzido.");
}


// Exercício 2 - Confeitaria (forEach e Array - Lista de Sabores)
// Objetivo: Exibir os sabores disponíveis.

// Criação do Array contendo os 4 sabores da confeitaria
const sabores = ["Chocolate", "Morango", "Baunilha", "Red Velvet"];

// O forEach percorre o Array e executa a função para cada sabor encontrado
sabores.forEach(function(sabor) {
    // Exibe o sabor atual no console
    console.log("Sabor disponível: " + sabor);
});

// Exercício 3 - Ateliê de Costura (for - Cálculo de Faturamento)
// Objetivo: Calcular o faturamento de 5 serviços de R$ 200 cada.

// Inicializa a variável do faturamento em zero antes de começar a somar
let faturamentoTotal = 0;

// O laço roda exatamente 5 vezes para representar cada serviço realizado
for (let i = 1; i <= 5; i++) {
    // Soma R$ 200 ao valor acumulado no faturamentoTotal a cada repetição
    faturamentoTotal += 200; 
}

// Fora do laço, exibe o resultado final com o valor já somado
console.log("O faturamento total do dia foi: R$ " + faturamentoTotal);


// Exercício 4 - Psicólogo (forEach e Array - Lista de Pacientes)
// Objetivo: Exibir o nome de cada paciente atendido.

// Criação do Array com os nomes dos 4 pacientes
const pacientes = ["Ana", "Carlos", "Juliana", "Pedro"];

// O forEach percorre a lista de pacientes um por um
pacientes.forEach(function(paciente) {
    // Concatena a string fixa com a variável paciente e exibe no console
    console.log("Paciente atendido: " + paciente);
});
