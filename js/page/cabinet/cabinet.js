// const tabBtns = document.querySelector('.tab__btns')
// const tabContent = document.querySelectorAll('.tab__content')

// tabBtns.firstElementChild.classList.add('tab__btn_active')

tabContent.forEach(item => item.style.display = 'none')
tabContent[0].style.display = 'flex'

tabBtns.addEventListener('click', (e)=> {
    const targetElement = e.target.closest('.cab__btn');
    // console.log(targetElement);
    // const targetElement = toggleElementsState('cab__btn', 'btn_theme_green', e.target);
    if(targetElement) {
        // toggleElementsState('cab__btn', 'btn_theme_green', e.target);
        // replaceElementState(targetElement, 'btn_theme_green', 'btn_theme_transparent');
        toggleElementsDoubleState('cab__btn', 'btn_theme_green', 'btn_theme_transparent', e.target);
        toggleElementsDoubleState('cab__btn', 'btn_color_white', 'btn_color_green', e.target);

        // replaceElementState(targetElement, 'btn_theme_transparent', 'btn_theme_green');
        tabContent.forEach(item => item.style.display = 'none')
        const tabNumber = targetElement.dataset.number
        switch(tabNumber) {
            case '0': 
                tabContent[0].style.display = 'flex'
                break
            case '1': 
                tabContent[1].style.display = 'block'
                break
        }
    }
});
// adding order status canseled. Just add the class .cab__history_cancel to cab__history
let cabHistoryCansel = document.querySelectorAll('.cab__history_cancel')
for (const el of cabHistoryCansel) {
    el.firstElementChild.children[0].children[4].children[1].innerHTML = 'Отменен';
}
// // adding order status canseled. Just add the class .cab__history_cancel to cab__history