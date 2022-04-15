/*Nav-mobile*/
const btnMenu = document.querySelector('header.main button.menu')
const menu = document.querySelector('header.main')
btnMenu.addEventListener('click',menuOpen)

/*Nav-desktop*/
const navBar = document.querySelector('.main-nav .links')
const navLinks = document.querySelectorAll('.main-nav .link')
const dot = document.querySelector('.dot')
if (dot) { 
  navBar.addEventListener("mouseover", () =>{ dot.classList.add('moving');})
  navBar.addEventListener("mouseout", () =>{ dot.classList.remove('moving');})
  navLinks.forEach((link) =>{ 
    link.addEventListener("mouseover", () =>
    { 
      dot.classList.add('moving');
      dot.style.setProperty('--move', link.offsetLeft - dot.offsetLeft + 'px');
    });
  })
  
}




function menuOpen(){
  menu.classList.toggle('active')
}

/*Safari*/
function safariHacks() {
  let windowsVH = window.innerHeight / 100;
  document.querySelector('main').style.setProperty('--vh', windowsVH + 'px');
}
window.addEventListener('resize', safariHacks);
safariHacks();