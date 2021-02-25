const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const nav = document.querySelector('.navigation');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  // body.classList.toggle('body--noscroll');
  nav.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);
