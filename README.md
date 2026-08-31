# Sistema de Cadastro de Produtos

Projeto desenvolvido como teste técnico para processo seletivo de estágio. Trata-se de uma aplicação full stack simples para cadastro, listagem e exclusão de produtos, com backend em Node.js/Express e frontend em React (Vite) estilizado com Tailwind CSS, totalmente integrados via requisições HTTP.

O objetivo do desafio foi demonstrar organização de código, clareza no raciocínio de implementação e a capacidade de integrar frontend e backend de forma funcional e coesa.

## Propósito do Projeto

Desenvolvi esta aplicação focando em entregar uma interface com alto desempenho e rapidez, alinhando-me à missão da empresa do processo seletivo de fornecer informações seguras e de qualidade.

## Tecnologias Utilizadas

**Backend**
- Node.js
- Express
- CORS

**Frontend**
- React
- Vite
- Tailwind CSS
- Fetch API

## Imagem do projeto

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f698e354-c71c-4e11-a01d-e267f6b69643" />

## Pré-requisitos e Como Rodar

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Caso não tenha o git:

Faça o download do projeto, apertando code que estará verde e depois aperte download zip.
Extraia o arquivo, entre na pasta, entre em outra pasta novamente, e siga os passos que estão numerados.

## Caso tenha o git:

```bash
git clone https://github.com/JoaoPaulo-Costa01/produtos-dinamica
```

Entre na pasta e siga os passo que estão numerados.

### 1. Instalar as dependências do backend

```bash
cd backend
npm install
```

### 2. Iniciar o servidor

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

**Importante:** deixe esse terminal aberto enquanto estiver usando a aplicação.

### 3. Instalar e rodar o frontend

Abra um **novo terminal** (sem fechar o do backend) e entre na pasta `frontend`:

```bash
cd frontend
npm install
```

Depois, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local em que a aplicação está rodando (geralmente `http://localhost:5173`). Abra esse endereço no navegador para acessar a interface.

## Funcionalidades

- **Cadastro de produtos**: formulário com campos de Nome e Preço, validados tanto no frontend quanto no backend.
- **Listagem de produtos**: exibição automática dos produtos cadastrados, atualizada em tempo real após cada operação.
- **Exclusão de produtos (bônus)**: implementada com sucesso a rota `DELETE /produtos/:id`, permitindo remover um produto específico diretamente pela interface, com atualização instantânea da lista.
