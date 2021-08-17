class Basket {
    render() {
        const productsStore = localStorageUtil.getProducts()
        let html = ''
        CATALOG.forEach((prod)=> {
            for (let i = 0; i < productsStore.length; i++) {
                if(productsStore[i].id === prod.id) {
                    html += `
                        <li class="list__node basket__list-node ${CONTAIN_PRODUCT_ID}" data-product-id='${prod.id}'>
                            <button class="list__btn basket__list-btn"></button>
                            <div class="list__icon basket__list-icon">
                                <img src="" alt="product">
                            </div>
                            <div class="list__name basket__list-name">
                                ${prod.name}
                            </div>
                            <div class="display basket__display">
                                <button data-display="btn-minus" class="display__btn-minus basket__btn-minus">
                                </button>
                                <div class="display__item basket__display-item">
                                    <span data-display="amount" class="display__amount basket__display-amount">${productsStore[i].amount}</span>
                                </div>
                                <button data-display="btn-plus" class="display__btn-plus basket__btn-plus">
                                </button>
                            </div>
                            <div class="list__price basket__price">
                                <span class="list__price-item basket__price-item">
                                    ${prod.price}
                                </span>
                                <span class="list__price-currency basket__price-currency">
                                    ${prod.currency}
                                </span>
                            </div>
                        </li>
                    `
                    break
                }
            }
        })
        BASKET_PRODUCTS.innerHTML = html
    }
}
const basket = new Basket()
basket.render()