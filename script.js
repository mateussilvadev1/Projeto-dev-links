function toggleMode() {
  const html = document.documentElement //pegando html
  html.classList.toggle(`light`) //trocando light e dark mode

  // pegar a  tag img
  const img = document.querySelector("#profile img")

    if   (document.querySelector('#profile img')) {
      img.setAttribute("src", "./assets/Avatar-main.png")
    } 

    else (document.querySelector('#profile img')); {
      img.setAttribute("src", "./assets/Avatar-main.png")
  //decidi manter a mesma imagem em dark e light mode
  }
}


