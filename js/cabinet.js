let tabBtns = document.querySelector('.tab__btns')
tabBtns.firstElementChild.classList.add('tab__btn_active')

tabBtns.addEventListener('click', (e)=> {
    tar = e.target
    // console.log(tar)
    if(!tar.closest('button') && !tar.classList.contains('tab__btn')) return
    if(!tar.classList.contains('tab__btn')) tar = tar.parentElement
    for (const child of tabBtns.children) {
        if(child.classList.contains('tab__btn_active')) 
            child.classList.remove('tab__btn_active')
    }
    let number = tar.dataset.number
    switch(number) {
        case '0': 
            // tabContent[0].classList.add('tab__content_active')
            // tabContent[0].style.display = 'block'
            tar.classList.add('tab__btn_active')
            break
        case '1': 
            // tabContent[1].classList.add('tab__content_active')
            // tabContent[1].style.display = 'block'
            tar.classList.add('tab__btn_active')
            break
    }
})