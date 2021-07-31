// close for every pop-up window
for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener('click', ()=> {
        popup[i].classList.remove('popup_active')
        body.classList.remove('body_lock')  
    }) 
}
// close after click for window
for (const el of popup) {                  
    el.addEventListener('click', (e)=> {
        if(e.target == el)
            el.classList.remove('popup_active')
            body.classList.remove('body_lock')    
    })
}
// // close for every pop-up window

// object for render popup
function Popup (btn, nameClass, popupHtml) {
    this.btn = btn
    this.nameClass = nameClass
    this.popupHtml = popupHtml
}
Popup.prototype.render = function() {
    for (const el of this.btn) {
        el.addEventListener('click', ()=> {
            let popupSigninElement = document.createElement('div')
            popupSigninElement.className = this.nameClass 
            popupSigninElement.innerHTML = this.popupHtml
            body.appendChild(popupSigninElement)
            popupSigninElement.classList.add('popup_active')
            body.classList.add('body_lock')
        })    
    }
}
// // object for render popup