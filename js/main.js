let navigationLinkDropdown = document.querySelector('.navigation__link_dropdown')
let navigationDropdown = document.querySelector('.navigation__dropdown')

navigationLinkDropdown.addEventListener('click', ()=> {
    navigationDropdown.classList.toggle('navigation__dropdown_active')
})