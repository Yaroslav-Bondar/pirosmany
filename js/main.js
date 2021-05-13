let navigation = $('.navigation')
let navigationLinkDropdown = document.querySelector('.navigation__link_dropdown')
let navigationDropdown = document.querySelector('.navigation__dropdown')
let widthHideNav = 900
navigationLinkDropdown.addEventListener('click', ()=> {
    navigationDropdown.classList.toggle('navigation__dropdown_active')
})
$('.video__btn').click(function(){
    $(this).hide()
    $('.video__iframe').attr('src', 'https://www.youtube.com/embed/aZwev9_Y58A?autoplay=1')

})

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