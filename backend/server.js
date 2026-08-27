const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let produtos = [];
let nextId = 1;

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.post('/produtos', (req, res) => {
  const { nome, preco } = req.body;

  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ erro: 'Nome é obrigatório.' });
  }

  const precoNumerico = Number(preco);
  if (preco === undefined || isNaN(precoNumerico) || precoNumerico < 0) {
    return res.status(400).json({ erro: 'Preço inválido.' });
  }

  const novoProduto = {
    id: nextId++,
    nome: nome.trim(),
    preco: precoNumerico
  };

  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

app.delete('/produtos/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = produtos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado.' });
  }

  produtos.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});