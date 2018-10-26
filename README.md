# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Setup:

* git clone https://github.com/icaromagnago/reactnd-project-myreads-starter.git
* install all project dependencies with `npm install` or `yarn install`
* start the development server with `npm start` or `yarn start`

## Static Typer Checker

This project uses Flow. To analyze the code for errors execute `yarn flow check`

## Application Checklist

### Main Page 

* A página principal exibe três estantes de livros, e cada livro é mostrado na estante correta.
* A página principal exibe um controle que permite aos usuários mudar os livros de estante. O controle deve estar ligado a cada instância de livros. A funcionalidade de mover um livro para uma estante diferente funciona corretamente.
* Quando é feito refresh no navegador, a página continua exibindo as mesmas informações.

### Search Page

1) A página de busca possui um campo de busca.

2) A página de busca se comporta corretamente:
* Quando o usuário digita algo no campo de busca, os livros relacionados à sua busca são corretamente exibidos na página.
* Resultados de buscas não são mostrados quando todo o texto do input de pesquisa é deletado
* Buscas inválidas são cuidadas e resultados anteriores não são mostrados.
* A pesquisa funciona corretamente quando um livro não possui um thumbnail ou um autor. (Para testar isto, pesquise por "poetry" e "biography").
* O usuário consegue pesquisar com múltiplas palavras, tais como "artificial intelligence".

3) Os resultados da página de busca permitem que os usuários selecionem "currently reading", "want to read" ou "read" e coloquem os livros na estante certa.

4) Livros que não possuem uma estante possuem a marcação em "None" na lista de seleção.

5) Livros que já estão na estante possuem a marcação em sua respectiva estante da lista de seleção.

6) Quando um livro é categorizado na página de busca e o usuário navega para a página principal, o livro aparece na respectiva estante da página principal.

### Routing

* A página principal contém um link para a página de busca. Ao clicar neste link, a página de busca é exibida e a URL no endereço do navegador é /search.
* A página de busca é exibida corretamente ao entrar na página inserindo /search diretamente na URL do projeto no navegador.
* A página de busca contém um link para a página principal. Ao clicar neste link, a página principal é exibida e a URL no endereço do navegador é /.

### Funcionalidade do código

* O estado componente é passado dos componentes pais para os filhos. A variável de estado não é modificada diretamente - a função setState() é usada de forma correta.
* Os livros possuem o mesmo estado tanto na página de busca como na página principal da aplicação: se um livro está na estante, isso é refletido nos dois locais.
* Todos os códigos JSX são formatados de maneira adequada e funcional.




