let navigation = $('.navigation')
// let body = document.querySelector('body')
let header = document.querySelector('.header')
let headerBurger = document.querySelector('.header__burger')
let mobmenu = document.querySelector('.mobmenu')
let mobmenuBurger = document.querySelector('.mobmenu__burger')
let mobmenuOverlay = document.querySelector('.mobmenu__overlay')
let mobmenuNav = document.querySelector('.mobmenu__nav')
let widthHideNav = 900
// section video
$('.video__btn').click(function(){
    $(this).hide()
    $('.video__iframe').attr('src', 'https://www.youtube.com/embed/aZwev9_Y58A?autoplay=1')

})
// // section video

// logic for main header navigation
if(window.innerWidth <= widthHideNav) {
    navigation.hide()
    $('.table').show()
    $('.header__burger').show()
}
else {
    navigation.show()
    $('.table').hide()
    $('.header__burger').hide()
}
$(window).resize( () => {
    if(window.innerWidth <= widthHideNav) {
        navigation.hide()
        $('.table').show()
        $('.header__burger').show()
    }
    else {
        navigation.show()
        $('.table').hide()
        $('.header__burger').hide()
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

// pop-up
// let popup = document.querySelectorAll('.popup')  // window
// let popupClose = document.querySelectorAll('.popup__close')  // button
//     // close for every pop-up window
// for (let i = 0; i < popupClose.length; i++) {
//     popupClose[i].addEventListener('click', ()=> {
//         popup[i].classList.remove('popup_active')
//         body.classList.remove('body_lock')  
//     }) 
// }
// // close after click for window
// for (const el of popup) {                  
//     el.addEventListener('click', (e)=> {
//         if(e.target == el)
//             el.classList.remove('popup_active')
//             body.classList.remove('body_lock')    
//     })
// }
//     // // close for every pop-up window

//     // user signin, show the modal window after pressing the button
// let userSignIn = document.querySelectorAll('#user_sign_in') 
// let signin = document.querySelector('.signin')
// for (const el of userSignIn) {
//     el.addEventListener('click', ()=> {
//         signin.classList.add('popup_active')
//         body.classList.add('body_lock')
//     })    
// }
//     // // user signin

    // subscribe, show the modal window after pressing the button
// let slider1Btn = document.querySelectorAll('.slider1__btn')
// let subscribe = document.querySelector('.subscribe')
// for (const el of slider1Btn) {
//     el.addEventListener('click', ()=> {
//         subscribe.classList.add('popup_active')
//         body.classList.add('body_lock')
//     })
// }
    // // subscribe
    // user checkin, show the modal window after pressing the button
    // let checkinBtn = document.querySelectorAll('#checkin')
    // let checkin = document.querySelector('.checkin')
    // for (const el of checkinBtn) {
    //     el.addEventListener('click', ()=> {
    //         checkin.classList.add('popup_active')
    //         body.classList.add('body_lock')
    //     })       
    // }
    // user checkin
    // reserv
    // let reserv = document.querySelector('.reserv')
    // let tableBtn = document.querySelectorAll('.table__btn_pop-up')
    // for (const el of tableBtn) {
    //     el.addEventListener('click', ()=> {
    //         reserv.classList.add('popup_active')
    //         body.classList.add('body_lock')
    //     })    
    // }
    // let myTime = document.querySelector('#myTime')
    // console.log(myTime)
    // myTime.innerHTML='AAA'
    // // reserv

    // review
    // let aboutprodReviewBtn = document.querySelector('.aboutprod__review-btn')
    // let review = document.querySelector('.review')
    // aboutprodReviewBtn.addEventListener('click', ()=> {
    //     review.classList.add('popup_active')
    //     body.classList.add('body_lock')
    // })
    // // review
// // pop-up



