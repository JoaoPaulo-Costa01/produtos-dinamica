import { useState } from 'react';

function ProdutoForm({ onCadastrar }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  async function handleSubmit(evento) {
    evento.preventDefault();
    if (!nome.trim() || !preco) return;
    await onCadastrar(nome.trim(), preco);
    setNome('');
    setPreco('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-sm text-gray-700">Nome</label>
        <input
          type="text"
          id="nome"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="preco" className="text-sm text-gray-700">Preço</label>
        <input
          type="number"
          id="preco"
          placeholder="0.00"
          step="0.01"
          min="0"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
          className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-600"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white rounded-lg text-[15px] font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default ProdutoForm;