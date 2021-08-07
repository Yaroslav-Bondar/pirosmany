let popupAboutProdReviewHtml = `
    <form action="#" class="review__form popup__form" method="POST">
        <button class="review__close popup__close">
            <i class="fas fa-times"></i>
        </button>
        <div class="review__title popup__title">
            Добавить отзыв
        </div>
        <div class="review__body popup__body">
            <div class="review__wrap popup__wrap">
                <div class="review__rating">
                    <!-- <div class="review__text"> -->
                    <span class="review__field-name">Ваша оценка:</span> 
                    <!-- </div> -->
                    <div class="rating">
                        <input type="radio" id="5-stars" name="rating" value="5" />
                        <label for="5-stars" class="star">
                            <!-- &#9733; -->
                            <i class="fas fa-star"></i>
                        </label>
                        <input type="radio" id="4-stars" name="rating" value="4" />
                        <label for="4-stars" class="star">
                            <!-- &#9733; -->
                            <i class="fas fa-star"></i>
                        </label>
                        <input type="radio" id="3-stars" name="rating" value="3" />
                        <label for="3-stars" class="star">
                            <i class="fas fa-star"></i>
                            <!-- &#9733; -->
                        </label>
                        <input type="radio" id="2-stars" name="rating" value="2" />
                        <label for="2-stars" class="star">
                            <!-- &#9733; -->
                            <i class="fas fa-star"></i>
                        </label>
                        <input type="radio" id="1-star" name="rating" value="1" />
                        <label for="1-star" class="star">
                            <i class="fas fa-star"></i>
                            <!-- &#9733; -->
                        </label>
                    </div>
                </div>
            </div>
            <div class="review__wrap popup__wrap">
                <label class="review__label">
                    <span class="review__field-name">Ваше имя:</span>
                    <input type="text" placeholder="Введите Ваше имя" name="name" required>
                </label>
            </div>
            <div class="review__wrap popup__wrap">
                <label class="review__label">
                    <span class="review__field-name">Ваш отзыв:</span>
                    <textarea maxlength="500" name="review-text" form="review__form" rows="8" cols="30"></textarea>
                </label>
            </div>
            <button class="review__btn btn" type="submit">Добавить отзыв</button>
        </div>
    </form>
`

let aboutprodReviewBtnPopup = document.querySelectorAll('.aboutprod__review-btn_pop-up')
for (const el of aboutprodReviewBtnPopup) {
    el.addEventListener('click', ()=> {
        let aboutprodReviewPopup = new Popup('review popup', popupAboutProdReviewHtml, 'aboutprod-review-pop-up') // object prototype from popupCommon.js
        aboutprodReviewPopup.render() 
    })
}