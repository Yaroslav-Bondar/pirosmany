// object for render popup
class Popup {
    constructor(nameClass, popupHtml, popupId) {
        this.nameClass = nameClass
        this.popupHtml = popupHtml
        this.popupId = popupId    
    }
    render() {
        let popupElement = document.querySelector(`#${this.popupId}`) 
        // if the popup does not exist
        if(!popupElement) {
            popupElement = document.createElement('div')
            popupElement.className = this.nameClass 
            popupElement.innerHTML = this.popupHtml
            body.appendChild(popupElement)
            popupElement.id = this.popupId
            popupElement.style.display = 'flex'
            body.classList.add('body_lock')
        }
        // if the popup exists
        else {
            popupElement.style.display = 'flex'
            body.classList.add('body_lock')
        }
        // to close the popup
        body.addEventListener('click', (e)=> {
            if(!e.target.closest('.popup__close') && !e.target.classList.contains('popup')) return
            popupElement.style.display = 'none'
            body.classList.remove('body_lock')
        })
    }
}
// // object for render popup

// show a popup window
body.addEventListener('click', e => {
    // console.log(e.target);
    const popupBtn = e.target.closest('[data-modal="btn"]');
    if(!popupBtn) return;
    // console.log(target);
    const id = popupBtn.id;
    // console.log(id);
    let html;
    switch(id) {
        case 'sign-in-btn': 
            html = POPUP_SIGNIN_HTML;
            break;
        case 'subscribe-btn':
        case 'subscribe-btn-1':
        case 'subscribe-btn-2':
            html = POPUP_SUBSCRIBE_HTML;
            brake;
        case :
            html = POPUP_RESERV_HTML;        
            break;
    }
    // console.log(POPUP_SIGNIN_HTML);
    console.log(html);
    body.insertAdjacentHTML('afterbegin', html);
});

// close a popup window
body.addEventListener('click', e => {
    const popupCloseBtn = e.target.closest('[data-modal="close"]');
    if(!popupCloseBtn) return;
    const popupWindow = popupCloseBtn.closest('[data-modal="window"]');
    popupWindow.remove();
});