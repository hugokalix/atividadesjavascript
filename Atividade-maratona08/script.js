/*
Exercício 1 - Psicólogo
Crie uma função chamada avaliarSessao que receba dois parâmetros:
nomePaciente
quantidade Sessoes
A função deve:
Exibir no console o nome do paciente
Verificar se a quantidade de sessões é maior ou igual a 10
Retornar true se o paciente já pode receber alta
Retornar false caso contrário
Regras:
Use return
Utilize operador lógico ou condicional
A função deve ser reutilizável
*/
 
// Função tradicional que recebe dois parâmetros: o nome e a quantidade de sessões
function avaliarSessao(nomePaciente, quantidadeSessoes) {
  
  // Exibe o nome do paciente no console usando template strings (crases)
  console.log(`Paciente: ${nomePaciente}`);
 
  // O operador lógico >= verifica se o número é maior ou igual a 10
  // Como essa expressão matemática já resulta em 'true' ou 'false',
  // podemos retorná-la diretamente
  return quantidadeSessoes >= 10;
}
 
 
/*
Exercício 2 - Bolo de Pote
Crie uma arrow function chamada calcular ValorPedido que receba:
quantidade Bolos
valorUnitario
A função deve:
Calcular o valor total do pedido
Caso a quantidade seja maior ou igual a 10, aplicar 10% de desconto
Retornar o valor final
Regras:
Use arrow function
Utilize return
Use operações matemáticas
Não exiba nada no console dentro da função
*/
 
// Declaração de uma Arrow Function (=>) armazenada em uma constante
const calcularValorPedido = (quantidadeBolos, valorUnitario) => {
  
  // Multiplica a quantidade pelo valor para obter o total inicial
  let valorTotal = quantidadeBolos * valorUnitario;
  
  // Verifica se a quantidade atingiu a regra do desconto
  if (quantidadeBolos >= 10) {
    // Se sim, calcula 10% do valor total e subtrai dele mesmo
    valorTotal -= (valorTotal * 0.10);
  }
  
  // Retorna o valor com ou sem desconto, respeitando a regra de não usar console.log aqui dentro
  return valorTotal;
};
 
 
/*
Exercício 3 - Ateliê
Crie uma função chamada listarMateriais que receba um array de materiais utilizados em um ateliê (ex: tintas, pincéis, tecidos).
A função deve:
Exibir no console a quantidade total de materiais
Criar um novo array com os nomes dos materiais em letras maiúsculas
Retornar esse novo array
Regras:
Utilize map
Utilize length
Use console.log apenas para exibir a quantidade
*/
 
// Função tradicional recebendo um array de strings
function listarMateriais(materiais) {
  
  // A propriedade .length conta quantos itens existem dentro do array 'materiais'
  console.log(`Quantidade total de materiais: ${materiais.length}`);
  
  // O método .map() percorre o array original e constrói um NOVO array
  // Para cada 'material' encontrado, ele aplica o método .toUpperCase() (que converte para maiúsculo)
  const materiaisMaiusculos = materiais.map(material => material.toUpperCase());
  
  // Retorna o novo array que acabamos de criar
  return materiaisMaiusculos;
}
 
 
/*
Exercício 4 - Confeitaria
Crie uma função chamada filtrar Sabores Disponiveis que receba:
Um array com sabores de doces
Um caractere (letra)
A função deve:
Retornar apenas os sabores que comecem com a letra informada
A função não deve exibir nada no console
Usar função de callback para o filtro
Regras:
Utilize filter
Utilize arrow function como callback
A função deve retornar um novo array
*/
 
// Função recebendo o array de sabores e o caractere para filtro
function filtrarSaboresDisponiveis(sabores, letra) {
  
  // Padronizamos a letra recebida para minúscula para evitar bugs de "Case Sensitive" (A diferente de a)
  const letraFiltro = letra.toLowerCase();
  
  // O método .filter() varre o array e só guarda no novo array o que retornar 'true'
  // A arrow function (sabor => ...) atua como a nossa função de callback
  return sabores.filter(sabor => {
    // Padronizamos o sabor para minúscula e checamos se começa (.startsWith) com a nossa letra
    return sabor.toLowerCase().startsWith(letraFiltro);
  });
}
 
 
/*
Exercício 5 - Psicólogo
Crie um JSON válido para representar o cadastro de um paciente, contendo: nome completo, idade, plano de saúde (booleano indicando se possui), lista de queixas principais (array de strings), e um objeto com dados da última sessão (data em ISO, escala de humor de 1 a 10 e se houve prescrição de atividade).
*/
 
