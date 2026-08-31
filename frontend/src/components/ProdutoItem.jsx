function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function ProdutoItem({ produto, onExcluir }) {
  return (
    <li className="flex justify-between items-center px-3.5 py-3 border border-gray-200 rounded-lg bg-gray-50">
      <div className="flex flex-col">
        <span className="font-semibold text-gray-800 text-sm">{produto.nome}</span>
        <span className="text-gray-500 text-[13px]">{formatarPreco(produto.preco)}</span>
      </div>
      <button
        onClick={() => onExcluir(produto.id)}
        className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-[13px] hover:bg-red-700 transition-colors cursor-pointer"
      >
        Excluir
      </button>
    </li>
  );
}

export default ProdutoItem;