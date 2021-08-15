document.addEventListener('click', (e)=> {
    let tar = e.target.dataset.display
    if (tar != 'btn-minus' && tar != 'btn-plus') {
        return
    }
    if(e.target.parentElement.children[1].firstElementChild.dataset.display === 'amount') {
        var amount = e.target.parentElement.children[1].firstElementChild
    }
    else {
        alert('Неожиданная структура - элемента display')
    }
    // take the element ID 
    let id = e.target.closest(`.${CONTAIN_PRODUCT_ID}`).dataset.productId
    console.log('from_btn', id)
    let counter = Number(amount.innerHTML);
    if (tar === 'btn-minus') {
        amount.innerHTML = localStorageUtil.takeProducts(id)
        // counter--
        // if(counter <= 0) {
        //     alert('Количество не может быть меньше 1')
        //     counter = 1
        //     amount.innerHTML = counter
        // } 
        // amount.innerHTML = counter
    }
    if (tar === 'btn-plus') {
        amount.innerHTML = localStorageUtil.putProducts(id)
    }
})

// handleSetLocationStorage(el, id) {
//     // console.log(el, id)
//     const {pushProduct, products} = localStorageUtil.putProducts(id)
//     console.log(pushProduct, products)
//     if(pushProduct) {
//         el.classList.add(this.classNameActive)
//         el.innerHTML = this.labelRemove
//     }
//     else {
//         el.classList.remove(this.classNameActive)
//         el.innerHTML = this.labelAdd
//     }
//     headerPage.putCount(products.length)
// }