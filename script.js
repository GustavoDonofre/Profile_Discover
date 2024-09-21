function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    
    // Pegar a tag img
    
    const image = document.querySelector("#profile img")
   
    
    // substituir imagem
    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a imagem light
        image.setAttribute('src', './assets/assets/avatar-LIGHT.png')
        image.setAttribute('alt', 'Meu avatar em light mode')
        } else{
        // se tiver sem light mode, manter a imagem normal
        image.setAttribute('src', './assets/assets/avatar.png')
        image.setAttribute('alt', 'Meu avatar em dark mode')
    }
    

}