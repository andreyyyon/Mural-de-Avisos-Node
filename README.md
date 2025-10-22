# Mural de Avisos
Criação de API e integração com o front-end para um Mural de Avisos

Pequena API em Node.js com front-end estático para um Mural de Avisos. Projeto usa Express, CORS e body-parser; os dados ficam em memória (arquivo de modelo).

## Requisitos
- Node.js (recomendado >= 18)
- npm

## Instalação
1. Clone ou copie o projeto para sua máquina.
2. Instale dependências:
```sh
npm install
```

## Executando
Inicie o servidor:
```sh
node index.js
```
Abra o front-end em: http://localhost:3000/

## Endpoints principais
- GET /api/all — retorna todos os posts (JSON)
- POST /api/new — adiciona novo post  
  Corpo (JSON): 
  ```json
  { "title": "Título", "description": "Descrição" }
  ```

## Estrutura importante
- index.js — entrada do servidor  
- routes/api.js — rotas e configuração de CORS  
- model/post.js — modelo em memória (posts.getAll, posts.newPost, posts.deletePost)  
- public/index.html — front-end estático  
- public/script/script.js — chamadas fetch (updatePosts, newPost)

## Observações
- Os dados são voláteis (armazenados em memória). Para persistência, integre um banco de dados (SQLite, MongoDB, etc.).  
- Ajuste a origem em routes/api.js se for consumir a API de outra origem (CORS).  

## Licença
Projeto aberto para estudos — sem garantia.
