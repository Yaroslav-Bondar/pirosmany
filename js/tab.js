let tabBtns = document.querySelector('.tab__btns')
let tabContent = document.querySelectorAll('.tab__content')

// choise content block
tabContent[0].classList.add('tab__content_active')
tabBtns.addEventListener('click', (e)=> {
    
    if(e.target.className !== 'tab__btn aboutprod__tab-btn') return
    
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

// read more (uses delegation events)
let tabSlider = document.querySelector('.tab__slider')

tabSlider.addEventListener('click', (e)=> {
    if (e.target.className !== 'tab__btn-more') return

    let parent = e.target.parentElement
    let tabBtnMore = e.target
    let tabDots = parent.firstElementChild.firstElementChild
    let tabMore = parent.firstElementChild.children[1]

    if(!tabMore.classList.contains('tab__more_active')) {
        tabMore.classList.add('tab__more_active')
        tabDots.style.display = 'none'
        tabBtnMore.innerHTML = 'Читать меньше'
    }
    else {
        tabMore.classList.remove('tab__more_active')
        tabDots.style.display = 'inline'
        tabBtnMore.innerHTML = 'Читать больше'
    }
})

