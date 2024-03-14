$(document).ready(function(){
    //recupera carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    //elemento da lista
    const listaElement = $("#lista");

    //elemento total
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        //variavel para acumular o preco
        let totalPreco = 0;

        //iteracao sobre os elementros do carrinho 
        $.each(carrinho, function(index, item){
            //cria um elemento da lista para cada item
            const listitem = $("<li>").text(
                `${item.descricao} - Preço: R$ ${item.preco.Tofixed(2)}`
            );

            listaElement.append(listItem);
            totalPreco = item.preco;
        })
        totalElement.text(`Total: R$ ${totalPreco.ToFixed(2)}`)
    }
    exibirCarrinho()
})