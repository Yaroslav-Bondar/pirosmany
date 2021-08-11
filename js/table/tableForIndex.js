// show, hide table order
let tableElem
if(window.innerWidth <= widthHideNav) {
    if(!tableElem) {
        tableElem = createElem('section', 'table', tableHtml, 'order-table')
        tableElem.addEventListener('click', (e)=> {
            if(!e.target.closest('table__btn_pop-up')) return
            let reservPopup = new Popup('reserv popup', popupReservHtml, 'reserv-pop-up') // object prototype from popupCommon.js
            reservPopup.render()
        })
    }
    showElem(tableElem, header)
}
else {
    if(tableElem)
        tableElem.style.display = 'none'
}
window.addEventListener ('resize', () => {
    if(window.innerWidth <= widthHideNav) {
        if(!tableElem) {
            tableElem = createElem('section', 'table', tableHtml, 'order-table')
            tableElem.addEventListener('click', (e)=> {
                if(!e.target.closest('table__btn_pop-up')) return
                let reservPopup = new Popup('reserv popup', popupReservHtml, 'reserv-pop-up') // object prototype from popupCommon.js
                reservPopup.render()
            })
        }
        showElem(tableElem, header)
    }
    else {
        if(tableElem)
            tableElem.style.display = 'none'
    }
})