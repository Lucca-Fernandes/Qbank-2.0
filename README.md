# QBank

## Visão Geral do Projeto
O projeto **QBank** tem como objetivo desenvolver uma aplicação bancária moderna e eficiente, dividida em duas partes principais: o backend, que é responsável pela gestão e autenticação de usuários, e o frontend, que oferece uma interface amigável para interação com o usuário.

A equipe está comprometida em criar uma solução robusta e escalável para o gerenciamento de usuários e autenticação.

## Integrantes do Grupo:
- Lucca Fernandes de Castro

## Tecnologias Utilizadas:
- **Node.js**: Para o desenvolvimento do backend com Express.
- **MongoDB**: Para o armazenamento de dados da aplicação.
- **React.js**: Para a interface web do frontend.
- **Vite**: Para o build e execução do frontend.
- **Axios**: Para realizar requisições HTTP entre o frontend e o backend.
- **Material-UI**: Para a construção de componentes e UI no frontend.

## Estrutura do Projeto
O projeto está dividido nas seguintes pastas:

- **API**: Contém a parte do backend, com as rotas, controladores e conexões com o banco de dados.
- **WEB**: Contém o frontend da aplicação, onde os usuários podem interagir com a interface web.
- **assets**: Contém imagens e outros recursos estáticos usados pelo frontend.
- **services**: Contém arquivos que lidam com requisições de API (por exemplo, usando Axios).

## Funcionalidades do Projeto
- Cadastro de usuários com validação de dados.
- Login e autenticação de usuários com JWT (JSON Web Token).
- Exibição de lista de usuários cadastrados no painel do administrador.
- Interface de usuário responsiva e moderna utilizando Material-UI.
- Página inicial com opções de login e registro.
- Proteção de rotas para autenticação do usuário.

## Como Rodar o Projeto Localmente

O projeto está dividido em duas partes principais: o **backend** (API) e o **frontend** (WEB). Apenas o **frontend** precisa ser rodado com o comando **npm run dev** após a instalação das dependências. A api já foi hospedada.

### Backend (API)

1. **Clone o repositório para sua máquina local**:
   ```bash
   git clone https://github.com/Lucca-Fernandes/Qbank-2.0.git
