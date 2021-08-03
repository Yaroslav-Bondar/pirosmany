// user signin, show the modal window after pressing the button
let popupSigninHtml = `
    <form action="#" class="signin__form popup__form" method="POST">
        <button class="signin__close popup__close">
            <i class="fas fa-times"></i>
        </button>
        <div class="signin__icon popup__icon">
            <i class="far fa-user"></i>
        </div>
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
            <a href="#" class="signin__link">Забыли пароль?</a>
            <button class="signin__btn btn" type="submit">Войти</button>
        </div>
        <div class="signin__register">
            <span>Впервые у нас?</span><a href="#">Зарегистрироваться</a>
        </div>
    </form>
`
let userSignIn = document.querySelectorAll('#user_sign_in')
for (const el of userSignIn) {
    el.addEventListener('click', ()=> {
        let signinPopup = new Popup('signin popup', popupSigninHtml, 'signin-pop-up') // object prototype from popupCommon.js        
        signinPopup.render()
    })
}

