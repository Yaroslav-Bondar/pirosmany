let aboutprodBuy = document.querySelector('.aboutprod__buy')

class Card {
    rating // product rating
    render () {
        const productsStore = localStorageUtil.getProducts()
        let price, amount
        let htmlAboutprodBuy = ''
        CATALOG.forEach(item => {
            if(item.id === localStorageUtil.getId()) {
                amount = localStorageUtil.getProductsAmount(item.id).amount
                price = amount * item.price
                this.rating = item.rating
                // for calculate in display.js
                aboutprodBuy.classList.add('contain-product-id', 'order-class-id')
                // for calculate in display.js
                aboutprodBuy.dataset.productId = item.id
                // hello()
                htmlAboutprodBuy += `
                    <div class="buy__title">
                        ${item.name}
                    </div>
                    <div class="buy__rating rating">
                        <input class="buy__like rating-item" 
                            type="radio" 
                            name="rating" 
                            value="star_5"
                            disabled
                        >
                        <input class="buy__like rating-item" 
                            type="radio" 
                            name="rating" 
                            value="star_4"
                            checked
                        >
                        <input class="buy__like rating-item" 
                            type="radio" 
                            name="rating" 
                            value="star_3"
                            disabled
                        >
                        <input class="buy__like rating-item" 
                            type="radio" 
                            name="rating" 
                            value="star_2"
                            disabled
                        >
                        <input class="buy__like rating-item" 
                            type="radio" 
                            name="rating" 
                            value="star_1"
                            disabled
                        >
                    </div>
                    <div class="buy__reviews">
                        <span class="buy__reviews-text">??????-???? ??????????????:</span>
                        <span class="buy__reviews-amount">23</span> 
                    </div>
                    <div class="buy__price">
                        <span class="buy__price-text">???????? ???? ????.</span>
                        <div class="buy__price-conteiner"> 
                            <span class="buy__price-cost">${item.price}</span>
                            <span class="buy__price-currency">${item.currency}</span>
                        </div>
                    </div>
                    <div class="buy__joke">
                        <span class="buy__joke-text">??????-???? ???? ?? ????????????????</span>
                        <span class="buy__joke-amount">4 ????.</span>
                    </div>
                    <div class="buy__amount">
                        <span class="buy__amount-text">????????????????????</span>
                        <div class="display buy__display">
                            <button data-display="btn-minus" 
                                class="display__btn-minus buy__btn-minus btn btn_theme_transparent">
                            </button>
                            <div class="display__item buy__display-item">
                                <span data-display="amount" class="display__amount buy__display-amount">${amount}</span>
                                <span class="display__units buy__display-units">????</span>
                            </div>
                            <button data-display="btn-plus" 
                                class="display__btn-plus buy__btn-plus btn btn_theme_transparent">
                            </button>
                        </div>
                    </div>
                    <div class="buy__total">
                        <span class="buy__total-text">
                            ?????????? ?? ????????????
                        </span>
                        <div class="buy__total-conteiner">
                            <span class="buy__total-amount sum_product_price">
                                ${price}
                            </span>
                            <span class="buy__total-currency">
                                ${item.currency}
                            </span>
                        </div>
                        
                    </div>
                    <div class="buy__btns">
                        <button class="buy__btn btn btn_theme_green">
                            ????????????
                        </button>
                        <a class="basket__btn card__basket aboutprod__basket-btn" href="basket.html">
                            <span class="cart-img buy__cart-btn"></span>
                        </a>
                    </div>
                `
            }
        });
        aboutprodBuy.innerHTML = htmlAboutprodBuy
    }
}

const card = new Card()
card.render()
