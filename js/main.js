// let navigation = $('.navigation')
// let header = document.querySelector('.header')
// let headerBurger = document.querySelector('.header__burger')
// let mobmenu = document.querySelector('.mobmenu')
// let mobmenuBurger = document.querySelector('.mobmenu__burger')
// let mobmenuOverlay = document.querySelector('.mobmenu__overlay')
// let mobmenuNav = document.querySelector('.mobmenu__nav')
// let widthHideNav = 900

// logic for main header navigation
// if(window.innerWidth <= widthHideNav) {
//     navigation.hide()
//     $('.table').show()
//     $('.header__burger').show()
// }
// else {
//     navigation.show()
//     $('.table').hide()
//     $('.header__burger').hide()
// }
// $(window).resize( () => {
//     if(window.innerWidth <= widthHideNav) {
//         navigation.hide()
//         $('.table').show()
//         $('.header__burger').show()
//     }
//     else {
//         navigation.show()
//         $('.table').hide()
//         $('.header__burger').hide()
//     }    
// })

// // logic for mobile menu
// let mobmenuHeader = document.querySelector('.mobmenu__header')
// mobmenuHeader.style.height = header.offsetHeight + 'px'
// window.addEventListener('resize', () => {
//     mobmenuHeader.style.height = header.offsetHeight + 'px'
//     // menu burger
//     if(window.innerWidth > widthHideNav) {
//         if(headerBurger.classList.contains('header__burger_active')) {
//             mobmenu.classList.remove('mobmenu_active')
//             mobmenuOverlay.classList.remove('mobmenu__overlay_active')
//             body.classList.remove('body_lock')        
//         }
//     }
//     else {
//         if(headerBurger.classList.contains('header__burger_active')) {
//             mobmenu.classList.add('mobmenu_active')
//             mobmenuOverlay.classList.add('mobmenu__overlay_active')
//             body.classList.add('body_lock')        
//         }
//     }
//     // // menu burger 
// })
// // // logic for mobile menu

// // logic for burger buttons
// headerBurger.addEventListener('click', () => {
//     headerBurger.classList.add('header__burger_active')
//     mobmenu.classList.add('mobmenu_active')
//     mobmenuOverlay.classList.add('mobmenu__overlay_active')
//     body.classList.add('body_lock')
// })
// mobmenuBurger.addEventListener('click', () => {
//     mobmenu.classList.remove('mobmenu_active')
//     mobmenuOverlay.classList.remove('mobmenu__overlay_active')
//     body.classList.remove('body_lock')
//     headerBurger.classList.remove('header__burger_active')
// })
// // // logic for burger buttons



