import { useState, useEffect } from 'react';
import ProdutoForm from './components/ProdutoForm';
import ProdutoLista from './components/ProdutoLista';
import { listarProdutos, cadastrarProduto, excluirProduto } from './api';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  useEffect(() => {
    carregarProdutos();
  }, []);

  function exibirMensagem(texto, tipo) {
    setMensagem({ texto, tipo });
    setTimeout(() => setMensagem({ texto: '', tipo: '' }), 3000);
  }

  async function carregarProdutos() {
    try {
      const dados = await listarProdutos();
      setProdutos(dados);
    } catch (erro) {
      exibirMensagem('Erro ao carregar produtos.', 'erro');
    }
  }

  async function handleCadastrar(nome, preco) {
    try {
      await cadastrarProduto(nome, preco);
      exibirMensagem('Produto cadastrado com sucesso!', 'sucesso');
      carregarProdutos();
    } catch (erro) {
      exibirMensagem(erro.message, 'erro');
    }
  }

  async function handleExcluir(id) {
    try {
      await excluirProduto(id);
      exibirMensagem('Produto excluído com sucesso!', 'sucesso');
      carregarProdutos();
    } catch (erro) {
      exibirMensagem(erro.message, 'erro');
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-10 px-4">
      <div className="w-full max-w-[480px] bg-white p-8 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <h1 className="text-[22px] text-gray-800 mb-6">Cadastro de Produtos</h1>

        <ProdutoForm onCadastrar={handleCadastrar} />

        {mensagem.texto && (
          <p
            className={`mt-3 text-sm min-h-[18px] ${
              mensagem.tipo === 'erro' ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {mensagem.texto}
          </p>
        )}

        <h2 className="text-lg text-gray-800 mt-8 mb-3">Produtos Cadastrados</h2>

        <ProdutoLista produtos={produtos} onExcluir={handleExcluir} />
      </div>
    </div>
  );
}

export default App;