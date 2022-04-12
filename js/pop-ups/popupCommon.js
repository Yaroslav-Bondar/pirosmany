// close a popup window
body.addEventListener('click', event => {
    const popupCloseBtn = event.target.closest('[data-modal-close="true"]');
    let popupWindow;
    if(event.target.dataset.modalWindow === 'true') popupWindow = event.target;    
    if(!popupCloseBtn && !popupWindow) return;
    if(popupCloseBtn) {
        // if the button does not open another popup
        if(popupCloseBtn.dataset.modalOpen !== 'true') {
            body.style.overflow = '';
        }
        const popupWindow = popupCloseBtn.closest('[data-modal-window="true"]');
        popupWindow.remove();
    }
    if(popupWindow) {
        body.style.overflow = '';
        popupWindow.remove();
    } 
});
// show a popup window
body.addEventListener('click', event => {
    const popupOpenBtn = event.target.closest('[data-modal-open="true"]');
    if(!popupOpenBtn) return;
    const id = popupOpenBtn.id;
    let html;
    switch(id) {
        case 'sign-in-btn':
        case 'sign-in-btn-2':     
            html = POPUP_SIGNIN_HTML;
            break;
        case 'subscribe-btn':
        case 'subscribe-btn-1':
        case 'subscribe-btn-2':
            html = POPUP_SUBSCRIBE_HTML;
            break;
        case 'reserv-btn':
            html = POPUP_RESERV_HTML;        
            break;
        case 'check-in-btn':
        case 'check-in-btn-1':
            html = POPUP_CHECKIN_HTML;
            break;
        case 'password-recovery-btn':
            html = POPUP_PASSWORD_RECOVERY_HTML;    
    }
    body.insertAdjacentHTML('afterbegin', html);
    togglePlaceholderMessage('popup-form', '.form-input__item[type="tel"]', PLACEHOLDER_PHONE_MESSAGE); // defined in common.js
    setFormElementValidMessageHadler('signin', setFormElementValidMessage, popupMessages);
    // logic for signin form
    const signinFormButton = document.querySelector('.signin__enter-btn');
    if(signinFormButton) {
        signinFormButton.addEventListener('click', ()=> {
            if(!isFormValid(document.forms.signin)) {
                showInvalidFormState(document.forms.signin, 'signin-wrong-message', 'signin__wrong-message_hidden');
                setFormStateHandler('signin','signin-wrong-message', 'signin__wrong-message_hidden', showValidFormState);
            }
        });
    }
    body.style.overflow = 'hidden';
});
