
let itensCarrinho = 0;
let totalCompra = 0;
let carrinho = [];

function adicionarCarrinho(nome, preco) {
  itensCarrinho++;
  totalCompra += preco;
  carrinho.push({ nome, preco });
  atualizarTela("✅ Produto adicionado ao carrinho!");
}

function finalizarCompraWhatsApp() {
  if (carrinho.length === 0) {
    atualizarTela("⚠️ Carrinho vazio!");
    return;
  }

  let mensagem = "🛍️ *Pedido da Loja*\n\n";

  for (let item of carrinho) {
    mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
  }

  mensagem += `\n💰 *Total:* R$ ${totalCompra.toFixed(2)}\n\n`;
  mensagem += "📲 Forma de pagamento: PIX";

  // 👉 COLOQUE SEU NÚMERO AQUI (com DDI +55)
  let telefone = "5575999807298";

  let url = `https://wa.me/5575999807298?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

function atualizarTela(mensagem) {
  document.getElementById("contador").innerText = itensCarrinho;
  document.getElementById("total").innerText = totalCompra.toFixed(2);
  document.getElementById("mensagem").innerText = mensagem;

  let lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  for (let item of carrinho) {
    let li = document.createElement("li");
    li.innerText = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    lista.appendChild(li);
  }
}
