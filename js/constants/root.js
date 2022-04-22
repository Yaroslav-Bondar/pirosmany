// const ROOT_PRODUCTS = document.getElementById('products') 
// const BASKET_AMOUNT = document.querySelector('.basket__amount') // *
const HEADER = document.getElementById('header')
// const POINTER_PRODUCT_ID = 'pointer-product-id' 
const CONTAIN_PRODUCT_ID = 'contain-product-id' // *
// let header = document.querySelector('.header')
// var idElement = 5
// to set the rating of a product
const SET_RATING = 'rating__set'
// to display the rating of a product
const RATING_STAR_ACTIVE = 'rating__star_active-'

// colors
const STAR_ACTIVE_COLOR = 'rgb(0, 172, 78)'
const STAR_NO_ACTIVE_COLOR = 'rgb(204, 204, 204)'
const STAR_HOVER_COLOR = 'rgb(0,214,78)'
// // colors

/**
 * 
 */
const FormValidationPattern = {
    tel: '\\+375\\(\\d{2}\\)\\d{3}-\\d{2}-\\d{2}',
    password: '[^()_=^+{}]{6,25}',
}
const reservValidationPattern = {
    text: '[^\\W]+',
    tel: '\\+375\\(\\d{2}\\)\\d{3}-\\d{2}-\\d{2}',
    password: '[^()_=^+{}]{6,25}',
}

/**
 * Placeholder messages object. Contains placeholder messages 
 * for a particular form and input element type.
 */
const FormPlaceholderMessages = {
    tel: '+375(**)***-**-**',
}
/**
 * Custom validation message object. Contains custom validation messages 
 * based on element type and validation type.
 */
const FormValidationMessages = {
    tel: {
        patternMismatch: 'please enter phone number in correct format: +375(**)***-**-**',
    },
    password: {
        patternMismatch: 'Please enter the password in the correct format:' +
                         'valid string from 6 to 25, which contains no characters: ()_=^+{}', 
        tooShort: 'password is short, must be at least 6 characters',
    }
}

const reservValidationMessages = {
    text: {
            patternMismatch: 'please enter the name in the correct format: ' + 
                                'valid characters from the range a-z, 0-1, and the character _',
            tooShort: 'name is too short, length must be between 3 and 10',
            tooLong: 'too long', 
        },
    tel: {
        patternMismatch: 'please enter phone number in correct format: +375(**)***-**-**',
    },
    password: {
        patternMismatch: 'Please enter the password in the correct format:' +
                         'valid string from 6 to 25, which contains no characters: ()_=^+{}', 
        tooShort: 'password is short, must be at least 6 characters',
    }
}
