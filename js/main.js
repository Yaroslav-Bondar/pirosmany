let navigationLinkDropdown = document.querySelector('.navigation__link_dropdown')
let navigationDropdown = document.querySelector('.navigation__dropdown')
navigationLinkDropdown.addEventListener('click', ()=> {
    navigationDropdown.classList.toggle('navigation__dropdown_active')
})
$('.video__btn').click(function(){
    $(this).hide()
    $('.video__iframe').attr('src', 'https://www.youtube.com/embed/aZwev9_Y58A?autoplay=1')

})
