const header = document.querySelector('.main-header');
const scrollChange = 16;

let scrollpos = window.scrollY;

function fixHeaderOnTop() {
  header.classList.add("main-header--fixed");
}

function freeHeaderOnTop() {
  header.classList.remove("main-header--fixed");
}

window.addEventListener('scroll', function() {
  scrollpos = this.window.scrollY;
  if (scrollpos >= scrollChange) fixHeaderOnTop()
  else freeHeaderOnTop();
});
