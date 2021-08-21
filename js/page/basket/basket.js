// for input/output the promo (discount)
const orderPromoPriceItem = document.querySelector('.order__promo-price-item')

const basketPromoInput = document.querySelector('.basket__promo-input')

const basketPromoBtn = document.querySelector('.basket__promo-btn')

// contains the item of promo
let promoItem

class Basket {
    render() {
        const productsStore = localStorageUtil.getProducts()
        let html = ''
        let price
        CATALOG.forEach((prod)=> {
            for (let i = 0; i < productsStore.length; i++) {
                if(productsStore[i].id === prod.id) {
                    price = productsStore[i].amount * productsStore[i].price
                    html += `
                        <li class="list__node basket__list-node ${CONTAIN_PRODUCT_ID} ${ORDER_CLASS_ID}" data-product-id='${prod.id}'>
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
                                    <!-- ${prod.price} -->
                                    ${price}
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
        BASKET_PRODUCTS_LIST.innerHTML = html
    }
}
const basket = new Basket()
basket.render()

// input for order
if(basketPromoInput.value.length > 0) {
    promoItem = basketPromoInput.value
}
else {
    promoItem = 0
} 

orderPromoPriceItem.innerHTML = promoItem

// set the value of promo in order display  
basketPromoBtn.addEventListener('click', ()=> {
    if (basketPromoInput.value < 0) {
        alert('promo cannot be less than 0')
    }
    else {
        promoItem = basketPromoInput.value
        orderPromoPriceItem.innerHTML = promoItem
        TOTAL_PAY.innerHTML = Number(TOTAL_PRICE_BASKET.innerHTML) - Number(promoItem)
    }
})