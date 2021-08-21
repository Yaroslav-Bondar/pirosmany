// add/remove buttons, display the number of items in the cart
document.addEventListener('click', (e)=> {
    let tar = e.target.dataset.display
    if (tar != 'btn-minus' && tar != 'btn-plus') {
        return
    }
    if(e.target.parentElement.children[1].firstElementChild.dataset.display === 'amount') {
        var displayAmount = e.target.parentElement.children[1].firstElementChild
    }
    else {
        alert('Неожиданная структура - элемента display') // ***
    }
    let parent = e.target.closest(`.${CONTAIN_PRODUCT_ID}`) 
    // take the element ID
    let id = parent.dataset.productId
    let productsCardBtn = parent.querySelector('.products__card-btn')
    let productsCardAdd = parent.querySelector('.products__card-add')
    // sum price of product, the contant SUM_PRODUCT_PRICE from order orderConstantsCalc.js 
    let sumProductPrice = parent.querySelector(`.${SUM_PRODUCT_PRICE}`) 
    // console.log(sumProductPrice)
    // if(sumProductPrice) {
    //     // console.log(sumProductPrice)
    //     TOTAL_PRICE_BASKET.innerHTML = localStorageUtil.getProductsPrice()
    // }

    if (tar === 'btn-minus') {
        let amountElement = localStorageUtil.takeProducts(id) 
        if(!amountElement && productsCardBtn !== null && productsCardAdd !== null) {
            productsCardBtn.style.display = 'block'
            productsCardAdd.style.display = 'none'
        }
        // display the current quantity of elements in card
        displayAmount.innerHTML = amountElement

         
        if(parent.closest(`.${ORDER_CLASS_ID}`)) {
            // the sum of the price per item quantity
            sumProductPrice.innerHTML = localStorageUtil.getProductPriceById(id)
            // the sum all products of basket
            TOTAL_PRICE_BASKET.innerHTML = localStorageUtil.getTotalProductsPrice()
            // the sum of all products including discount 
            // in basket.html (totalPriceBasket from basket.js) 
            if(TOTAL_PAY) {
                TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(promoItem)
            }
        }
        // display the quantiti of items in card
        showHideBasketAmountPruducts() // from js/page/header/header.js
    }
    if (tar === 'btn-plus') {

        // display the current quantity of elements in card 
        displayAmount.innerHTML = localStorageUtil.putProducts(id)
         
        if(parent.closest(`.${ORDER_CLASS_ID}`)) {
            // the sum of the price per item quantity
            sumProductPrice.innerHTML = localStorageUtil.getProductPriceById(id)
            // the sum all products of basket
            TOTAL_PRICE_BASKET.innerHTML = localStorageUtil.getTotalProductsPrice()
            // the sum of all products including discount 
            // in basket.html (totalPriceBasket from basket.js) 
            if(TOTAL_PAY) {
                TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(promoItem)
            }
        }
        // display the quantiti of items in card
        showHideBasketAmountPruducts() // from js/page/header/header.js
    }
})
