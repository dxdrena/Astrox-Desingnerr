
let itensCarrinho = 0;
let totalCompra = 0;
let carrinho = [];

function adicionarCarrinho(nome, preco) {
  itensCarrinho++;
  totalCompra += preco;
  carrinho.push({ nome, preco });
  atualizarTela("✅ Produto adicionado ao carrinho!");
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    atualizarTela("⚠️ Carrinho vazio!");
    return;
  }

  itensCarrinho = 0;
  totalCompra = 0;
  carrinho = [];

  atualizarTela("🎉 Compra finalizada com sucesso!");
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
