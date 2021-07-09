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