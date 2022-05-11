let tabContents = document.querySelector('.tab__contents')
tabBtns.firstElementChild.classList.add('tab__btn_active')

function getMaxHeight() {
    let heights = new Array()
    tabContent.forEach(item => heights.push(item.offsetHeight))
    return Math.max(...heights)
}
tabContents.style.height = getMaxHeight() + 'px'

window.addEventListener('resize', () => {
    tabContents.style.height = getMaxHeight() + 'px'
})
tabContent.forEach(item => item.style.display = 'none')
tabContent[0].style.display = 'block'

tabBtns.addEventListener('click', (e)=> {
    const targetElement = toggleElementsState('tab__btn', 'tab__btn_active', e.target);
    if(targetElement) {
        tabContent.forEach(item => item.style.display = 'none')
        const tabNumber = e.target.dataset.number
        switch(tabNumber) {
            case '0': 
                tabContent[0].style.display = 'block'
                break
            case '1': 
                tabContent[1].style.display = 'block'
                break
            case '2': 
                tabContent[2].style.display = 'block'
                break
        }
    }
})
// read more (uses delegation events)
let aboutprodSlider = document.querySelector('.aboutprod__slider')

aboutprodSlider.addEventListener('click', (e)=> {

    if (!e.target.classList.contains('tab__btn-more')) return

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
    tabContents.style.height = getMaxHeight() + 'px'
})

