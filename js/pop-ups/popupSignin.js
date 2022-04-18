const POPUP_SIGNIN_HTML = `
    <div class="popup" data-modal-window="true">
        <div class="signin popup__container">
            <form onsubmit="return false;" action="#" 
                class="signin__form popup-form" 
                name="signin"
                method="POST">
                <button type="button" class="signin__close close-btn" data-modal-close="true">
                   <img class="img" src="img/icons/plus.svg" alt="close">
                </button>
                <div class="signin__icon">
                    <div class="popup-icon">
                        <div class="popup-icon__item"></div>
                    </div>
                </div>
                <div class="signin__title popup-title1">
                    Войти в личный кабинет
                </div>
                <div class="signin__body">
                    <div class="signin__inputs">
                        <div class="signin__wrap form-input">
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
                        <div class="signin__wrap form-input">
                            <input class="form-input__item" 
                                type="password" 
                                aria-label="password"
                                pattern="${FormValidationPattern.password}" 
                                placeholder="Пароль"
                                minlength='6'
                                maxlength='25' 
                                name="password" 
                                required>
                            <div class="form-input__check"></div>
                            <div class="form-input__key"></div>
                        </div> 
                    </div>
                    <div id="signin-wrong-message" class="signin__wrong-message">
                        Не правильный логин или пароль
                    </div>
                    <div class="signin__btns">
                        <button type="button" id='password-recovery-btn' 
                            class="signin__password-recovery-btn" 
                            data-modal-close="true" 
                            data-modal-open="true">
                            Забыли пароль?
                        </button>
                        <button class="signin__enter-btn btn" type="submit">Войти</button>
                    </div>
                </div>
                <div class="signin__register">
                    <span class="signin__register-txt">Впервые у нас?</span>
                    <button type="button" id="check-in-btn-1" data-modal-close="true" 
                        data-modal-open="true" 
                        class="signin__checkin-btn">
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    <div>`