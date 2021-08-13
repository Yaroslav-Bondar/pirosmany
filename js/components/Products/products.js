class Products {
    switchSetProductsBasket() {

    }
    render() {
        let html = ''

        CATALOG.forEach(({id, name, img, currency ,price, price_separator,
                            price_units, per_text, per_item, per_units}) => {
            html += 
            `
                <div class="products__card card ${CONTAIN_PRODUCT_ID}" data-product-id='${id}'>
                    <a href="card.html" class="products__link ${POINTER_PRODUCT_ID}">
                        <div class="card__img">
                            <img src="${img}" alt="product" class="card__img-item">
                        </div>
                        <div class="card__content">
                            <h4 class="card__title">
                                голень говядины
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
                    <button class="button card__button btn" onclick='productsPage.switchSetProductsBasket()'>В корзину</button>
                </div>
            `
        })
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
productsPage.render()