const POPUP_RESERV_HTML = `
<div class="popup" data-modal-window="true">
    <div class="reserv popup__container">
        <form onsubmit="return false;"
            action="#"
            class="reserv__form popup-form" 
            method="POST"
            name="reserv"
        >
            <button type="button" class="reserv__close close-btn btn" data-modal-close="true">
                <img class="img" src="img/icons/plus.svg" alt="close">
            </button>
            <div class="reserv__title">
                Бронирование стола
            </div>
            <div class="reserv__body">
                <div class="reserv__wrap input-wrap">
                    <input type="text"
                        aria-label="name"
                        id="reserv-input-name"
                        class="reserv__name form-input" 
                        name="name"
                        pattern="${reservValidationPattern.text}"
                        minlength="3"
                        maxlength="10" 
                        required
                    >
                    <div class="reserv__placeholder">Имя</div>
                    <div class="reserv__check input-check"></div>
                </div>
                <div class="reserv__container">
                    <div class="reserv__wrap input-wrap">
                        <input type="tel"
                            aria-label="phone"   
                            class="reserv__phone form-input" 
                            placeholder="Телефон" 
                            name="phone" 
                            required
                        >
                        <div class="reserv__check input-check"></div>
                    </div>
                    <div class="reserv__wrap input-wrap">
                        <input id="myTime"
                            class="reserv__time form-input" 
                            aria-label="time"
                            type="time" 
                            value="13:30" 
                            name="time" 
                            required
                        >
                    </div>
                    <div class="reserv__wrap input-wrap">
                        <input type="number"
                            class="reserv__amount form-input"
                            aria-label="amount" 
                            placeholder="Количество человек" 
                            name="amount"
                            min="1"
                            value="0"
                            required
                        >
                    </div>
                    <div class="reserv__wrap input-wrap">
                        <input type="date"
                            aria-label="date"
                            class="reserv__date form-input" 
                            name="date" 
                            id="datepicker" 
                            required
                        >
                        <div class="reserv__calendar input-calendar"></div>
                    </div>
                </div>
                <button class="reserv__btn btn btn_theme_green" type="submit">Забронировать</button>
            </div>
        </form>
    </div>
</div>`
