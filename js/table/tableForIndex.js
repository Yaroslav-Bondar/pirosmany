// show, hide table order
// tableHtml = `
//     <div class="wrapper">
//         <button class="table__btn table__btn_pop-up">
//             <span class="table__btn-text">Забронировать стол</span>
//             <div class="table__btn-img">
//                 <img src="img/table/arrow.png" alt="arrow">
//             </div> 
//         </button>
//     </div>
// `

// function createTableElement() {
//     let tableElement = document.createElement('section')
//     tableElement.setAttribute('id', 'order-table')
//     tableElement.setAttribute('class', 'table')
//     tableElement.innerHTML = tableHtml
//     tableElement.addEventListener('click', ()=> {
//         let reservPopup = new Popup('reserv popup', popupReservHtml, 'reserv-pop-up') // object prototype from popupCommon.js
//         reservPopup.render()
//     })
//     return tableElement
// }
if(window.innerWidth <= widthHideNav) {
    let tableElem = createElem('section', 'order-table', 'table', tableHtml)
    tableElem.addEventListener('click', (e)=> {
        if(!e.target.closest('table__btn_pop-up')) return
        let reservPopup = new Popup('reserv popup', popupReservHtml, 'reserv-pop-up') // object prototype from popupCommon.js
        reservPopup.render()
    })
    showElem(tableElem)
}
else {
    tableElem.style.display = 'none'
}
window.addEventListener ('resize', () => {
    if(window.innerWidth <= widthHideNav) {
        let tableElem = createElem('section', 'order-table', 'table', tableHtml)
        tableElem.addEventListener('click', (e)=> {
            if(!e.target.closest('table__btn_pop-up')) return
            let reservPopup = new Popup('reserv popup', popupReservHtml, 'reserv-pop-up') // object prototype from popupCommon.js
            reservPopup.render()
        })
        showElem(tableElem)
    }
    else {
        tableElem.style.display = 'none'
    }
})