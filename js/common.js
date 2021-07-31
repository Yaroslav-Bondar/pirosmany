// let list = document.querySelector('.list')
let body = document.querySelector('body')

// tabs
let tabBtns = document.querySelector('.tab__btns')
let tabContent = document.querySelectorAll('.tab__content')
// // tabs

// pop-up
let popup = document.querySelectorAll('.popup')  // window
let popupClose = document.querySelectorAll('.popup__close')  // button

//  // pop-up
// list.addEventListener('click', (e) => {
//     if(!e.target.classList.contains('list__btn')) return
//     e.target.parentNode.style.display = 'none'
// })

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