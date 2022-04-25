const popupAboutProdReviewHtml = `
    <div class="popup" data-modal-window="true">
        <div class="review popup__container">
            <form action="#" 
                class="review__form popup-form" 
                method="POST"
                onsubmit="return false;"
            >
                <button type="button" class="review__close close-btn" data-modal-close="true">
                    <img class="img" src="img/icons/plus.svg" alt="close">
                </button>
                <div class="review__title">
                    Добавить отзыв
                </div>

                <div class="review__column">
                    <div class="review__row">
                        <div class="review__signature">Ваша оценка:</div>
                        <div class="review__rating rating">
                            <input class="review__rating-item rating__item" 
                                type="radio" 
                                name="rating" 
                                value="star_1"
                            >
                            <input class="review__rating-item rating__item"
                                type="radio" 
                                name="rating"
                                value="star_2"
                            >
                            <input class="review__rating-item rating__item" 
                                type="radio" 
                                name="rating" 
                                value="star_3"
                            >
                            <input class="review__rating-item rating__item" 
                                type="radio" 
                                name="rating" 
                                value="star_4"
                            >
                            <input class="review__rating-item rating__item" 
                                type="radio" 
                                name="rating" 
                                value="star_5"
                            >
                        </div>
                    </div>
                    <div class="review__row">
                        <label class="review__signature">Ваше имя</label>
                        <div class="review__wrap input-wrap">
                            <input class="review__input form-input" 
                                type="text" 
                                aria-label="your name"
                                pattern=""
                                placeholder="Введите Ваше имя" 
                                name="name" 
                                required
                            >
                            <div class="review__check input-check"></div>
                        </div>
                    </div>
                </div>    

                    <div class="review__wrap">
                        <label class="review__label">
                            <span class="review__field-name">Ваш отзыв:</span>
                            <textarea maxlength="500" name="review-text" form="review__form" rows="8" cols="30"></textarea>
                        </label>
                    </div>
                    <button class="review__btn btn" type="submit">Добавить отзыв</button>
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
