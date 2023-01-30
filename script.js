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
  stack: ['HTML/CSS', 'JavaScript'],
  url: './images/desktop empty.png',
  slide: ['./images/one one.svg', './images/one two.svg', './images/one three.svg', './images/one two.svg'],
  descriptionOne: 'Leader board is a website that uses a API to show and store score of different clients across the world',
  descriptionTwo: 'It is build with vanilla Javascript and bundled with webpack. It stores a score of a user on a cloud ran and mantained by google, Its a demostration of front end API utilazation.',
  live: 'https://tsohle.me/Leaderboard/dist',
  source: 'https://github.com/tsohleDev/Leaderboard',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/two.svg',
  slide: ['./images/two.svg', './images/two.svg', './images/two.svg', './images/two.svg'],
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/three.svg',
  slide: ['./images/three.svg', './images/three.svg', './images/three.svg', './images/three.svg'],
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/four.svg',
  slide: ['./images/four.svg', './images/four.svg', './images/four.svg', './images/four.svg'],
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/five.svg',
  slide: ['./images/five.svg', './images/five.svg', './images/five.svg', './images/five.svg'],
  descriptionOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  , quis nostrud exercitation ullamco laboris nisi',
  descriptionTwo: 'Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
}, {
  name: 'Project name goes here',
  stack: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  url: './images/six.svg',
  slide: ['./images/six.svg', './images/six.svg', './images/six.svg', './images/six.svg'],
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
  const ruby = document.querySelector('.ruby');
  if (i === 0) { ruby.style.display = 'none'; }
  else { ruby.style.display = 'flex'; }
  const h1 = document.querySelector('.pop__title');
  const pictures = document.querySelectorAll('.small__image');
  const pOne = document.querySelector('.text__pop__one');
  const pTwo = document.querySelector('.text__pop__two');
  const live = document.querySelector('.live__link');
  live.href = projectsInfo[i].live;
  
  const source = document.querySelector('.source__link');
  source.href = projectsInfo[i].source;
  console.log(live, source);
  h1.innerHTML = projectsInfo[i].name;
  for (let j = 0; j < pictures.length; j++) {
    pictures[j].src = projectsInfo[i].slide[j];
  }
  pOne.innerHTML = projectsInfo[i].descriptionOne;
  pTwo.innerHTML = projectsInfo[i].descriptionTwo;
  projectIndex = i;
};
const selectImage = (i = 0) => {
  const prvs = document.querySelector('.select__image');
  if (prvs !== null) {
    prvs.classList.remove('select__image');
  }
  smallImages[i].classList.add('select__image');
  const big = document.querySelector('.big__image');
  big.src = smallImages[i].src;
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