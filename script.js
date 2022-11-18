const hamburger = document.querySelector('#hamburger');
const links = document.querySelectorAll('.nav__desktoplink');
const popUp = document.querySelector('.portfolio__PopUP');
const closePopUp = document.querySelector('#cross__project');
const sections = document.querySelectorAll('header,#headline, #works, #about, #contact, .footer');
const main = document.querySelector('main');

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

const projectsInfo = [{
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/one.svg',
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/two.svg',
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/three.svg',
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/four.svg',
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/five.svg',
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/six.svg',
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
},
];

const projectsButtons = Array.from(document.querySelectorAll('.project__button'));
const maxProjects = projectsButtons.length - 1;
const navigateToRightGalley = document.querySelector('.pop__display__right');
const navigateToRight = document.querySelector('.nav__pop__next');
const navigateToLeftGallery = document.querySelector('.pop__display__left');
const navigateToLeft = document.querySelector('.nav__pop__prev');
const smallImages = Array.from(document.querySelectorAll('.small__image'));
let projectIndex = 0;
let imageIndex = 0;

const loadModel = (i) => {
  const h1 = document.querySelector('.pop__title');
  const pictures = document.querySelectorAll('.image__project');
  const pOne = document.querySelector('.text__pop__one');
  const pTwo = document.querySelector('.text__pop__two');

  h1.innerHTML = projectsInfo[i].name;
  pictures.forEach((picture) => {
    picture.src = projectsInfo[i].url;
  });
  pOne.innerHTML = projectsInfo[i].descriptionOne;
  pTwo.innerHTML = projectsInfo[i].descriptionOne;
  projectIndex = i;
};
const selectImage = (i = 0) => {
  const prvs = document.querySelector('.select__image');
  if (prvs !== null) {
    prvs.classList.remove('select__image');
  }
  smallImages[i].classList.add('select__image');
};
projectsButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    popUp.style.display = 'grid';
    sections.forEach((section) => section.classList.add('pop__hide'));
    main.classList.replace('main', 'main__pop');

    loadModel(i);
    selectImage();
  });
});

navigateToLeftGallery.addEventListener('click', () => {
  if (imageIndex > 0) {
    imageIndex -= 1;
    selectImage(imageIndex);
  }
});

navigateToLeft.addEventListener('click', () => {
  if (projectIndex > 0) {
    projectIndex -= 1;
    imageIndex = 0;
    loadModel(projectIndex);
    selectImage();
  }
});

navigateToRightGalley.addEventListener('click', () => {
  if (imageIndex < 3) {
    imageIndex += 1;
    selectImage(imageIndex);
  }
});

navigateToRight.addEventListener('click', () => {
  if (projectIndex < maxProjects) {
    projectIndex += 1;
    imageIndex = 0;
    loadModel(projectIndex);
    selectImage();
  }
});

closePopUp.addEventListener('click', () => {
  sections.forEach((section) => section.classList.remove('pop__hide'));
  main.classList.replace('main__pop', 'main');

  popUp.style.display = 'none';
  imageIndex = 0;
});