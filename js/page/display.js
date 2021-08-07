document.addEventListener('click', (e)=> {
    let tar = e.target.dataset.display
    if (tar != 'btn-minus' && tar != 'btn-plus') {
        return
    }
    if(e.target.parentElement.children[1].firstElementChild.dataset.display === 'amount') {
        var amount = e.target.parentElement.children[1].firstElementChild
    }
    else {
        alert('Неожиданная структура - display')
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