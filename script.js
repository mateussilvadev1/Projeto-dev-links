function toggleMode() {
  const html = document.documentElement //pegando html
  html.classList.toggle(`light`) //trocando light e dark mode

  // pegar a  tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains(`light`)) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./desktop/profile-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar-main.png")
  }

  // a imagem nao estava carregando
  // fiz testes no html para verificar o caminho da tag img, estava tudo certo
  //notei que o erro nao estava no html e fui verificar no java script
  //ali estava o erro, o caminho do sett atribute estava com o texto da img antiga
  //ajustei e deu certo
  //heureka
}
