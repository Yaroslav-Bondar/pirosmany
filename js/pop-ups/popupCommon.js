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
    togglePlaceholderMessage('popup-form', '.form-input__item[type="tel"]', FormPlaceholderMessages.tel); // defined in common.js
    setFormElementValidMessageHadler('signin', setFormElementValidMessage, FormValidationMessages);
    setFormElementValidMessageHadler('checkin', setFormElementValidMessage, FormValidationMessages);
    setFormElementValidMessageHadler('password-recovery', setFormElementValidMessage, FormValidationMessages);
    // logic for displaying the valid state of the signin form
    const signinFormButton = document.querySelector('.signin__enter-btn');
    if(signinFormButton) {
        signinFormButton.addEventListener('click', ()=> {
            const form = document.forms.signin;
            if(!isFormValid(form)) {
                showInvalidFormState(form, 'signin-wrong-message', 'signin__wrong-message_hidden');
                setFormStateHandler('signin','signin-wrong-message', 'signin__wrong-message_hidden', showValidFormState);
            }
        });
    }
    body.style.overflow = 'hidden';
});
