// const POPUP_PASSWORD_RECOVERY_HTML = `
//     <div class="password-recovery popup" data-modal-window="true">
//         <form action="#" class="password-recovery__form popup__form" method="POST">
//             <button class="password-recovery__close popup__close" data-modal-close="true"></button>
//             <div class="password-recovery__icon popup__icon"></div>
//             <div class="password-recovery__title popup__title">
//                 Восстановление пароля
//             </div>
//             <div class="password-recovery__body popup__body">
//                 <div class="password-recovery__inputs popup__inputs">
//                     <div class="password-recovery__wrap popup__wrap">
//                         <input type="tel" placeholder="Введите телефон" name="phone" required>
//                     </div>
//                     <div class="password-recovery__wrap popup__wrap">
//                         <input type="password" placeholder="Новый пароль (мин. 6 символов)" name="password" required>
//                     </div>
//                     <div class="password-recovery__wrap popup__wrap">
//                         <input type="password" placeholder="Подтвердите пароль" name="password" required>
//                     </div>  
//                 </div>
//                 <button class="password-recovery__btn btn" type="submit">Войти</button>
//             </div>
//             <div class="password-recovery__register">
//                 <span class="password-recovery__register-txt">Впервые у нас?</span>
//                 <button id="check-in-btn-1" data-modal-close="true" data-modal-open="true" class="password-recovery__checkin-btn">Зарегистрироваться</button>
//             </div>
//         </form>
//     </div>`

    const POPUP_PASSWORD_RECOVERY_HTML = `
    <div class="popup">
        <div class="password-recovery popup__container" data-modal-window="true">
            <form action="#" class="password-recovery__form popup-form" method="POST">
                <div class="password-recovery__close" data-modal-close="true">
                    <div class="popup-close">
                        <button class="popup-close__btn" ></button>
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
                        <div class="password-recovery__wrap form-input form-input_phone">
                            <input class="form-input__item" type="tel" placeholder="Введите телефон" name="phone" required>
                        </div>
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="password" placeholder="Новый пароль (мин. 6 символов)" name="password" required>
                        </div>
                        <div class="password-recovery__wrap form-input">
                            <input class="form-input__item" type="password" placeholder="Подтвердите пароль" name="password" required>
                        </div>  
                    </div>
                </div>
                <div class"password-recovery__container-btn">
                    <button class="password-recovery__cansel-btn btn" type="reset">Отменить</button>
                    <button class="password-recovery__submit-btn btn">Обновить пароль</button>
                </div>
            </form>
        </div>    
    </div>`