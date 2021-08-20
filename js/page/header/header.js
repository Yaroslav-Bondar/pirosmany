// let header = document.querySelector('.header')
// let headerBurger = document.querySelector('.header__burger')
let navigation = document.querySelector('.navigation')
let headerBurger = document.querySelector('.header__burger')

// contains quantity products in card
const BASKET_AMOUNT = document.querySelector('.basket__amount') // *
BASKET_AMOUNT.style.display = 'none'

// display the quantiti of items in card
function showHideBasketAmountPruducts() {
    let basketAmountAll = localStorageUtil.getProductsAmountAll()
    if(0 < basketAmountAll) {
        BASKET_AMOUNT.style.display = 'flex'
        BASKET_AMOUNT.innerHTML = basketAmountAll    
    }
    else {
        BASKET_AMOUNT.style.display = 'none'
    }    
}

showHideBasketAmountPruducts()

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