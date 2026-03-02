// Valores do exercício-01
const bolos_vendidos = 35; // 
const meta = 30; // 

// Verificando se atingiu a meta (maior ou igual) 
const atingiu_meta = bolos_vendidos >= meta;

// Verificando se superou a meta (estritamente maior) 
const superou_meta = bolos_vendidos > meta;

// Exibindo mensagens baseadas nos operadores de comparação 
if (superou_meta) {
    console.log("Incrível! Ela superou a meta do dia.");
} else if (atingiu_meta) {
    console.log("Muito bem! Ela atingiu a meta do dia.");
} else {
    console.log("Infelizmente a meta não foi atingida hoje.");
}



// Valores do exercício-02
const valor_pedido = 180; 
const cliente_vip = true; 

// Verificando com o operador lógico OU ("||")
if (valor_pedido > 200 || cliente_vip === true) { 
    console.log("Sucesso! O cliente tem direito ao frete grátis.");
} else {
    console.log("O cliente não tem direito ao frete grátis. Não foi dessa vez");
}


//Ateliê
 
/*Um ateliê oferece 10% de desconto se:
*O valor do serviço for maior ou igual a R$500 E
*O cliente for antigo
 
Considere:
*Valor do serviço: R$650
*Cliente antigo
Verifique se o cliente tem direito ao desconto usando operador lógico AND*/
 
const servico = 650
const cliente = true
 
if(servico >= 0.10 && cliente){
    console.log("com desconto")
}
else if(servico){
    console.log("cliente antigo com desconto")
}
 
else{
    console.log("sem desconto")
}
 
 
//Psicólogo
 
/* Ume psicólogo atende apenas se:
*O horário estiver disponivel E
*O paciente estiver cadastrado
 
Considere:
*Horário disponivel:true
*Paciente cadastrado: false
Verifique se a consulta pode ser agendada */
 
const horario = true
const paciente = false
 
if(horario && paciente){
    console.log("horario disponivel")
}
else if(paciente){
    console.log("cadastrado")
}
 
else{
    console.log("cadastrado, mas sem horarios")
}




