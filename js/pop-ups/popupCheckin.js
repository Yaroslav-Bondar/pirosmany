const POPUP_CHECKIN_HTML = `
<div class="popup" data-modal-window="true">
    <div class="checkin popup__container">
        <form onsubmit="return false;" action="#" 
            class="checkin__form popup-form" 
            name="checkin"
            method="POST">
            <div class="checkin____close" data-modal-close="true">
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
                Зарегистрироваться
            </div>
            
            <div class="checkin__body">
                <div class="checkin__inputs">
                    <div class="checkin__wrap form-input">
                        <input class="form-input__item"
                            type="tel" 
                            aria-label="phone number"
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
                            placeholder="Пароль" 
                            name="password" required>
                        <div class="form-input__check"></div>
                        <div class="form-input__key"></div>
                    </div>
                    <div class="checkin__wrap form-input">
                        <input class="form-input__item" 
                            type="password"
                            aria-label="confirm-password"
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
                <div class="green-radio">
                    <input class="green-checkbox" 
                        type="checkbox"
                        name="offers"
                        value="suggestions"
                    >
                </div>

                <div class="checkin__radio popup__radio">
                    <label class="popup__radio-label">
                        <input type="radio" class="popup__radio-real" name="offers" checked>
                        <span class="popup__radio-fake"></span>
                        <span class="popup__radio-txt">
                            Хочу получать выгодные предложения от магазина
                        </span>
                    </label>
                    <label class="popup__radio-label">
                        <input type="radio" class="popup__radio-real" name="offers">
                        <span class="popup__radio-fake"></span>
                        <span class="popup__radio-txt">
                            Принимаю условия 
                            <a href="#" class="popup__radio-link">
                                Пользовательского соглашения, Политики конфиденциальности
                            </a>
                        </span>
                    </label>
                </div>
                <button class="checkin__btn btn" type="submit">Зарегистрироваться</button>
            </div>
        </form>
    </div>
</div>`
