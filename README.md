# Api desenvolvida meramente como forma de consulta e exemplo

Durante o desenvolvimento desta API, os principais pacotes usados foram:
* consign
* nodemon
* mongoose

### Organização:

Para uma melhor organização, as seguintes regras de organização foram usadas:

* MVC
* Controllers com a regra de nome: products_controller.js (nome_controller.js)
* Rotas com a regra de nome: products_routes.js (nome_routes.js)
* Arquivo de configuração do banco de dados em: config/database.js
* Uso do consign para injeção de dependências (evitar o uso do require para deixar o código mais legível)
* Remoção da pasta 'public' e da pasta 'views'
* Uso de aspas simples ('') sempre que possível

### Issues Pendentes
As seguintes issues deverão ser abertas para chegar-mos na configuração mais completa e ideal:

* Adicionar autenticação por token
* Refatorar controller
* Adicionar crud de categorias para uso de relacionamentos
* Refatorar status code dos retornos do controller
* Refatorar todo o código para es6
* Remover do projeto packages não utilizados
* Escrever todo o código usando testes
* Documentar a api

### Documentação da api

Requisições Para produto.

verbo  | path						| Retorno																| status code
-------|----------------|---------------------------------------|-------------
get    | '/products'		|Retorna um json com todos os produtos	| 
post   | '/products'		|Retorna um json com o objeto cadastrado|	
get    | '/product/:id'	|Retorna o produto com o id especificado|	200(succes) /	412(error)
put    | '/product/:id'	|Altera o produto												|	200(succes) / 412(error)
delete | '/product/:id'	|Deleta o produto												|	200(succes) / 401(error)