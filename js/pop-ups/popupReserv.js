const POPUP_RESERV_HTML = `
<div class="reserv popup" data-modal="window">
    <form action="#" class="reserv__form popup__form" method="POST">
        <button class="reserv__close popup__close" data-modal="close">
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
</div>`
