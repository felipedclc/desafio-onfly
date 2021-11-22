# Requisitos do projeto:

## Desenvolver uma API REST em Node, com:

- Autenticação de usuário.
- CRUD de despesas.

### Na entidade despesas, deverá conter:
- Id;
- Descrição (descrição da despesa);
- Data (data de quando ocorreu a despesa);
- Usuário (usuário dono da despesa, um relacionamento com a tabela de Usuários);
- Valor (valor em reais da despesa);
- A api deverá conter uma forma de Autenticação. (o CRUD deve estar protegido pela autenticação).

#### Validação nos requests do CRUD 
- usuário existe;
- data não é futuro;
- valor não é negativo;
- descrição tem até 191 caracteres;

#### Colocar filtro por usuário na api de listar todas as despesas.

#### Ao cadastrar uma despesa, deverá ser enviado um e-mail para o usuário vinculado a despesa, com o título "despesacadastrada", este e-mail deverá ser enviado de forma assíncrona.

## Para rodar o projeto:
- instalar as dependências(npm install);

- criar o arquivo .env com as variáveis que serão utilizadas:
-- PORT=3000
-- MYSQL_USER=root
-- MYSQL_PASSWORD=senhadb
-- HOSTNAME=127.0.0.1
-- JWT_SECRET=secretdojwt