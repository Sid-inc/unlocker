const header = document.querySelector('.main-header');
const scrollChange = 16;

const body = document.querySelector('body');
const nav = document.querySelector('.main-nav');
const navTrigger = document.querySelector('.main-header__menu-trigger');

const callBtn = document.querySelector('.main__callback');
const callModal = document.querySelector('.modal');
const callModalCloseBtn = document.querySelector('.modal__close');
const callModalCancelBtn = document.querySelector('.form__action--cancel');
const nameField = document.querySelector('.form__field--name');

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
  body.classList.toggle('scroll-block');
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

function changeModalState(state) {
  if (state && !callModal.classList.contains('modal--show')) {
    callModal.classList.add('modal--show');
    body.classList.add('scroll-block');
    nameField.focus();
  } else {
    callModal.classList.remove('modal--show');
    body.classList.remove('scroll-block');
  }
}

callBtn.addEventListener('click', () => {
  changeModalState(true);
});

callModalCloseBtn.addEventListener('click', () => {
  changeModalState(false);
});

callModalCancelBtn.addEventListener('click', () => {
  changeModalState(false);
});
