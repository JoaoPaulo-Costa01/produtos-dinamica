import ProdutoItem from './ProdutoItem';

function ProdutoLista({ produtos, onExcluir }) {
  if (produtos.length === 0) {
    return <p className="text-sm text-gray-400">Nenhum produto cadastrado.</p>;
  }

  return (
    <ul className="flex flex-col gap-2.5">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} onExcluir={onExcluir} />
      ))}
    </ul>
  );
}

export default ProdutoLista;