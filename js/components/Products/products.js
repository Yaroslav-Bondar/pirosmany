class Product {
    constructor() {
        this.classNameActive = 'products__card-add_active'
        this.classNameInactive = 'products__card-btn_inactive'
    }
    handlerSwitchSetBasket(element, event, id) {
        element.style.display = 'none'
        let nextElement = event.target.nextElementSibling
        nextElement.style.display = 'flex'
        nextElement.querySelector('.display__amount').innerHTML = localStorageUtil.putProducts(id)
        // display the quantiti of items in card
        BASKET_AMOUNT.innerHTML = localStorageUtil.getProductsAmountAll()
    }
    render() {
        // // display the quantiti of items in card
        // BASKET_AMOUNT.innerHTML = localStorageUtil.getProductsAmountAll()
        let html = ''
        CATALOG.forEach(({id, name, img, currency ,price, price_separator,
                            price_units, per_text, per_item, per_units}) => {
            let activeClass = ''
            let inactiveClass = ''
            let elementAmount = 0
            //display products and their quantity in the basket (in LocalStorage)
            if(localStorageUtil.getProducts().length !== 0) { // ***
                const {exist, amount} = localStorageUtil.getProductsAmount(id)
                if(exist) {
                    activeClass = this.classNameActive
                    inactiveClass = this.classNameInactive
                    elementAmount = amount
                }
            }
            html += 
            `
                <div class="products__card card ${CONTAIN_PRODUCT_ID}" data-product-id='${id}'>
                    <a href="card.html" class="products__link ${POINTER_PRODUCT_ID}">
                        <div class="card__img">
                            <img src="${img}" alt="" class="card__img-item">
                        </div>
                        <div class="card__content">
                            <h4 class="card__title">
                                ${name}
                            </h4>
                            <div class="card__description">
                                Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить.
                            </div>
                        </div>
                    </a>    
                    <div class="card__content-2">
                        <div class="card__rating">
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star"></i>
                        </div>
                        <div class="card__price">
                            <span class="card__price-1">
                                <div class="card__price-1-item">${price}</div>
                                <span class="card__price-1-currency">${currency}</span>
                                <span class="card__price-1-separator">${price_separator}</span>
                                <span class="card__price-1-units">${price_units}</span>
                            </span>
                            <span class="card__price-2">
                                <span class="card__price-2-text">${per_text}</span>
                                <span class="card__price-2-item">${per_item}</span>
                                <span class="card__price-2-units">${per_units}</span>
                            </span>
                        </div>
                    </div>
                    <div class="card__btns">
                        <button class="products__card-btn card__button btn ${inactiveClass}" onclick='productPage.handlerSwitchSetBasket(this, event, "${id}")'>В корзину</button>
                        <div class='products__card-add card__add ${activeClass}'>
                            <div class="card__display display">
                                <button data-display="btn-minus" class="display__btn-minus card__btn-minus">
                                </button>
                                <div class="display__item card__display-item">
                                    <span data-display="amount" class="display__amount card__display-amount">${elementAmount}</span>
                                    <span class="display__units card__display-units">шт</span>
                                </div>
                                <button data-display="btn-plus" class="display__btn-plus card__btn-plus">
                                </button>
                            </div>
                            <a href="basket.html" class="card__basket basket__btn">
                                <i class="card__basket-icon basket__btn-icon fas fa-cart-arrow-down" aria-hidden="true"></i>
                            </a>        
                        </div>
                    </div>
                </div>
            `
        })
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productPage = new Product()
productPage.render()