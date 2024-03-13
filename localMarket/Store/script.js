let produtos;

window.onload = function() {
    var storeduser = localStorage.getItem("user");
    var user = JSON.parse(storeduser);
    document.getElementById("user").textContent = user.name;
    document.getElementById("perfil").textContent = user.entryDate;
    document.getElementById("idPerfil").textContent = user.id;
}

document.addEventListener("DOMContentLoaded", function () {
    fetch("../Dados/store.json")
    .then((response) => response.json())
    .then((data) => {
        produtos = data;
        const produtosContainer = document.getElementById("produtos-container");

        produtos.forEach((produto, index) => {
            const card = document.createElement("div");
            card.className = "card";
            card.style.width = "18rem";
            card.style.marginRight = "10px";

            const imagem = document.createElement("img");
            imagem.src = produto.imagem;
            imagem.className = "card-img-top";

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const cardTitle = document.createElement("div");
            cardTitle.className = "card-title";
            cardTitle.textContent = produto.descricao;

            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.textContent = "Preço: R$ " + produto.preco.toFixed(2);

            const btnAdicionarAoCarrinho = document.createElement("a");
            btnAdicionarAoCarrinho.href = "#"
            btnAdicionarAoCarrinho.className = "btn btn-primary btn-adicionar-ao-carrinho";
            btnAdicionarAoCarrinho.textContent = "Adicionar ao carrinho";
            btnAdicionarAoCarrinho.setAttribute("data-indice", index);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(btnAdicionarAoCarrinho);

            card.appendChild(imagem)
            card.appendChild(cardBody)

            produtosContainer.appendChild(card)

        });
    })
})