const API_URL = 'http://localhost:3000/produtos';

const form = document.getElementById('form-produto');
const inputNome = document.getElementById('nome');
const inputPreco = document.getElementById('preco');
const listaProdutos = document.getElementById('lista-produtos');
const mensagem = document.getElementById('mensagem');

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = `mensagem ${tipo}`;
  setTimeout(() => {
    mensagem.textContent = '';
    mensagem.className = 'mensagem';
  }, 3000);
}

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

async function carregarProdutos() {
  try {
    const resposta = await fetch(API_URL);
    const produtos = await resposta.json();
    renderizarProdutos(produtos);
  } catch (erro) {
    mostrarMensagem('Erro ao carregar produtos.', 'erro');
  }
}

function renderizarProdutos(produtos) {
  listaProdutos.innerHTML = '';

  if (produtos.length === 0) {
    const vazio = document.createElement('li');
    vazio.className = 'vazio';
    vazio.textContent = 'Nenhum produto cadastrado.';
    listaProdutos.appendChild(vazio);
    return;
  }

  produtos.forEach(produto => {
    const item = document.createElement('li');
    item.className = 'item-produto';

    item.innerHTML = `
      <div class="info">
        <span class="nome">${produto.nome}</span>
        <span class="preco">${formatarPreco(produto.preco)}</span>
      </div>
      <button class="btn-excluir" data-id="${produto.id}">Excluir</button>
    `;

    listaProdutos.appendChild(item);
  });
}

async function cadastrarProduto(nome, preco) {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, preco })
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.erro || 'Erro ao cadastrar produto.');
  }
}

async function excluirProduto(id) {
  const resposta = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

  if (!resposta.ok && resposta.status !== 204) {
    throw new Error('Erro ao excluir produto.');
  }
}

form.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const nome = inputNome.value.trim();
  const preco = inputPreco.value;

  if (!nome || !preco) {
    mostrarMensagem('Preencha todos os campos.', 'erro');
    return;
  }

  try {
    await cadastrarProduto(nome, preco);
    inputNome.value = '';
    inputPreco.value = '';
    mostrarMensagem('Produto cadastrado com sucesso!', 'sucesso');
    carregarProdutos();
  } catch (erro) {
    mostrarMensagem(erro.message, 'erro');
  }
});

listaProdutos.addEventListener('click', async (evento) => {
  if (evento.target.classList.contains('btn-excluir')) {
    const id = evento.target.getAttribute('data-id');

    try {
      await excluirProduto(id);
      mostrarMensagem('Produto excluído com sucesso!', 'sucesso');
      carregarProdutos();
    } catch (erro) {
      mostrarMensagem(erro.message, 'erro');
    }
  }
});

carregarProdutos();