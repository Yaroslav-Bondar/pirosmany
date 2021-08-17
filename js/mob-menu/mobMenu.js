let mobmenu = document.querySelector('.mobmenu')
let mobmenuBurger = document.querySelector('.mobmenu__burger')
let mobmenuOverlay = document.querySelector('.mobmenu__overlay')
// let header = document.querySelector('.header')

// logic for mobile menu
let mobmenuHeader = document.querySelector('.mobmenu__header')
// console.log(HEADER.offsetHeight)
mobmenuHeader.style.height = HEADER.offsetHeight + 'px'
window.addEventListener('resize', () => {
    mobmenuHeader.style.height = HEADER.offsetHeight + 'px'
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