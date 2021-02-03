// Burger menu----------------------------------------
export default function burgerMenuInit() {
  const burgerOverlay = document.querySelector('.burger__overlay');
  const burgerMenuIcon = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.burger__menu');
  const body = document.querySelector('body');
  const burgerLinks = document.querySelectorAll('.burger__item');
  const burgerIcon = document.querySelector('.header__burger-icon');

  burgerMenuIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('is-active');
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.toggle('hide');
    burgerOverlay.classList.toggle('unvisible');
    body.classList.toggle('overflow');
  });
  burgerOverlay.addEventListener('click', () => {
    burgerMenuIcon.click();
  });
  burgerLinks.forEach((element) => element.addEventListener('click', () => {
    burgerMenuIcon.click();
  }));
}
