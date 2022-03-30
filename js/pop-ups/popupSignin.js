const POPUP_SIGNIN_HTML = `
    <div class="signin popup" data-modal-window="true">
        <form action="#" class="signin__form popup__form" method="POST">
            <button class="signin__close popup__close" data-modal-close="true"></button>
            <div class="signin__icon popup__icon"></div>
            <div class="signin__title popup__title">
                Войти в личный кабинет
            </div>
            <div class="signin__body popup__body">
                <div class="signin__inputs popup__inputs">
                    <div class="signin__wrap popup__wrap">
                        <input type="tel" placeholder="Телефон" name="phone" required>
                    </div>
                    <div class="signin__wrap popup__wrap">
                        <input type="password" placeholder="Пароль" name="password" required>
                    </div> 
                </div>
                <div class="signin__wrong-message popup__wrong-message">
                    Не правильный логин или пароль
                </div>
                <button id='password-recovery-btn' class="signin__password-recovery-btn" data-modal-close="true" data-modal-open="true">Забыли пароль?</button>
                <button class="signin__btn btn" type="submit">Войти</button>
            </div>
            <div class="signin__register">
                <span class="signin__register-txt">Впервые у нас?</span>
                <button id="check-in-btn-1" data-modal-close="true" data-modal-open="true" class="signin__checkin-btn">Зарегистрироваться</button>
            </div>
        </form>
    </div>`