// hidden element
let regisDelivery = document.querySelector('.regis__delivery')
regisDelivery.addEventListener('click', (e)=> {
    let tar = e.target
    if(!tar.classList.contains('regis__delivery-label_show-hide')) return
    tar.classList.toggle('regis__delivery-label_hide')
    if(!tar.classList.contains('regis__delivery-label_hide')) {
        tar.innerHTML = 'Комментарий к заказу'
    }
    else {
        tar.innerHTML = 'Добавить комментарий'
    }
    tar.nextElementSibling.classList.toggle('regis__delivery-input_hide')
})
// // hidden element

// tabs
// price
let regisTotalPrice = document.querySelector('.regis__total-price')
let regisPayPrice = document.querySelector('.regis__pay-price')
let regisPickupPrice = document.querySelector('.regis__pickup-price')
let regisDelivPrice = document.querySelector('.regis__deliv-price')

let pickupDiscount = 100 // cost of delivery
let delivCost = 20 // percent, discount for pickup
// // price
// setting initial display
tabBtns.firstElementChild.classList.add('tab__btn_active')

// PROMO_ITEM is constant from js/order/orderConstantsRender.js, contains the 
// discount value, depending on which tab button is active
PROMO_ITEM = pickupDiscount
// display shipping cost value, 
regisDelivPrice.innerHTML = PROMO_ITEM

tabContent.forEach(item => item.style.display = 'none')
tabContent.forEach((item) => {
    if(item.dataset.tabContent == 'deliv') {
        item.style.display = 'flex'
    }
    else {
        item.style.display = 'none'
    } 
})
// // setting initial display

// click on the tab button
tabBtns.addEventListener('click', (e)=> {
    const targetElement = setElementState('tab__btn', 'tab__btn_active', e.target);
    if(targetElement) {
        const tabNumber = targetElement.dataset.number;
        switch(tabNumber) {
            case '0':
                // change the PROMO_ITEM value depending on the active tab
                PROMO_ITEM = pickupDiscount
                // display PROMO_ITEM value
                regisDelivPrice.innerHTML = PROMO_ITEM
                // recalculate the payment amount taking into account the PROMO_ITEM value
                if(TOTAL_PAY) {
                    TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(PROMO_ITEM)
                }            
                tabContent.forEach((item) => {
                    if(item.dataset.tabContent == 'deliv') {
                        item.style.display = 'flex'
                    }
                    else {
                        item.style.display = 'none'
                    } 
                })
                break
            case '1':
                // change the PROMO_ITEM value depending on the active tab
                PROMO_ITEM = localStorageUtil.getTotalProductsPrice() * (delivCost/100)
                // display PROMO_ITEM value 
                regisPickupPrice.innerHTML = PROMO_ITEM
                // recalculate the payment amount taking into account the PROMO_ITEM value
                if(TOTAL_PAY) {
                    TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(PROMO_ITEM)
                }            
                tabContent.forEach((item) => {
                    if(item.dataset.tabContent == 'pickup') {
                        item.style.display = 'flex'
                    }
                    else {
                        item.style.display = 'none'
                    } 
                })
                break
        }
    }
})
// // click on the tab button
// // tabs

