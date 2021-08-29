class Regis {
    render() {
        const productsStore = localStorageUtil.getProducts()
        let html = ''
        let price
        CATALOG.forEach((prod)=> {
            for (let i = 0; i < productsStore.length; i++) {
                if(productsStore[i].id === prod.id) {
                    price = productsStore[i].amount * productsStore[i].price
                    html += `
                        <li class="list__node regis__list-node ${CONTAIN_PRODUCT_ID} ${ORDER_CLASS_ID}" data-product-id='${prod.id}'>
                            <button class="list__btn regis__list-btn"></button>
                            <div class="list__icon regis__list-icon">
                                <img src="" alt="product">
                            </div>
                            <div class="list__name regis__list-name">
                                ${prod.name}
                            </div>
                            <div class="display regis__display">
                                <button data-display="btn-minus" class="display__btn-minus regis__btn-minus">
                                </button>
                                <div class="display__item regis__display-item">
                                    <span data-display="amount" class="display__amount regis__display-amount">${productsStore[i].amount}</span>
                                    <span class="display__units regis__display-units">шт</span>
                                </div>
                                <button data-display="btn-plus" class="display__btn-plus regis__btn-plus">
                                </button>
                            </div>
                            <div class="list__price regis__price">
                                <span class="list__price-item regis__price-item">
                                    ${price}
                                </span>
                                <span class="list__price-currency regis__price-currency">
                                    ${prod.currency}
                                </span>
                            </div>
                        </li>
                    `
                    break
                }                
            }
        })
        BASKET_PRODUCTS_LIST.innerHTML = html
    }
}

const regis = new Regis()
regis.render()