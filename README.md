## Desafio FrontEnd Developer - Linx.

### Tecnologias Utilizadas

1. Git
2. JavaScript
3. CSS
4. HTML

#### Utilização do projeto:

1. Faça o clone do projeto, Abra o terminal do git e execute o comando: <br>
   `https://github.com/TeixeiraFP/frontend-developer-challenge.git `

### Sobre

Projeto desenvolvido em JavaScrip, utilizando elementos do DOM para manipular a interface. Uma API foi consumida de forma paginada, cada página consultada retorna 8 produtos. Todo o layout pré definido em um mock disponibilizado pela linx. <br>

### Deploy netlify: ` https://gallant-mclean-c98e59.netlify.app/`

### OBS: <br>

Pensando em escalabilidade e no principio da responsabilidade única, seria interessante que a função card ficasse em um arquivo separado, tive problemas com coors e com promisse ao tentar desestruturar o código. <br>
Minha intenção era que com apenas um arquivo HTML fosse possivel acessar as três opções (Desktop, Mobile, Email). Com a função card separada, seria possivel controlar a quantidade de itens vindo de cada requisição, o que seria muito útil para pagina de e-mail.<br>
