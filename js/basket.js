let buyDisplay = document.querySelector('.buy__display')
let buyDisplayAmount = document.querySelector('.buy__display-amount')
buyDisplay.addEventListener('click', (e)=> {
    if (e.target.className != 'buy__btn-minus' && e.target.className != 'buy__btn-plus') {
        return
    }
    let tar = e.target
    let counter = Number(buyDisplayAmount.innerHTML);
    if (tar.className === 'buy__btn-minus') {
        counter--
        if(counter <= 0) {
            alert('Количество не может быть меньше 1')
            counter = 1
            buyDisplayAmount.innerHTML = counter
        } 
        buyDisplayAmount.innerHTML = counter
    }
    if (tar.className === 'buy__btn-plus') {
        counter++
        buyDisplayAmount.innerHTML = counter
    }
})