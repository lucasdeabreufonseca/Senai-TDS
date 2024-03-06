function adicionarItem(){
    //obter os valores
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    //validar se os campos estão preenchidos

    if (!nome || !valor || !quantidade){
        alert("PREENCHA TODOS OS CAMPOS!!")
        return;
    }

    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0);
    var celulaValor = novaLinha.insertCell(1);
    var celulaQuantidade = novaLinha.insertCell(2);

    //Atribuir as celulas os valores digitados

    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor;
    celulaQuantidade.innerHTML = quantidade;

    //limpar os campos

    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""

}

function removerItem(){
    var nomeParaRemover = document.getElementById("nomeRemover").value;
    if(!nomeParaRemover){
        alert("Digite um nome existente")
        return;
    }
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var linhas = tabela.getElementsByTagName("tr");
    
    for(var i = 0; i < linhas.length ; i++){
        var celulaNome = linhas[i].getElementsByTagName("td")[0];
    
    if (celulaNome && celulaNome.innerHTML === nomeParaRemover){
        tabela.deleteRow(i);
        return
    }
    alert("Digite um nome existente")
    }
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de produtos"});
    XLSX.writeFile(wb,nomeArquivo);
}