function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }

  //pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, mudar para img light
      img.setAttribute("src", "./assets/avatar-light.png")
  }  else {
    //se tiver sem o light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar1.png")
  }
}