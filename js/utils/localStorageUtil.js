class LocalStorageUtil {
    constructor() {
        this.keyName = 'basket'
        this.tmpId = 'tmp_id'
    }
    // when you click on a product card, to store the product id and 
    // generate a product card on the product card page (card.html)
    setId(id) {
        localStorage[this.tmpId] = id
    }
    // when you click on a product card, to store the product id and 
    // generate a product card on the product card page (card.html)
    getId() {
        return localStorage[this.tmpId]
    }
    // get all the items from the cart
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName)
        if(productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return []
    }
    // get the price of products by ID
    getProductPriceById(id) {
        let price
        // get products from basket (LocalStorage) 
        let products = this.getProducts()
        return products.reduce((sum, item)=> {
            if(item.id === id) {
                sum = item.amount * item.price
            }
            return sum 
        },0)  
    }
    getTotalProductsPrice() {
        let products = this.getProducts()
        return products.reduce((sum, item)=> {
            return sum += this.getProductPriceById(item.id)
        },0)
    }
    getProductsAmountAll() {
        let products = this.getProducts()
        if (products.length !== 0) {
            return products.reduce((sum,item)=> {
                return sum += item.amount    
            },0)
        }
        else {
            return 0
        }
    }
    // number of items in the cart by id
    getProductsAmount(id) {
        let products = this.getProducts()
        let amount = 0
        let exist = false
        if(products.length !== 0) {
            for (let i = 0; i < products.length; i++) {
                if(products[i].id === id) {
                    exist = true
                    amount = products[i].amount
                    break
                }
            }
        }
        return {exist, amount, products}
    }
    // put an item in the basket
    putProducts(id) {
        const {exist, amount, products} = this.getProductsAmount(id)
        let amountElement = 0
        if(!exist) {
            // find the price of product in CATALOG  
            let price
            for (let i = 0; i < CATALOG.length; i++) {
                if(CATALOG[i].id === id) {
                    price = CATALOG[i].price
                    break
                }
            }
            products.push({id: id, amount: 1, price: price})
            amountElement++
            
        } 
        else {
            for (let i = 0; i < products.length; i++) {
                if(products[i].id === id) {
                    products[i].amount++
                    amountElement = products[i].amount
                    break
                }
            }
        }
        // write changes to the basket (LocalStorage)
        localStorage.setItem(this.keyName, JSON.stringify(products))
        return amountElement
    }
    // remove an item from the cart
    takeProducts(id) {
        const {exist, amount, products} = this.getProductsAmount(id)
        let amountElement = 0
        if(exist) {
            for (let i = 0; i < products.length; i++) {
                if(products[i].id === id) {
                    if(amount !== 0) {
                        // products[i].amount = products[i].amount - 1
                        products[i].amount--
                        amountElement = products[i].amount
                        // if the quantity is 0 - remove from the cart
                        if(amountElement === 0) {
                            products.splice(i, 1)
                        }
                        break
                    }
                }
            }
        }
        // write changes to the basket (LocalStorage)
        localStorage.setItem(this.keyName, JSON.stringify(products))
        return amountElement
    }
}
const localStorageUtil = new LocalStorageUtil()
