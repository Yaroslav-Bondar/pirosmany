const POPUP_CHECKIN_HTML = `
<div class="popup" data-modal-window="true">
    <div class="checkin popup__container">
        <form onsubmit="return false;" action="#" 
            class="checkin__form popup-form" 
            name="checkin"
            method="POST">
            <button type="button" class="checkin__close btn btn_theme_transparent" data-modal-close="true">
                <img class="img" src="img/icons/plus.svg" alt="close">
            </button>
            <div class="checkin__icon">
                <div class="popup-icon">
                    <div class="popup-icon__item"></div>
                </div>
            </div>
            <div class="checkin__title popup-title1">
                Регистрация
            </div>
            <div class="checkin__body">
                <div class="checkin__inputs">
                    <div class="checkin__wrap input-wrap">
                        <input class="checkin__input form-input"
                            type="tel" 
                            aria-label="phone number"
                            pattern=${FormValidationPattern.tel}
                            placeholder="Телефон" 
                            name="phone" 
                            required>
                        <div class="checkin__check input-check"></div>
                        <div class="checkin__phone input-phone"></div>
                    </div>
                    <div class="checkin__wrap input-wrap">
                        <input class="checkin__input form-input" 
                            type="password"
                            aria-label="password"
                            pattern=${FormValidationPattern.password}
                            placeholder="Пароль" 
                            name="password" required>
                        <div class="checkin__check input-check"></div>
                        <div class="checkin__key input-key"></div>
                    </div>
                    <div class="checkin__wrap input-wrap">
                        <input class="checkin__input form-input" 
                            type="password"
                            aria-label="confirm-password"
                            pattern=${FormValidationPattern.password}
                            placeholder="Подтвердите пароль" 
                            name="confirm-password" 
                            required>
                        <div class="checkin__check input-check"></div>
                        <div class="checkin__key input-key"></div>
                    </div>  
                </div>
                <div class="checkin__wrong-message">
                    Пользователь с таким номером телефона уже зарегистрирован.
                </div>
                <div class="checkin__column">
                    <div class="checkin__row">
                        <input id="offers" 
                            class="checkin__checkbox choice" 
                            type="checkbox"
                            name="suggestions"
                            value="offers"
                            checked
                        >
                        <label class="checkin__label" for="offers">Хочу получать выгодные предложения от магазина</label>
                    </div>
                    <div class="checkin__row">
                        <input id="agreement" 
                            class="checkin__checkbox choice" 
                            type="checkbox"
                            name="privacy-policy"
                            value="agreement"
                        >
                        <label class="checkin__label" for="agreement">
                            Принимаю условия 
                            <a href="#" class="checkin__policy">
                                Пользовательского соглашения, Политики конфиденциальности
                            </a>
                        </label>
                    </div>
                </div>
                <div class="checkin__btn">
                    <button class="checkin__submit btn btn_theme_green" type="submit">Зарегистрироваться</button>
                </div>
            </div>
        </form>
    </div>
</div>`
