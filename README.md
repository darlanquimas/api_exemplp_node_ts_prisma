# backend-ts-express-prisma

Api de criação de usuário e autenticação criada para por em pratica algus conceitos e testar algumas libs.

Api foi feita em uma organização de pastas simples.

Tecnologias usadas:
NodeJs
Typescript
Prisma ORM
Banco PostgreSQL

Para executar a API basta seguir os passos a baixo:

1 - Clone o projeto e acesse a raiz
2 - No terminal execute yarn install ou npm install para baixar as libs
3 - Instale o Primas CLI com yarn prisma ou npm prisma
4 - Renomeie o arquivo exemplo.env para .env e informe os valores das variáveis (URL de conxão com banco é obrigatória)
5 - Rode yarn prisma db push para criar o banco via migrations e yarn prisma db seed para preencher a tabela de usuário com usuário admin.
6 - Rode yarn dev para executar o projeto em modo desenvolvimento.

Para testar os endpoints pode ser usado o postman, segue na raiz do projeto o arquivo de collection do postman Api_exeplo.postman_collection.json
