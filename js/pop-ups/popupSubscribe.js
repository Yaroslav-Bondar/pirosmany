let popupSubscribeHtml = `
    <form action="#" class="subscribe__form popup__form" method="POST">
        <button class="popup__close">
            <i class="fas fa-times"></i>
        </button>
        <div class="subscribe__icon popup__icon">
            <i class="fab fa-mailchimp"></i>
        </div>
        <div class="subscribe__title popup__title">
            Подпишитесь на нашу рассылку и получите промокод на 500 RUB!
        </div>
        <div class="subscribe__body popup__body">
            <div class="subscribe__inputs popup__inputs">
                <div class="subscribe__wrap popup__wrap">
                    <input type="email" placeholder="E-mail" name="e-mail" required>
                </div>
            </div>
        </div>
        <button class="subscribe__btn btn" type="submit">Отправить</button>
    </form>
`
let slider1Btn = document.querySelectorAll('.slider1__btn')
let subscribePopup = new Popup(slider1Btn, 'subscribe popup', popupSubscribeHtml) // object prototype from popupCommon.js
subscribePopup.render() 

