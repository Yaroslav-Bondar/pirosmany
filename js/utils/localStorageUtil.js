class LocalStorageUtil {
    constructor() {
        this.keyName = 'basket'
    }
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName)
        if(productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return []
    }
    getProductsAmount(id) {
        let products = this.getProducts()
        let amount
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
        return {exist, amount}
    }
    putProducts(idElement) {
        let products = this.getProducts()
        let pushProduct = false
        let amount = 0
        if(products.length === 0) {
            products.push({id: idElement, amount: 1})
            amount++
        } 
        else {
            products.forEach((el) => {
                if(idElement === el.id) {
                    el.amount++
                    amount = el.amount
                    pushProduct = true
                }
            })
        }
        if(!pushProduct) {
            products.push({id: idElement, amount: 1})
            amount++
        }
        // const index = products.indexOf(id)
        // if(index === -1) {
        //     // products.push(id)
        //     products.push({id: id, amount: amount})
        //     pushProduct = true
        // }
        // else {
        //     // matches the delete button
        //     products.splice(index, 1)
        // }
        localStorage.setItem(this.keyName, JSON.stringify(products))
        // return { pushProduct, products }
        // currentProduct.id = 
        console.log(products)
        return amount
    }
    takeProducts(id) {
        let products = this.getProducts()
        // let amountElement
        const {exist, amount} = this.getProductsAmount(id)
        let amountElement = 0
        console.log(exist,amount)
        if(exist) {
            if(amount !== 0) {
                products.forEach((el) => {
                    if(id === el.id) {
                        el.amount--
                        amountElement = el.amount
                        // pushProduct = true
                    }
                })
            }
        }
        localStorage.setItem(this.keyName, JSON.stringify(products))
        console.log(amountElement)
        return amountElement
    }
}

const localStorageUtil = new LocalStorageUtil()
