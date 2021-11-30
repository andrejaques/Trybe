Esse projeto é uma API base para ser utilizada na [aula sobre testes de integração](https://app.betrybe.com/course/back-end/autenticacao-e-upload-de-arquivos/nodejs-testando-apis-com-testes-de-integracao/0e610ada-1418-4fae-9d5a-8232909984f4) do curso de NodeJS da Trybe.

##  Baixando o projeto

No seu terminal, cmd, power shell ou bash execute os seguintes comandos:

- `git clone https://github.com/tryber/nodejs-jwt-tests-base-project.git`
- `cd nodejs-jwt-tests-base-project`
- `npm i`
- `npm run dev`

## Estrutura base do projeto

Abaixo, está a estrutura base do projeto. Ele implementa uma API em NodeJS e Express  que permite criar usuários, listar posts e fazer login. O projeto base contém uma autenticação via JWT. Durante a aula, é mostrado como adicionar testes de integração ao projeto.
 
```
├── controllers
│  ├── login.js
│  ├── posts.js
│  ├── products.js
│  └── users.js
├── middlewares
│  └── validateJWT.js
├── models
│  ├── connections.js
│  └── users.js
├── services
│  └── users.js
├── .gitignore
├── index.js
├── package.json
└── README.md
```

### Modelos

Modelos são responsáveis por fazer o mapeamento entre as entidades que sua aplicação manipula e a camada de dados. Contêm as regras de negócio da sua aplicação e são responsáveis por ler e escrever dados no seu bando de dados.

### Controllers

Controllers são as funções utilizadas como callbacks na definição de rotas.
Eles são resposáveis por lidar com as requisições que chegam nas diferentes rotas de sua aplicação, executando regras de negócio e criando a resposta que será enviada para o cliente. Normalmente, interagem com um ou mais modelos para ler/escrever dados do banco de dados.

A API possui quatro controllers:
  
  - `login.js`: Responsável pela lógica de login.

  - `posts.js`: Encontra os posts de um usuário.

  - `products.js`: Cria produtos, mas só pode ser acessado por um usuário logado.

  - `users.js`: Lida com a criação de novo usuários.
 
### `index.js`

Aqui é onde é criado de fato a API com o Express. Esse é o arquivo que concentra os controllers do projeto. Também é onde todas as rotas são configuradas.
