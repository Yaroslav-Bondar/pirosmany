// // contains the sum of the price per item quantity
const SUM_PRODUCT_PRICE = 'list__price-item'
// let sumProductPrice = document.querySelector(`.${SUM_PRODUCT_PRICE}`)

// for output total product price of basket
const TOTAL_PRICE_BASKET = document.getElementById('total-price-basket')

// for output the sum price of product
// const sumProductPrice = document.querySelector(`.${SUM_PRODUCT_PRICE}`) 

const TOTAL_PAY = document.getElementById('total-pay')

// // for output
// const orderPromoPriceItem = document.querySelector('.order__promo-price-item')

// sum total price of product in the basket, the contant TOTAL_PRICE_BASKET
// console.log(localStorageUtil.getTotalProductsPrice())
if(TOTAL_PRICE_BASKET) {
    TOTAL_PRICE_BASKET.innerHTML = localStorageUtil.getTotalProductsPrice() 
}
// the sum of all products including discount 
// in basket.html (orderPromoPriceItem from basket.js) 
if(TOTAL_PAY) {
    // orderPromoPriceItem.innerHTML
    TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(promoItem)
}

