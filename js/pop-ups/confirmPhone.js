const POPUP_CONFIRM_PHONE_HTML = `
    <div class="popup" data-modal-window="true">
        <div class="confirm-phone popup__container">
            <form onsubmit="return false;" action="#" 
                class="confirm-phone__form popup-form" 
                name="confirm-phone"
                method="POST"
            >
                <button type="button" class="confirm-phone__close btn btn_theme_transparent" data-modal-close="true">
                    <img class="img" src="img/icons/plus.svg" alt="close">
                </button>
                <div class="confirm-phone__icon">
                    <div class="popup-icon">
                        <div class="popup-icon__item"></div>
                    </div>
                </div>
                <div class="confirm-phone__title">
                    Подтвердите номер телефона
                </div>
                <div class="confirm-phone__row">
                    <div class="confirm-phone__digit">
                        <input class="confirm-phone__input form-input form-input_theme_black" 
                            type="text" 
                            aria-label="digit"
                            pattern="\\d"
                            placeholder="" 
                            name="digit" 
                            required
                        >
                    </div>
                    <div class="confirm-phone__dush"></div>
                    <div class="confirm-phone__digit">
                        <input class="confirm-phone__input form-input form-input_theme_black" 
                            type="text" 
                            aria-label="digit"
                            pattern="\\d"
                            placeholder="" 
                            name="digit" 
                            required
                        >
                    </div>
                    <div class="confirm-phone__dush"></div>
                    <div class="confirm-phone__digit">
                        <input class="confirm-phone__input form-input form-input_theme_black" 
                            type="text" 
                            aria-label="digit"
                            pattern="\\d"
                            placeholder="" 
                            name="digit" 
                            required
                        >
                    </div>
                    <div class="confirm-phone__dush"></div>
                    <div class="confirm-phone__digit">
                        <input class="confirm-phone__input form-input form-input_theme_black" 
                            type="text" 
                            aria-label="digit"
                            pattern="\\d"
                            placeholder="" 
                            name="digit" 
                            required
                        >
                    </div>
                </div>
                <button class="confirm-phone__repeat btn btn_theme_transparent" type="button">Отправить повторно</button>
                <button class="confirm-phone__submit btn btn_theme_green" type="submit">Далее</button>
            </form>
        </div>
    </div>    

`