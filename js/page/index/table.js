tableHtml = `
    <div class="wrapper">
        <button class="table__btn table__btn_pop-up">
            <span class="table__btn-text">Забронировать стол</span>
            <div class="table__btn-img">
                <img src="img/table/arrow.png" alt="arrow">
            </div> 
        </button>
    </div>
`
function createTableElement() {
    let tableElement = document.createElement('section')
    tableElement.setAttribute('id', 'order-table')
    tableElement.setAttribute('class', 'table')
    tableElement.innerHTML = tableHtml
    header.after(tableElement)
}
function showHideOrderTable () {
    let orderTable = document.getElementById('order-table')
    if(window.innerWidth <= widthHideNav) {
        if(!orderTable) {
            createTableElement()
        }
        else {
            orderTable.style.display = 'block'
        }
    }
    else {
        if(orderTable) {
            orderTable.style.display = 'none'
        }
    }
}
showHideOrderTable()

window.addEventListener ('resize', () => {
    showHideOrderTable()    
})