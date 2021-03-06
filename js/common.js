let body = document.querySelector('body')
// let  currentProduct = {id:'', amount: 0}
// let navigation = $('.navigation')
// let navigation = document.querySelector('.navigation')
// let header = document.querySelector('.header')
// let headerBurger = document.querySelector('.header__burger')
// let mobmenu = document.querySelector('.mobmenu')
// let mobmenuBurger = document.querySelector('.mobmenu__burger')
// let mobmenuOverlay = document.querySelector('.mobmenu__overlay')
// let mobmenuNav = document.querySelector('.mobmenu__nav')
let widthHideNav = 900
// toggling tabs
// used in cabinet.js, cardTab.js, regis.js for tab switching 
let tabBtns = document.querySelector('.tab__btns')
let tabContent = document.querySelectorAll('.tab__content')
// // tabs
function getMaxHeight(elements) {
    let heights = new Array()
    elements.forEach(item => heights.push(item.offsetHeight))
    return Math.max(...heights)
}
/**
 * Toggling the state of elements by settings the appropriate css class
 * @param {string} elementClassName - The css class name of the element being toggled
 * @param {string} stateClassName - The state css class name for the element
 * @param {object} uncheckedElement - Element to be checked for compliance to switch state 
 * @returns {undefined} - If not fit for state transition
 * @returns {object} - Element suitable for state transition
 */
function toggleElementsState(elementClassName, stateClassName, uncheckedElement) {
    const targetElement = uncheckedElement.closest(`.${elementClassName}`);
    if(!targetElement) return;
    // if not need to switch state
    if(targetElement.classList.contains(`${stateClassName}`)) return;
    const elements = document.querySelectorAll(`.${elementClassName}`);
    for (const element of elements) {
        if(element.classList.contains(`${stateClassName}`)) 
            element.classList.remove(`${stateClassName}`)
    }
    targetElement.classList.add(`${stateClassName}`);
    return targetElement;
}
function toggleElementsDoubleState(elementClassName, stateClassName, removeClassName, uncheckedElement) {
    const targetElement = uncheckedElement.closest(`.${elementClassName}`);
    if(!targetElement) return;
    // if not need to switch state
    if(targetElement.classList.contains(`${stateClassName}`)) return;
    const elements = document.querySelectorAll(`.${elementClassName}`);
    for (const element of elements) {
        if(element.classList.contains(`${stateClassName}`)) {
            element.classList.remove(`${stateClassName}`)
            element.classList.add(`${removeClassName}`)
        } 
    }
    targetElement.classList.add(`${stateClassName}`);
    targetElement.classList.remove(`${removeClassName}`);
    return targetElement;
}
function replaceElementState(targetElement, addClassName, removeClassName) {
    targetElement.classList.remove(`${removeClassName}`);
    targetElement.classList.add(`${addClassName}`);
}
/**
 * toggle default placeholder message when input element gains/loses focus
 * @param {string} parentClassName - css class name of target element's parent
 * @param {string} targetElementSelector - css selector of the target element
 * @param {string} message - message to toggle 
 * @returns {undefined} 
 */
function togglePlaceholderMessage(parentClassName, targetElementSelector, message) {
    const parentElement = document.querySelector(`.${parentClassName}`);
    if(!parentElement) return;
    let defaultPlaceholderMessage; 
    parentElement.addEventListener('focusin', event => {
        const targetElement = event.target.closest(`${targetElementSelector}`); 
        if(!targetElement) return;
        defaultPlaceholderMessage = targetElement.placeholder;
        targetElement.placeholder = message;
    });
    parentElement.addEventListener('focusout', event => {
        const targetElement = event.target.closest(`${targetElementSelector}`); 
        if(!targetElement) return;
        targetElement.placeholder = defaultPlaceholderMessage;
    });
}
/**
 * Setting a custom validation message for a form element accessed by key.
 * Depending on the validation type, sets a custom validation message for 
 * the form element
 * @param {object} targetElement - element to change the validation message
 * @param {object} messages - custom validation messages available by key
 * @param {string} key - key to identify custom validation message 
 * @returns {undefined}
 */ 
