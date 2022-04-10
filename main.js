/*Nav*/
const btnMenu = document.querySelector('header.main button.menu')
const menu = document.querySelector('header.main')
btnMenu.addEventListener('click',menuOpen)

function menuOpen(){
  menu.classList.toggle('active')
}