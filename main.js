/*Nav-mobile*/
const btnMenu = document.querySelector('header.main button.menu')
const menu = document.querySelector('header.main')
btnMenu.addEventListener('click',menuOpen)


/*Safari*/
function menuOpen(){
  menu.classList.toggle('active')
}

function safariHacks() {
  let windowsVH = window.innerHeight / 100;
  document.querySelector('main').style.setProperty('--vh', windowsVH + 'px');
  window.addEventListener('resize', function() {
      document.querySelector('main').style.setProperty('--vh', windowsVH + 'px');
  });
}


safariHacks();