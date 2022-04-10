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

// popups constants
const PLACEHOLDER_PHONE_MESSAGE = '+375(**)***-**-**';    
const VALIDATION_PHONE_MESSAGE = 'please enter phone number in correct format: +375(**)***-**-**';
const VALIDATION_SHORT_PAROL_MESSAGE = 'password is short, must be at least 6 characters';
const VALIDATION_LONG_PAROL_MESSAGE = 'password is long, must be 25 characters maximum';
const VALIDATION_PASSWORD_PATTERN_MESSAGE = 'password pattern is wrong';

const VALIDATION_PHONE_PATTERN = '\\+375\\(\\d{2}\\)\\d{3}-\\d{2}-\\d{2}';
// const VALIDATION_PASSWORD_PATTERN = '[\\da-z*#&!^]{1,25}';
const VALIDATION_PASSWORD_PATTERN = '[a-zA-Z0-9#$&^*]{6,25}'
const popupMessages = {
    tel: {
        patternMismatch: 'please enter phone number in correct format: +375(**)***-**-**',
    },
    password: {
        patternMismatch: 'Please enter the password in the correct format:' +
                         'valid string from 6 to 25, consisting of characters in the range a-z or A-Z, numbers and symbols: #$&^*',
        tooShort: 'password is short, must be at least 6 characters',
    }
}

// const POPUP_MESSAGES = [PLACEHOLDER_PHONE_MESSAGE, VALIDATION_PHONE_MESSAGE];