const API_URL = 'http://localhost:3000/produtos';

export async function listarProdutos() {
  const resposta = await fetch(API_URL);
  if (!resposta.ok) throw new Error('Erro ao carregar produtos.');
  return resposta.json();
}

export async function cadastrarProduto(nome, preco) {
  const resposta = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, preco })
  });

  if (!resposta.ok) {
    const erro = await resposta.json();
    throw new Error(erro.erro || 'Erro ao cadastrar produto.');
  }

  return resposta.json();
}

export async function excluirProduto(id) {
  const resposta = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

  if (!resposta.ok && resposta.status !== 204) {
    throw new Error('Erro ao excluir produto.');
  }
}