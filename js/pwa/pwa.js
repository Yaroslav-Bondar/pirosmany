let pwaRow = document.querySelector('.pwa__row');
let pwaColumns = document.querySelectorAll('.pwa__column');
// let pwaColumnProd = document.querySelector('.pwa__column-prod');

// clear before backend -)
// let basketList = document.querySelector('.basket__list'); 
// pwaColumnProd.innerHTML = basketList.childElementCount
// // clear before backend -)

pwaColumns[0].classList.add('pwa__column_active')

pwaRow.addEventListener('click', (e) => {
    let tar = e.target
    if (!tar.closest('button')) return
    if(tar.tagName == 'BUTTON') {
        for (const col of pwaColumns) {
            if(col.classList.contains('pwa__column_active'))
                col.classList.remove('pwa__column_active')
        }
        tar.classList.add('pwa__column_active')
    }
    else {
        for (const col of pwaColumns) {
            if(col.classList.contains('pwa__column_active'))
                col.classList.remove('pwa__column_active')
        }
        tar.closest('button').classList.add('pwa__column_active')
    }
})