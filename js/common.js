let body = document.querySelector('body')
// let navigation = $('.navigation')
let navigation = document.querySelector('.navigation')
let header = document.querySelector('.header')
let headerBurger = document.querySelector('.header__burger')
let mobmenu = document.querySelector('.mobmenu')
let mobmenuBurger = document.querySelector('.mobmenu__burger')
let mobmenuOverlay = document.querySelector('.mobmenu__overlay')
let mobmenuNav = document.querySelector('.mobmenu__nav')
let widthHideNav = 900
// tabs
let tabBtns = document.querySelector('.tab__btns')
let tabContent = document.querySelectorAll('.tab__content')
// // tabs

if(window.innerWidth <= widthHideNav) {
    navigation.style.display = 'none'
    $('.table').show()
    headerBurger.style.display = 'block'
}
else {
    navigation.style.display = 'block'
    $('.table').hide()
    headerBurger.style.display = 'none'
}
window.addEventListener ('resize', () => {
    if(window.innerWidth <= widthHideNav) {
        navigation.style.display = 'none'
        $('.table').show()
        headerBurger.style.display = 'block'
    }
    else {
        navigation.style.display = 'block'
        $('.table').hide()
        headerBurger.style.display = 'none'
    }    
})

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

// drop-down menu
// logics for menu enable/disable dropdown menu 
// for work need 4 elements with next data attributes: 
// 1 - data-dropdomn='node', 2 - data-dropdomn='link', 
// 3 - data-dropdomn='btn'(if exists) 4 - data-dropdomn='menu'
// they need to be placed in the appropriate places in the html
body.addEventListener('click', (e)=> {
    let tar = e.target;
    if(!tar.closest('button') && !tar.closest('a')) {
        return
    }
    else if(tar.closest('button')) {
        tar = tar.closest('button')
    }
    else if(tar.closest('a')) {
        tar = tar.closest('a')
    }
    if(tar.dataset.dropdown == 'link' || tar.dataset.dropdown == 'btn') {
        if(tar.parentElement.dataset.dropdown == 'node') {
            let node = tar.parentElement
            // on arrow
            for (const child of node.children) {
                if(child.dataset.dropdown == 'btn')
                    child.classList.toggle('mobmenu__btn_active')
            }
            // on drop-down menu
            node.nextElementSibling.classList.toggle('menu__dropdown_active')
        }
    }
})

// // drop-down menu

// show/hide element using for order tab, pwa
function createElem(elem, id, classes, html) {
    let element = document.createElement(elem)
    if(id !== undefined)
        element.setAttribute('id', id)
    if(classes !== undefined)
        element.setAttribute('class', classes)
    element.innerHTML = html
    return element
}

function showElem(elem) {
    let element
    // for check if exists element in DOM
    element = document.getElementById(elem.getAttribute('id'))
    // if(window.innerWidth <= width) {
        // check if exists element in DOM
        console.log('not exist')

        if(!element) {
            console.log('not exist')
            // createElem (elem, id, classes, html)
            header.after(elem) 
        }
        else {
            elem.style.display = 'block'
        }
    // }
}
// function hideElem(elem) {
//     // if(element) {
//         elem.style.display = 'none'
//     // }
// } 
// function showElem(elem, width) {
    // let element
    // // for check if exists element in DOM
    // element = document.getElementById(elem.getAttribute('id'))
    // if(window.innerWidth <= width) {
    //     // check if exists element in DOM
    //     if(!element) {
    //         // createElem (elem, id, classes, html)
    //         header.after(elem) 
    //     }
    //     else {
    //         elem.style.display = 'block'
    //     }
    // }
    // else if(element) {
    //     elem.style.display = 'none'
    // }
// }
// show/hide element using for order tab, pwa