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

// promoItem is constant from js/order/orderConstantsRender.js, contains the 
// discount value, depending on which tab button is active
promoItem = pickupDiscount
// display shipping cost value, 
regisDelivPrice.innerHTML = promoItem

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
    if(!e.target.classList.contains('tab__btn')) return
    for (const child of tabBtns.children) {
        if(child.classList.contains('tab__btn_active')) 
            child.classList.remove('tab__btn_active')
    }
    let number = e.target.dataset.number
    switch(number) {
        case '0':
            e.target.classList.add('tab__btn_active')
            // change the promoItem value depending on the active tab
            promoItem = pickupDiscount
            // display promoItem value
            regisDelivPrice.innerHTML = promoItem
            // recalculate the payment amount taking into account the promoItem value
            if(TOTAL_PAY) {
                TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(promoItem)
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
            e.target.classList.add('tab__btn_active')
            // change the promoItem value depending on the active tab
            promoItem = localStorageUtil.getTotalProductsPrice() * (delivCost/100)
            // display promoItem value 
            regisPickupPrice.innerHTML = promoItem
            // recalculate the payment amount taking into account the promoItem value
            if(TOTAL_PAY) {
                TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(promoItem)
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
})
// // click on the tab button
// // tabs

