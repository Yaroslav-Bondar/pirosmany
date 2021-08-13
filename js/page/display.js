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
    let counter = Number(amount.innerHTML);
    if (tar === 'btn-minus') {
        counter--
        if(counter <= 0) {
            alert('Количество не может быть меньше 1')
            counter = 1
            amount.innerHTML = counter
        } 
        amount.innerHTML = counter
    }
    if (tar === 'btn-plus') {
        counter++
        amount.innerHTML = counter
    }
})

handleSetLocationStorage(el, id) {
    // console.log(el, id)
    const {pushProduct, products} = localStorageUtil.putProducts(id)
    console.log(pushProduct, products)
    if(pushProduct) {
        el.classList.add(this.classNameActive)
        el.innerHTML = this.labelRemove
    }
    else {
        el.classList.remove(this.classNameActive)
        el.innerHTML = this.labelAdd
    }
    headerPage.putCount(products.length)
}