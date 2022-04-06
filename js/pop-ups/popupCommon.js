// show a popup window
body.addEventListener('click', event => {
    const popupCloseBtn = event.target.closest('[data-modal-open="true"]');
    if(!popupCloseBtn) return;
    const id = popupCloseBtn.id;
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
    togglePlaceholderMessage('popup-form', '.form-input__item[type="tel"]' ,PASSWORD_RECOVERY_PLACEHOLDER_PHONE_MESSAGE);
    setCustomValidationMessage('.form-input__item[type="tel"]' ,PASSWORD_RECOVERY_VALIDATION_PHONE_MESSAGE);
    body.style.overflow = 'hidden';
});
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