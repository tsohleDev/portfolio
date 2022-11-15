let hamburger =  document.querySelector('#hamburger')
let links = document.querySelectorAll('.nav__desktoplink')

function invisibleToogle() {
    let menu = document.querySelector('.closed__menu')
    let newMenu = document.querySelector('.opened__menu')
    menu.classList.replace('closed__menu','opened__menu')
    newMenu.classList.replace('opened__menu','closed__menu')
    
    let invisible = document.querySelectorAll('.mobile__invisible')
    let visible = document.querySelectorAll('.mobile__visible')
    invisible.forEach(tag => tag.classList.replace('mobile__invisible','mobile__visible'))
    visible.forEach(tag => tag.classList.replace('mobile__visible','mobile__invisible'))
    
    
    if (document.querySelector('.toolbar') !== null){
        document.querySelector('.toolbar').classList.replace('toolbar', 'toolbar__open')

        document.querySelector('.corner__geometry').classList.add('toolbar__open__row1')
        document.querySelector('.drop-down').classList.add('toolbar__open__row1')
        document.querySelector('.mobile__photos').classList.add('toolbar__open__row2')
        document.querySelector('.desktop__header').classList.add('toolbar__open__row3')
        document.querySelector('.nav__bottomImage').classList.add('toolbar__open__row4')
    } else {
        document.querySelector('.toolbar__open').classList.replace('toolbar__open', 'toolbar')

        document.querySelector('.corner__geometry').classList.remove('toolbar__open__row1')
        document.querySelector('.drop-down').classList.remove('toolbar__open__row1')
        document.querySelector('.mobile__photos').classList.remove('toolbar__open__row2')
        document.querySelector('.desktop__header').classList.remove('toolbar__open__row3')
        document.querySelector('.nav__bottomImage').classList.remove('toolbar__open__row4')
    }
}

hamburger.addEventListener('click', () => {
    let menu = document.querySelector('.closed__menu')
    let newMenu = document.querySelector('.opened__menu')
    menu.classList.replace('closed__menu','opened__menu')
    newMenu.classList.replace('opened__menu','closed__menu')
    
    let invisible = document.querySelectorAll('.mobile__invisible')
    let visible = document.querySelectorAll('.mobile__visible')
    invisible.forEach(tag => tag.classList.replace('mobile__invisible','mobile__visible'))
    visible.forEach(tag => tag.classList.replace('mobile__visible','mobile__invisible'))
    
    
    if (document.querySelector('.toolbar') !== null){
        document.querySelector('.toolbar').classList.replace('toolbar', 'toolbar__open')

        document.querySelector('.corner__geometry').classList.add('toolbar__open__row1')
        document.querySelector('.drop-down').classList.add('toolbar__open__row1')
        document.querySelector('.mobile__photos').classList.add('toolbar__open__row2')
        document.querySelector('.desktop__header').classList.add('toolbar__open__row3')
        document.querySelector('.nav__bottomImage').classList.add('toolbar__open__row4')
    } else {
        document.querySelector('.toolbar__open').classList.replace('toolbar__open', 'toolbar')

        document.querySelector('.corner__geometry').classList.remove('toolbar__open__row1')
        document.querySelector('.drop-down').classList.remove('toolbar__open__row1')
        document.querySelector('.mobile__photos').classList.remove('toolbar__open__row2')
        document.querySelector('.desktop__header').classList.remove('toolbar__open__row3')
        document.querySelector('.nav__bottomImage').classList.remove('toolbar__open__row4')
    }
})

links.forEach(link => {
    link.addEventListener('click', () => {
        invisibleToogle()
    })
}) 