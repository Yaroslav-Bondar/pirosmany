// when you click on a product card, to store the product id and 
// generate a product card on the product card page (card.html)
ROOT_PRODUCTS.addEventListener('click', (e)=> {
    if(!e.target.closest('.pointer-product-id')) return
        let id = e.target.closest('.contain-product-id').dataset.productId
        localStorageUtil.setId(id)
})
