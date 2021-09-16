// Constants after rendering the list of products in the basket (basket-products-list element)

// // contains the sum of the price per item quantity
const SUM_PRODUCT_PRICE = 'sum_product_price'

// for output total product price of basket
const TOTAL_PRICE_BASKET = document.getElementById('total-price-basket')

// for output the sum price of product

const TOTAL_PAY = document.getElementById('total-pay')
// // for output

// sum total price of product in the basket, the contant TOTAL_PRICE_BASKET
if(TOTAL_PRICE_BASKET) {
    TOTAL_PRICE_BASKET.innerHTML = localStorageUtil.getTotalProductsPrice() 
}
// the sum of all products including discount 
if(TOTAL_PAY) {
    TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(PROMO_ITEM)
}

