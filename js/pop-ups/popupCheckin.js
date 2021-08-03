let popupCheckinHtml = `
    <form action="#" class="checkin__form popup__form" method="POST">
        <button class="checkin__close popup__close">
            <i class="fas fa-times"></i>
        </button>
        <div class="checkin__icon popup__icon">
            <i class="far fa-user"></i>
        </div>
        <div class="checkin__title popup__title">
            Зарегистрироваться
        </div>
        <div class="checkin__body popup__body">
            <div class="checkin__inputs popup__inputs">
                <div class="checkin__wrap popup__wrap">
                    <input type="tel" placeholder="Телефон" name="phone" required>
                </div>
                <div class="checkin__wrap popup__wrap">
                    <input type="password" placeholder="Пароль" name="password" required>
                </div>
                <div class="checkin__wrap popup__wrap">
                    <input type="password" placeholder="Подтвердите пароль" name="password-repeat" required>
                </div>  
            </div>
            <div class="checkin__wrong-message popup__wrong-message">
                Пользователь с таким номером телефона уже зарегистрирован.
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
`
let checkinBtn = document.querySelectorAll('#checkin')
for (const el of checkinBtn) {
    el.addEventListener('click', ()=> {
        let checkinPopup = new Popup('checkin popup', popupCheckinHtml, 'checkin-pop-up') // object prototype from popupCommon.js        
        checkinPopup.render()
    })
} 