function setFormElementValidMessage(targetElement, messages, key, name) {
    targetElement.addEventListener('input', () => {
        if(targetElement.validity.patternMismatch) {
            targetElement.setCustomValidity(messages[key][name].patternMismatch);
        } else if (targetElement.validity.tooShort) {
            targetElement.setCustomValidity(messages[key][name].tooShort);
        } else if (targetElement.validity.tooLong) {
            targetElement.setCustomValidity(messages[key][name].tooLong);
        } else {
            targetElement.setCustomValidity('');
        } 
    });
}
/**
 * Sets a handler to set a custom validation message 
 * for the form element depending on the type
 * @param {string} formName - form name
 * @param {function} handler - handler for setting the custom  validation message  
 * @param {object} messages - custom validation messages object. 
 *                            contains custom validation messages 
 *                            based on element type and validation type. 
 * @returns {undefined}
 */
function setFormElementValidMessageHadler(formName, handler, messages) {
    const form = document.forms[formName];
    if(!form) {
        console.log('Wrong form name !!!');
        return false;
    }
    const formElements = form.elements;
    for (const element of formElements) {
        if(element.type == 'tel') {
            handler(element, messages, element.type, element.name);
        }
        if(element.type == 'password') {
            handler(element, messages, element.type, element.name);
        }
        if(element.type == 'text') {
            handler(element, messages, element.type, element.name);
        }
    }
}
function isFormValid(form) {
    for(const element of form) {
            if(!element.validity.valid) {
                return false;
            } 
        }
    return true;
}
function setFormStateHandler(formName, messageElementId, stateClassName, handler) {
    const messageElement = document.getElementById(`${messageElementId}`);
    const form = document.forms[formName];
    if(!form || !messageElement) {
        console.log('Wrong message element id or form name');
        return false;
    }
    for(const element of form) {
        handler(element, form, messageElement, stateClassName);
    }
}
function showValidFormState(checkElement, form, messageElement, stateClassName) {
    checkElement.addEventListener('input', () => {
        if(isFormValid(form)) {
            messageElement.classList.remove(stateClassName);
        }
    });
}
function showInvalidFormState(form, messageElementId, stateClassName) {
    const messageElement = document.getElementById(`${messageElementId}`);
    if(!isFormValid(form)) {
        messageElement.classList.add(stateClassName);
    }
}
/**
 * toggles the state of the specified element based on the input element's 
 * value (input.value) when the input element is focused or unfocused
 * @param {string} inputId - id the input element
 * @param {string} toggleElementClassName - the class name of the element whose state is toggled
 * @param {string} toggleClassName - toggle state class name
 * @returns {undefined}
 */
function toglleStateInputElement(inputId, toggleElementClassName, toggleClassName) {
    const input = document.querySelector(`#${inputId}`);
    const toggleElement = document.querySelector(`.${toggleElementClassName}`);
    if(!input || !toggleElement) {
        console.log(`Wrong class name or id !!!`);
        return false;
    } 
    input.addEventListener('focus', (event)=> {
        if(!event.target.value)
            toggleElement.classList.toggle(`${toggleClassName}`);
    });
    input.addEventListener('blur', event => {
        if(!event.target.value)
            toggleElement.classList.toggle(`${toggleClassName}`);
    });
}

// show/hide element using for order tab, pwa
function createElem(elem, classes, html, id) {
    let element = document.createElement(elem)
    try {
        if(id === undefined) {
            throw new Error('For the application to work correctly, enter the order element id to function createElem in common.js file')
        }
        if(id !== undefined)
            element.setAttribute('id', id)
    }
    catch(error) {
        alert(error.message)
        while(id === undefined) {
            id = prompt('Input the element id')
        }
        element.setAttribute('id', id)
    }
    if(classes !== undefined)
        element.setAttribute('class', classes)
    element.innerHTML = html
    return element
}

function showElem(elem, targetInsert) {
    let element
    // for check if exists element in DOM
    element = document.getElementById(elem.getAttribute('id'))
        // check if exists element in DOM
    if(!element) {
        targetInsert.after(elem) 
    }
    else {
        elem.style.display = 'block'
    }
}
// show/hide element using for order tab, pwa   