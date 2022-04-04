const POPUP_PASSWORD_RECOVERY_HTML = `
    <div class="popup">
        <div class="password-recovery popup__container" data-modal-window="true">
            <form onsubmit="return false;" action="#" class="password-recovery__form popup-form" method="POST">
                <div class="password-recovery__close" data-modal-close="true">
                    <div class="popup-close">
                        <button class="popup-close__btn"></button>
                    </div>
                </div> 
                <div class="password-recovery__icon">
                    <div class="popup-icon">
                        <div class="popup-icon__item"></div>
                    </div>
                </div>
                <div class="password-recovery__title popup-title-1">
                    Восстановление пароля
                </div>
                <div class="password-recovery__body">
                    <div class="password-recovery__inputs">
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="tel" value="+34()345" 
                                    aria-label="phone number"
                                    pattern="\\+375\\(\\d{2}\\)\\d{3}-\\d{2}-\\d{2}"
                                    placeholder="Введите телефон" 
                                    name="phone" required>
                            <div class="form-input__check"></div>
                            <div class="form-input__phone"></div>
                        </div>
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="password" 
                                    aria-label="password" 
                                    placeholder="Новый пароль (мин. 6 символов)" 
                                    name="password" required>
                            <div class="form-input__key"></div>
                        </div>
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="password" 
                                    aria-label="confirm password" 
                                    placeholder="Подтвердите пароль" 
                                    name="password" required>
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
const PASSWORD_RECOVERY_PLACEHOLDER_PHONE_MESSAGE = '+375(**)***-**-**';    
// toggling the state of a button in a popup window 
body.addEventListener('click', event => {
    setElementState('password-recovery__btn', 'password-recovery__btn_active', event.target);
});

