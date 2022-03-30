const POPUP_PASSWORD_RECOVERY_HTML = `
    <div class="password-recovery popup" data-modal-window="true">
        <form action="#" class="password-recovery__form popup__form" method="POST">
            <button class="password-recovery__close popup__close" data-modal-close="true"></button>
            <div class="password-recovery__icon popup__icon"></div>
            <div class="password-recovery__title popup__title">
                Восстановление пароля
            </div>
            <div class="password-recovery__body popup__body">
                <div class="password-recovery__inputs popup__inputs">
                    <div class="password-recovery__wrap popup__wrap">
                        <input type="tel" placeholder="Введите телефон" name="phone" required>
                    </div>
                    <div class="password-recovery__wrap popup__wrap">
                        <input type="password" placeholder="Новый пароль (мин. 6 символов)" name="password" required>
                    </div>
                    <div class="password-recovery__wrap popup__wrap">
                        <input type="password" placeholder="Подтвердите пароль" name="password" required>
                    </div>  
                </div>
                <button class="password-recovery__btn btn" type="submit">Войти</button>
            </div>
            <div class="password-recovery__register">
                <span class="password-recovery__register-txt">Впервые у нас?</span>
                <button id="check-in-btn-1" data-modal-close="true" data-modal-open="true" class="password-recovery__checkin-btn">Зарегистрироваться</button>
            </div>
        </form>
    </div>`