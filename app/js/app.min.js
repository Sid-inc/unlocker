const header = document.querySelector('.main-header');
const scrollChange = 16;

const nav = document.querySelector('.main-nav');
const navTrigger = document.querySelector('.main-header__menu-trigger');

let scrollpos = window.scrollY;

function fixHeaderOnTop() {
  header.classList.add("main-header--fixed");
}

function freeHeaderOnTop() {
  header.classList.remove("main-header--fixed");
}

function changeMenuState() {
  navTrigger.classList.toggle('main-header__menu-trigger--opened');
  nav.classList.toggle('main-nav--opened');
}

window.addEventListener('scroll', function() {
  scrollpos = this.window.scrollY;
  if (scrollpos >= scrollChange) fixHeaderOnTop()
  else freeHeaderOnTop();
});

navTrigger.addEventListener('click', () => {
  changeMenuState();
});

nav.addEventListener('click', (event) => {
  const target = event.target;
  
  if (target.classList.contains('main-nav__link')) {
    changeMenuState();
  }
});
