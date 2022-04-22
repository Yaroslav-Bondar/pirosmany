const POPUP_PASSWORD_RECOVERY_HTML = `
    <div class="popup" data-modal-window="true">
        <div class="password-recovery popup__container">
            <form onsubmit="return false;" 
                action="#"
                name="password-recovery" 
                class="password-recovery__form popup-form" 
                method="POST"
            >
                <button type="button" class="password-recovery__close close-btn" data-modal-close="true">
                    <img class="img" src="img/icons/plus.svg" alt="close">
                </button>
                <div class="password-recovery__icon">
                    <div class="popup-icon">
                        <div class="popup-icon__item"></div>
                    </div>
                </div>
                <div class="password-recovery__title popup-title1">
                    Восстановление пароля
                </div>
                <div class="password-recovery__body">
                    <div class="password-recovery__inputs">
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="tel" 
                                    aria-label="phone number"
                                    pattern=${FormValidationPattern.tel}
                                    placeholder="Введите телефон" 
                                    name="phone" required>
                            <div class="form-input__check"></div>
                            <div class="form-input__phone"></div>
                        </div>
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="password" 
                                    aria-label="password"
                                    pattern="${FormValidationPattern.password}" 
                                    placeholder="Новый пароль (мин. 6 символов)" 
                                    name="password" required>
                            <div class="form-input__check"></div>
                            <div class="form-input__key"></div>
                        </div>
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="password" 
                                    aria-label="confirm password"
                                    pattern="${FormValidationPattern.password}" 
                                    placeholder="Подтвердите пароль" 
                                    name="password" required>
                                <div class="form-input__check"></div>
                                <div class="form-input__key"></div>
                        </div>  
                    </div>
                </div>
                <div class="password-recovery__container-btn">
                    <button class="password-recovery__btn" type="reset">Отменить</button>
                    <button class="password-recovery__btn password-recovery__btn_active">Обновить пароль</button>
                </div>
            </form>
        </div>    
    </div>`;
// toggling the state of a button in a popup window 
body.addEventListener('click', event => {
    toggleElementsState('password-recovery__btn', 'password-recovery__btn_active', event.target);
});

