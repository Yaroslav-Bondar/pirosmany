const POPUP_SUBSCRIBE_HTML = `
<div class="subscribe popup" data-modal-window="true">
    <div class="subscribe popup__container">
        <form onsubmit="return false;"
            action="#" 
            class="subscribe__form popup-form"
            name="subscribe" 
            method="POST"
        >
            <button type="button" class="subscribe__close close-btn" data-modal-close="true">
                <img class="img" src="img/icons/plus.svg" alt="close">
            </button> 
            <div class="subscribe__icon"></div>
            <div class="subscribe__title popup-title1">
                Подпишитесь на нашу рассылку и получите промокод на 500 RUB!
            </div>
            <div class="subscribe__body">
                <div class="subscribe__inputs">
                    <div class="subscribe__wrap form-input">
                        <input class="form-input__item subscribe__input" 
                            type="email" 
                            aria-label="phone number"
                            pattern=${FormValidationPattern.tel}
                            placeholder="E-mail" 
                            name="e-mail" 
                            required
                        >
                        <div class="form-input__check"></div>
                        <div class="form-input__document-case"></div>
                    </div>
                </div>
            </div>
            <button class="subscribe__btn btn" type="submit">Отправить</button>
        </form>
</div>`
