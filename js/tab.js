let tabBtns = document.querySelector('.tab__btns')
let tabContent = document.querySelectorAll('.tab__content')

tabBtns.addEventListener('click', (e)=> {
    
    if(e.target.className !== 'tab__btn') return
    
    // console.log(tabBtns.children)
    for (const child of tabBtns.children) {
        if(child.classList.contains('tab__btn_active')) 
            child.classList.remove('tab__btn_active')
    }
    for (const el of tabContent) {
        if(el.classList.contains('tab__content_active'))
            el.classList.remove('tab__content_active')
    }
    let number = e.target.dataset.number
    switch(number) {
        case '0': 
            tabContent[0].classList.add('tab__content_active')
            e.target.classList.add('tab__btn_active')
            break
        case '1': 
            tabContent[1].classList.add('tab__content_active')
            e.target.classList.add('tab__btn_active')
            break
        case '2': 
            tabContent[2].classList.add('tab__content_active')
            e.target.classList.add('tab__btn_active')
            break
    }
})