const jsonPaciente = {
  "nomeCompleto": "Carlos Almeida",       // String
  "idade": 34,                            // Number
  "planoDeSaude": true,                   // Boolean
  "queixasPrincipais": [                  // Array de strings
    "Ansiedade crônica",
    "Insônia",
    "Estresse no trabalho"
  ],
  "ultimaSessao": {                       // Objeto aninhado com os dados da última sessão
    "data": "2026-03-23T10:00:00Z",       // Data no padrão internacional ISO
    "escalaHumor": 7,                     // Number (de 1 a 10)
    "prescricaoAtividade": true           // Boolean
  }
};
 
 
/*
Exercício 6 - Ateliê de Costura
Crie um JSON de pedido para um ateliê de costura, contendo: dados do cliente (nome e telefone), tipo de peça (ex.: vestido, camisa), medidas (busto, cintura, quadril em cm), tecido escolhido, prazo em dias e status do pedido (valores possíveis: "recebido", "em produção", "pronto", "entregue").
Inclua pelo menos três medidas dentro de um objeto.
*/
 
const jsonPedidoAtelie = {
  "cliente": {                            // Objeto aninhado para dados do cliente
    "nome": "Marina Silva",
    "telefone": "11988887777"
  },
  "tipoPeca": "vestido",                  // String indicando a peça
  "medidas": {                            // Pelo menos 3 medidas dentro de um objeto
    "busto": 92,
    "cintura": 74,
    "quadril": 102
  },
  "tecido": "linho",                      // String
  "prazoDias": 15,                        // Number
  "status": "em produção"                 // String correspondente a um dos valores possíveis
};
 
/*
Exercício 7 - Bolo de Pote
Crie um JSON de catálogo com três sabores de bolo de pote, onde cada item possua: nome do sabor, preço (número), se contém lactose (booleano), e uma lista de ingredientes.
Em seguida, inclua um campo no topo chamado
"promocaoAtiva" (booleano) e outro chamado "desconto Percentual" (número). Garanta que todos os valores textuais estejam entre aspas e que as chaves sigam nomes descritivos em minúsculas.
*/
 
const jsonCatalogoBolos = {
  "promocaoAtiva": true,                  // Booleano exigido no topo do objeto
  "descontoPercentual": 15,               // Número exigido no topo do objeto
  "sabores": [                            // Array contendo os três sabores
    {
      "nomeSabor": "ninho com morango",   // Chaves com nomes descritivos em minúsculas
      "preco": 12.50,                     // Number
      "contemLactose": true,              // Boolean
      "ingredientes": ["leite em pó", "morango fresco", "leite condensado"] // Lista (array) de ingredientes
    },
    {
      "nomeSabor": "chocolate vegano",
      "preco": 14.00,
      "contemLactose": false,
      "ingredientes": ["cacau 70%", "leite de amêndoas", "açúcar demerara"]
    },
    {
      "nomeSabor": "prestígio",
      "preco": 11.00,
      "contemLactose": true,
      "ingredientes": ["coco ralado", "chocolate ao leite", "creme de leite"]
    }
  ]
};
 
 
/*
Exercício 8 - Confeitaria
Crie um JSON de pedido online para uma confeitaria contendo: identificador do pedido, data do pedido (ISO), cliente (nome e e-mail), itens (lista de objetos com produto, quantidade e observações), endereço de entrega (rua, número, bairro, cidade, CEP), forma de pagamento (ex.: "cartão", "pix") e um campo "totalCalculado" (número).
Certifique-se de que todos os objetos e arrays estejam bem aninhados e que os tipos sejam coerentes.
*/
 
const jsonPedidoConfeitaria = {
  "identificadorPedido": "PED-998822",    // Identificador único do pedido
  "dataPedido": "2026-03-23T15:45:00Z",   // Formato ISO para datas
  "cliente": {                            // Objeto com nome e e-mail
    "nome": "João Roberto",
    "email": "joao.roberto@email.com"
  },
  "itens": [                              // Lista (array) contendo objetos
    {
      "produto": "Bolo de Cenoura Inteiro",
      "quantidade": 1,
      "observacoes": "Caprichar na cobertura de chocolate"
    },
    {
      "produto": "Brigadeiro Tradicional",
      "quantidade": 50,
      "observacoes": "Forminhas na cor azul"
    }
  ],
  "enderecoEntrega": {                    // Objeto com o endereço bem aninhado
    "rua": "Rua das Flores",
    "numero": 123,
    "bairro": "Jardim Primavera",
    "cidade": "São Paulo",
    "cep": "05400-000"
  },
  "formaPagamento": "pix",                // String (ex: pix ou cartão)
  "totalCalculado": 185.50                // Number representando o financeiro
};