let list = document.querySelector('.list')

list.addEventListener('click', (e) => {
    if(!e.target.classList.contains('list__btn')) return
    e.target.parentNode.style.display = 'none'
})