const POPUP_RESERV_HTML = `
<div class="popup" data-modal-window="true">
    <div class="reserv popup__container">
        <form onsubmit="return false;"
            action="#"
            class="reserv__form popup-form" 
            method="POST"
            name="reserv"
        >
            <button type="button" class="reserv__close close-btn" data-modal-close="true">
                <img class="img" src="img/icons/plus.svg" alt="close">
            </button>
            <div class="reserv__title">
                Бронирование стола
            </div>
            <div class="reserv__body">
                <div class="reserv__wrap form-input">
                    <input type="text"
                        aria-label="name"
                        id="reserv-input-name"
                        class="reserv__input form-input__item" 
                        name="name"
                        pattern="${reservValidationPattern.text}"
                        minlength="3"
                        maxlength="10" 
                        required
                    >
                    <div class="form-input__check"></div>
                    <div class="reserv__name">Имя</div>
                </div>
                <div class="reserv__container">
                    <div class="reserv__wrap form-input">
                        <input type="tel"
                            aria-label="phone"   
                            class="reserv__input form-input__item" 
                            placeholder="Телефон" 
                            name="phone" 
                            required
                        >
                        <div class="form-input__check"></div>
                    </div>
                    <div class="reserv__wrap form-input">
                        <input id="myTime"
                            class="reserv__input form-input__item" 
                            aria-label="time"
                            type="time" 
                            value="13:30" 
                            name="time" 
                            required
                        >
                    </div>
                    <div class="reserv__wrap form-input">
                        <input type="number"
                            class="reserv__input form-input__item"
                            aria-label="amount" 
                            placeholder="Количество человек" 
                            name="amount" 
                            required
                        >
                    </div>
                    <div class="reserv__wrap form-input">
                        <input type="date"
                            aria-label="date"
                            class="reserv__input form-input__item" 
                            name="date" 
                            id="datepicker" 
                            required
                        >
                        <div class="reserv__date form-input__date"></div>
                    </div>
                </div>
                <button class="reserv__btn btn" type="submit">Забронировать</button>
            </div>
        </form>
    </div>
</div>`
