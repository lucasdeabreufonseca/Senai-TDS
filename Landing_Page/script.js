var nomeGlobal;
var mensagemGlobal;

function conferirMensagemWhsatsApp()
{
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    console.log(nome, mensagem)

    document.getElementById("conNome").textContent = nome;
    document.getElementById("conMsg").textContent = mensagem;
}

function enviar()
{
    var numeroTelefone = "40028922"

    var linkWhatsApp = "https://wa.me" + numeroTelefone + "?text=NOME: " + nomeGlobal + " - " + mensagemGlobal;

    window.open(linkWhatsApp,"_blank")
}