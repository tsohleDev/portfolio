const hamburger = document.querySelector('#hamburger');
const links = document.querySelectorAll('.nav__desktoplink');
const projectsButtons = document.querySelectorAll('.project__button');
const popUp = document.querySelector('.portfolio__PopUP');

function invisibleToogle() {
  const menu = document.querySelector('.closed__menu');
  const newMenu = document.querySelector('.opened__menu');
  menu.classList.replace('closed__menu', 'opened__menu');
  newMenu.classList.replace('opened__menu', 'closed__menu');

  const invisible = document.querySelectorAll('.mobile__invisible');
  const visible = document.querySelectorAll('.mobile__visible');
  invisible.forEach((tag) => tag.classList.replace('mobile__invisible', 'mobile__visible'));
  visible.forEach((tag) => tag.classList.replace('mobile__visible', 'mobile__invisible'));

  if (document.querySelector('.toolbar') !== null) {
    document.querySelector('.toolbar').classList.replace('toolbar', 'toolbar__open');

    document.querySelector('.corner__geometry').classList.add('toolbar__open__row1');
    document.querySelector('.drop-down').classList.add('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.add('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.add('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.add('toolbar__open__row4');
  } else {
    document.querySelector('.toolbar__open').classList.replace('toolbar__open', 'toolbar');

    document.querySelector('.corner__geometry').classList.remove('toolbar__open__row1');
    document.querySelector('.drop-down').classList.remove('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.remove('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.remove('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.remove('toolbar__open__row4');
  }
}

hamburger.addEventListener('click', () => {
  const menu = document.querySelector('.closed__menu');
  const newMenu = document.querySelector('.opened__menu');
  menu.classList.replace('closed__menu', 'opened__menu');
  newMenu.classList.replace('opened__menu', 'closed__menu');

  const invisible = document.querySelectorAll('.mobile__invisible');
  const visible = document.querySelectorAll('.mobile__visible');
  invisible.forEach((tag) => tag.classList.replace('mobile__invisible', 'mobile__visible'));
  visible.forEach((tag) => tag.classList.replace('mobile__visible', 'mobile__invisible'));

  if (document.querySelector('.toolbar') !== null) {
    document.querySelector('.toolbar').classList.replace('toolbar', 'toolbar__open');
    document.querySelector('.corner__geometry').classList.add('toolbar__open__row1');
    document.querySelector('.drop-down').classList.add('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.add('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.add('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.add('toolbar__open__row4');
  } else {
    document.querySelector('.toolbar__open').classList.replace('toolbar__open', 'toolbar');

    document.querySelector('.corner__geometry').classList.remove('toolbar__open__row1');
    document.querySelector('.drop-down').classList.remove('toolbar__open__row1');
    document.querySelector('.mobile__photos').classList.remove('toolbar__open__row2');
    document.querySelector('.desktop__header').classList.remove('toolbar__open__row3');
    document.querySelector('.nav__bottomImage').classList.remove('toolbar__open__row4');
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    invisibleToogle();
  });
});

projectsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    popUp.style.display = 'flex';
  });
});

document.querySelector('.cross__project').addEventListener('click', () => {
  popUp.style.display = 'none';
});