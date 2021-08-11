class Products {
    render() {
        let html = ''

        CATALOG.forEach(item => {
            html += 
            `
                <div class="products__card card">
                    <div class="card__img">
                        <img src="${item.img}" alt="product" class="card__img-item">
                    </div>
                    <div class="card__content">
                        <h4 class="card__title">
                            голень говядины
                        </h4>
                        <div class="card__description">
                            Описание мраморной говядины, состоящее из нескольких преложений. Можно наполнить.
                        </div>
                        <div class="card__rating">
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star_active"></i>
                            <i class="fas fa-star card__star card__star"></i>
                        </div>
                        <div class="card__price">
                            <span class="card__price-1">
                                <div class="card__price-1-item">${item.price}</div>
                                <span class="card__price-1-currency">${item.currency}</span>
                                <span class="card__price-1-separator">${item.price_separator}</span>
                                <span class="card__price-1-units">${item.price_units}</span>
                            </span>
                            <span class="card__price-2">
                                <span class="card__price-2-text">${item.per_text}</span>
                                <span class="card__price-2-item">${item.per_item}</span>
                                <span class="card__price-2-units">${item.per_units}</span>
                            </span>
                        </div>
                    </div>
                    <button class="button card__button btn">В корзину</button>
                </div>
            `
        })
        ROOT_PRODUCTS.innerHTML = html
    }
}

const products = new Products()
products.render()