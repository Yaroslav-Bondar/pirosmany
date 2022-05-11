const POPUP_PRODUCT_REVIEW_HTML = `
    <div class="popup" data-modal-window="true">
        <div class="review popup__container">
            <form action="#" 
                class="review__form popup-form" 
                method="POST"
                onsubmit="return false;"
            >
                <button type="button" class="review__close close-btn btn" data-modal-close="true"></button>
                <div class="review__title">
                    Добавить отзыв
                </div>
                <div class="review__column">
                    <div class="review__row review__row_align_vertical-center">
                        <div class="review__signature">Ваша оценка:</div>
                        <div class="review__rating rating">
                            <input class="review__like rating-item" 
                                type="radio" 
                                name="rating" 
                                value="star_5"
                            >
                            <input class="review__like rating-item"
                                type="radio" 
                                name="rating"
                                value="star_4"
                            >
                            <input class="review__like rating-item" 
                                type="radio" 
                                name="rating" 
                                value="star_3"
                            >
                            <input class="review__like rating-item" 
                                type="radio" 
                                name="rating" 
                                value="star_2"
                            >
                            <input class="review__like rating-item" 
                                type="radio" 
                                name="rating" 
                                value="star_1"
                            >
                        </div>
                    </div>
                    <div class="review__row review__row_align_vertical-center">
                        <label class="review__signature">Ваше имя:</label>
                        <div class="review__wrap input-wrap">
                            <input class="review__name form-input" 
                                type="text" 
                                aria-label="your name"
                                placeholder="Введите Ваше имя:" 
                                name="name" 
                                required
                            >
                            <div class="review__check input-check"></div>
                        </div>
                    </div>
                    <div class="review__row">
                        <label class="review__signature">Ваш отзыв:</label>
                        <textarea 
                            class="review__text-area form-input" 
                            maxlength="500" 
                            name="review">
                        </textarea>
                    </div>
                    <div class="review__row">
                        <button class="review__btn btn btn_theme_green" type="submit">Добавить отзыв</button>
                    </div>
                </div>    
            </form>
        </div>
    </div>`

let aboutprodReviewBtnPopup = document.querySelectorAll('.aboutprod__review-btn_pop-up')
for (const el of aboutprodReviewBtnPopup) {
    el.addEventListener('click', ()=> {
        let aboutprodReviewPopup = new Popup('review popup', popupAboutProdReviewHtml, 'aboutprod-review-pop-up') // object prototype from popupCommon.js
        aboutprodReviewPopup.render()
        setRating()
    })
}
