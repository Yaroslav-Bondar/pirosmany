const POPUP_CHECKIN_HTML = `
<div class="popup" data-modal-window="true">
    <div class="checkin popup__container">
        <form onsubmit="return false;" action="#" 
            class="checkin__form popup-form" 
            name="checkin"
            method="POST">
            <div class="checkin__close" data-modal-close="true">
                <div class="popup-close">
                    <button class="popup-close__btn"></button>
                </div>
            </div> 
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
                    <div class="checkin__wrap form-input">
                        <input class="form-input__item"
                            type="tel" 
                            aria-label="phone number"
                            pattern=${FormValidationPattern.tel}
                            placeholder="Телефон" 
                            name="phone" 
                            required>
                        <div class="form-input__check"></div>
                        <div class="form-input__phone"></div>
                    </div>
                    <div class="checkin__wrap form-input">
                        <input class="form-input__item" 
                            type="password"
                            aria-label="password"
                            pattern=${FormValidationPattern.password}
                            placeholder="Пароль" 
                            name="password" required>
                        <div class="form-input__check"></div>
                        <div class="form-input__key"></div>
                    </div>
                    <div class="checkin__wrap form-input">
                        <input class="form-input__item" 
                            type="password"
                            aria-label="confirm-password"
                            pattern=${FormValidationPattern.password}
                            placeholder="Подтвердите пароль" 
                            name="confirm-password" 
                            required>
                        <div class="form-input__check"></div>
                        <div class="form-input__key"></div>
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
                    <button class="checkin__submit btn" type="submit">Зарегистрироваться</button>
                </div>
            </div>
        </form>
    </div>
</div>`
