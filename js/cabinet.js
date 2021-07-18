let tabBtns = document.querySelector('.tab__btns')
let tabContent = document.querySelectorAll('.tab__content')

tabBtns.firstElementChild.classList.add('tab__btn_active')

tabContent.forEach(item => item.style.display = 'none')
tabContent[0].style.display = 'flex'

tabBtns.addEventListener('click', (e)=> {
    tar = e.target
    // console.log(tar)
    if(!tar.closest('button') && !tar.classList.contains('tab__btn')) return
    if(!tar.classList.contains('tab__btn')) tar = tar.parentElement
    for (const child of tabBtns.children) {
        if(child.classList.contains('tab__btn_active')) 
            child.classList.remove('tab__btn_active')
    }
    tabContent.forEach(item => item.style.display = 'none')

    let number = tar.dataset.number
    switch(number) {
        case '0': 
            // tabContent[0].classList.add('tab__content_active')
            tabContent[0].style.display = 'flex'
            tar.classList.add('tab__btn_active')
            break
        case '1': 
            // tabContent[1].classList.add('tab__content_active')
            tabContent[1].style.display = 'block'
            tar.classList.add('tab__btn_active')
            break
    }
})
// adding order status canseled. Just add the class .cab__history_cancel to cab__history

let cabHistoryCansel = document.querySelectorAll('.cab__history_cancel')
console.log(cabHistoryCansel[0])
for (const el of cabHistoryCansel) {
    el.firstElementChild.children[0].children[4].children[1].innerHTML = 'Отменен'
}
// // adding order status canseled. Just add the class .cab__history_cancel to cab__history