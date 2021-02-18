const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');


hamburger.addEventListener('click',() => {
      navLinks.classList.toggle("open");
})

function myFunction(x) {
  x.classList.toggle("change");
}

function mysecondFunction(x) {
  x.classList.toggle("open");
}


navLinks.addEventListener('click', () => {
  hamburger.classList.toggle("change");
})