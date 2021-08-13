let body = document.querySelector('body')
var  currentProductId
// let navigation = $('.navigation')
let navigation = document.querySelector('.navigation')
let header = document.querySelector('.header')
let headerBurger = document.querySelector('.header__burger')
let mobmenu = document.querySelector('.mobmenu')
let mobmenuBurger = document.querySelector('.mobmenu__burger')
let mobmenuOverlay = document.querySelector('.mobmenu__overlay')
// let mobmenuNav = document.querySelector('.mobmenu__nav')
let widthHideNav = 900
// tabs
let tabBtns = document.querySelector('.tab__btns')
let tabContent = document.querySelectorAll('.tab__content')
// // tabs

// setting the selected product Id

body.addEventListener('click', (e)=> {
    if(!e.target.closest(`.${POINTER_PRODUCT_ID}`)) return
    currentProductId = e.target.closest(`.${CONTAIN_PRODUCT_ID}`).getAttribute('data-product-id')
})

// // setting the selected product Id 

// show/hide navigation headerBurger
if(window.innerWidth <= widthHideNav) {
    navigation.style.display = 'none'
    headerBurger.style.display = 'block'
}
else {
    navigation.style.display = 'block'
    headerBurger.style.display = 'none'
}
window.addEventListener ('resize', () => {
    if(window.innerWidth <= widthHideNav) {
        navigation.style.display = 'none'
        headerBurger.style.display = 'block'
    }
    else {
        navigation.style.display = 'block'
        headerBurger.style.display = 'none'
    }    
})
// // show/hide navigation headerBurger

// logic for mobile menu
let mobmenuHeader = document.querySelector('.mobmenu__header')
mobmenuHeader.style.height = header.offsetHeight + 'px'
window.addEventListener('resize', () => {
    mobmenuHeader.style.height = header.offsetHeight + 'px'
    // menu burger
    if(window.innerWidth > widthHideNav) {
        if(headerBurger.classList.contains('header__burger_active')) {
            mobmenu.classList.remove('mobmenu_active')
            mobmenuOverlay.classList.remove('mobmenu__overlay_active')
            body.classList.remove('body_lock')        
        }
    }
    else {
        if(headerBurger.classList.contains('header__burger_active')) {
            mobmenu.classList.add('mobmenu_active')
            mobmenuOverlay.classList.add('mobmenu__overlay_active')
            body.classList.add('body_lock')        
        }
    }
    // // menu burger 
})
// // logic for mobile menu

// logic for burger buttons
headerBurger.addEventListener('click', () => {
    headerBurger.classList.add('header__burger_active')
    mobmenu.classList.add('mobmenu_active')
    mobmenuOverlay.classList.add('mobmenu__overlay_active')
    body.classList.add('body_lock')
})
mobmenuBurger.addEventListener('click', () => {
    mobmenu.classList.remove('mobmenu_active')
    mobmenuOverlay.classList.remove('mobmenu__overlay_active')
    body.classList.remove('body_lock')
    headerBurger.classList.remove('header__burger_active')
})
// // logic for burger buttons

// show/hide element using for order tab, pwa
function createElem(elem, classes, html, id) {
    let element = document.createElement(elem)
    try {
        if(id === undefined) {
            throw new Error('For the application to work correctly, enter the order element id to function createElem in common.js file')
        }
        if(id !== undefined)
            element.setAttribute('id', id)
    }
    catch(error) {
        alert(error.message)
        while(id === undefined) {
            id = prompt('Input the element id')
        }
        element.setAttribute('id', id)
    }
    if(classes !== undefined)
        element.setAttribute('class', classes)
    element.innerHTML = html
    return element
}

function showElem(elem, targetInsert) {
    let element
    // for check if exists element in DOM
    element = document.getElementById(elem.getAttribute('id'))
        // check if exists element in DOM
    if(!element) {
        targetInsert.after(elem) 
    }
    else {
        elem.style.display = 'block'
    }
}
// show/hide element using for order tab, pwa   