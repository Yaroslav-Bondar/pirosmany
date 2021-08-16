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
    if (tar === 'btn-minus') {
        let amountElement = localStorageUtil.takeProducts(id) 
        if(!amountElement){
            parent.querySelector('.products__card-btn').style.display = 'block'
            parent.querySelector('.products__card-add').style.display = 'none'
        }
        // display the current quantity of elements in card
        displayAmount.innerHTML = amountElement
        // display the quantiti of items in card
        BASKET_AMOUNT.innerHTML = localStorageUtil.getProductsAmountAll()
    }
    if (tar === 'btn-plus') {
        // display the current quantity of elements in card 
        displayAmount.innerHTML = localStorageUtil.putProducts(id)
        // display the quantiti of items in card
        BASKET_AMOUNT.innerHTML = localStorageUtil.getProductsAmountAll()
    }
})
