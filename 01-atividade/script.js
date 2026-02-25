// EXERCÍCIO 1: BOLO DE POTE
 
// 1. Declarando constantes para valores que não mudam (preço e custo)
const precoVenda = 12.00; // Preço de venda de cada bolo
const custoProducao = 5.50; // Custo para produzir cada bolo
 
// 2. Declarando variável para a quantidade, pois isso pode variar em outros dias
let quantidadeVendida = 30; // Unidades vendidas
 
// 3. Calculando o lucro por unidade (Preço de venda menos o custo)
let lucroPorUnidade = precoVenda - custoProducao
 
// 4. Calculando o lucro total (Lucro de um bolo vezes a quantidade vendida)
let lucroTotal = lucroPorUnidade * quantidadeVendida;
 
// 5. Exibindo o resultado utilizando concatenação
// O método .toFixed(2) serve para garantir que o número tenha duas casas decimais (como moeda)
console.log("O lucro por unidade foi de R$ " + lucroPorUnidade.toFixed(2) + " e o lucro total da venda foi de R$ " + lucroTotal.toFixed(2) + ".");
 
 
 
// EXERCÍCIO 2: CONFEITARIA
 
// 1. Declarando os valores iniciais
let precoBolo = 150.00; // Valor inicial do bolo
let porcentagemDesconto = 0.10; // Representa os 10% de desconto (10 dividido por 100)
 
// 2. Calculando o valor do desconto (Preço do bolo vezes 10%)
let valorDesconto = precoBolo * porcentagemDesconto;
 
// 3. Calculando o valor final do bolo (Preço original menos o desconto)
let valorFinal = precoBolo - valorDesconto;
 
// 4. Exibindo o resultado utilizando interpolação (template literals)
console.log(`O valor do desconto foi de R$ ${valorDesconto.toFixed(2)}. O valor final do bolo ficou em R$ ${valorFinal.toFixed(2)}.`);
 
 
 
// EXERCÍCIO 3: ESTILISTA
 
// 1. Declarando os valores
let valorVestido = 800.00; // Preço do vestido vendido
let porcentagemComissao = 0.15; // Representa a comissão de 15% (15 dividido por 100)
 
// 2. Calculando o valor da comissão
let valorComissao = valorVestido * porcentagemComissao;
 
// 3. Exibindo o resultado usando interpolação
console.log(`A estilista vai receber uma comissão de R$ ${valorComissao.toFixed(2)} pela venda do vestido.`);
 
 
 
// EXERCÍCIO 4: PSICÓLOGO
 
// 1. Declarando os valores
let valorSessao = 120.00; // Valor cobrado por cada sessão
let sessoesRealizadas = 40; // Quantidade de sessões no mês
 
// 2. Calculando o faturamento mensal (Valor da sessão vezes número de sessões)
let faturamentoMensal = valorSessao * sessoesRealizadas;
 
// 3. Exibindo o resultado com concatenação
console.log("O faturamento mensal do psicólogo com as sessões foi de R$ " + faturamentoMensal.toFixed(2) + ".");