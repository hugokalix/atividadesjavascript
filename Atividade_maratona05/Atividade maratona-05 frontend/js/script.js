// Lista de sabores 
const sabores = ["Chocolate", "Morango", "Baunilha", "Red Velvet"];
const listaUl = document.getElementById("lista-sabores");

// Utilizando forEach para iterar sobre a lista e criar os elementos na tela
sabores.forEach(function(sabor) {
    const item = document.createElement("li");
    item.textContent = sabor; 
    listaUl.appendChild(item);
});