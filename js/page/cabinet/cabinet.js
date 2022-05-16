// const tabBtns = document.querySelector('.tab__btns')
// const tabContent = document.querySelectorAll('.tab__content')

// tabBtns.firstElementChild.classList.add('tab__btn_active')
const orders = document.getElementById('orders');

orders.addEventListener('click', (e) => {

    const orderButton = e.target.closest('[data-order-item="btn"]');
    if(!orderButton || window.innerWidth > 480) return;

    // get parent element
    const order = orderButton.closest('[data-order-item="order"]');
    // child elements
    const orderInfo = order.querySelector('[data-order-item="info"]');
    const orderList = order.querySelector('[data-order-item="list"]');
    const orderNext = order.querySelector('[data-order-item="next"]');
    const orderPrev = order.querySelector('[data-order-item="prev"]');
    const orderTitle = order.querySelector('[data-order-item="title"]');
    
    // toggle orderInfo state
    orderNext.classList.toggle('cab__order-next_active');
    orderPrev.classList.toggle('cab__order-prev_active');
    orderInfo.classList.toggle('cab__order-wrap_active');
    orderList.classList.toggle('cab__list-wrap_active');
    orderTitle.classList.toggle('cab__history-name_active');
    
    // reset state
    window.addEventListener('resize', () => {
        if(window.innerWidth > 480) {
            orderNext.classList.remove('cab__order-next_active');
            orderPrev.classList.remove('cab__order-prev_active');
            orderInfo.classList.remove('cab__order-wrap_active');
            orderList.classList.remove('cab__list-wrap_active');
            orderTitle.classList.remove('cab__history-name_active');
        }
    });
});


tabContent.forEach(item => item.style.display = 'none');
tabContent[0].style.display = 'flex';

tabBtns.addEventListener('click', (e)=> {
    const targetElement = e.target.closest('.cab__btn');
    if(targetElement) {
        toggleElementsDoubleState('cab__btn', 'btn_theme_green', 'btn_theme_transparent', e.target);
        toggleElementsDoubleState('cab__btn', 'btn_color_white', 'btn_color_green', e.target);
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
// adding order status canseled.
const cabOrderCanseled = document.querySelectorAll('[data-order-state="canseled"]');

for (const order of cabOrderCanseled) {
    const orderItem = order.querySelector('[data-order-item="canseled"]');
    orderItem.textContent = 'Отменено';
    orderItem.classList.add('cab__history-item_state_canseled')
}