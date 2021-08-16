class LocalStorageUtil {
    constructor() {
        this.keyName = 'basket'
        // this.keyAmountAllProduct = 'amountAllProduct'
    }
    // setAmountAllProduct() {

    // }
    // amountAllProduct = 0
    // get all the items from the cart
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName)
        if(productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return []
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
        // const amountAll = this.getProducts(this.keyAmountAllProduct)
        // console.log('amountAll', amountAll)
        let pushProduct = false
        let amountElement = 0
        if(!exist) {
            products.push({id: id, amount: 1})
            amountElement++
            // amountAll[0] = 1
            pushProduct = true
            
        } 
        else {
            for (let i = 0; i < products.length; i++) {
                if(products[i].id === id) {
                    products[i].amount++
                    amountElement = products[i].amount
                    // amountAll[0] = (Number(amountAll[0]) + 1)
                    // this.amountAllProduct++
                    pushProduct = true
                    break
                }
            }
        }
        // write changes to the basket (LocalStorage)
        localStorage.setItem(this.keyName, JSON.stringify(products))
        // localStorage.setItem(this.keyAmountAllProduct, JSON.stringify(amountAll))
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
                        // this.amountAllProduct--
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
// console.log(localStorageUtil.getProducts())
const localStorageUtil = new LocalStorageUtil()
