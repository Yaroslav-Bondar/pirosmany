let popupReservHtml = `
    <form action="#" class="reserv__form popup__form" method="POST">
        <button class="reserv__close popup__close">
            <i class="fas fa-times"></i>
        </button>
        <div class="reserv__title popup__title">
            Бронирование стола
        </div>
        <div class="reserv__body popup__body">
            <div class="reserv__wrap popup__wrap">
                <input type="text" placeholder="Имя" name="name" required>
            </div>
            <div class="reserv__conteiner">
                <div class="reserv__wrap popup__wrap">
                    <input type="tel" placeholder="Телефон" name="phone" required>
                </div>
                <div class="reserv__wrap popup__wrap">
                    <input id="myTime" type="time" value="13:30" name="time" required>
                </div>
                <div class="reserv__wrap popup__wrap">
                    <input type="number" placeholder="Количество человек" name="amount" required>
                </div>
                <div class="reserv__wrap popup__wrap">
                    <input type="date" name="date" id="datepicker" required>
                </div>
            </div>
            <button class="reserv__btn btn" type="submit">Забронировать</button>
        </div>
    </form>
`
let tableBtn = document.querySelectorAll('.table__btn_pop-up')
for (const el of tableBtn) {
    el.addEventListener('click', ()=> {
        let reservPopup = new Popup('reserv popup', popupReservHtml, 'reserv-pop-up') // object prototype from popupCommon.js
        reservPopup.render()
    })
} 