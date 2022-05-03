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
        case 'reserv-btn-1':
            html = POPUP_RESERV_HTML;        
            break;
        case 'check-in-btn':
        case 'check-in-btn-1':
            html = POPUP_CHECKIN_HTML;
            break;
        case 'password-recovery-btn':
            html = POPUP_PASSWORD_RECOVERY_HTML;
            break;
        case 'confirm-phone':
            html = POPUP_CONFIRM_PHONE_HTML;
            break;        
    }
    body.insertAdjacentHTML('afterbegin', html);
    // body.insertAdjacentHTML('afterbegin', popupAboutProdReviewHtml);

    // togglePlaceholderMessage('popup-form', '.form-input__item[type="tel"]', FormPlaceholderMessages.tel); // defined in common.js
    setFormElementValidMessageHadler('signin', setFormElementValidMessage, signinValidationMessages);
    setFormElementValidMessageHadler('checkin', setFormElementValidMessage, checkinValidationMessages);
    setFormElementValidMessageHadler('password-recovery', setFormElementValidMessage, passwordRecoveryValidationMessages);
    setFormElementValidMessageHadler('reserv', setFormElementValidMessage, reservValidationMessages);
    toglleStateInputElement('reserv-input-name', 'reserv__placeholder', 'reserv__placeholder_active');
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
    // logic for confirm-phone popup
    if(html === POPUP_CONFIRM_PHONE_HTML) {
        const confirmBtn = document.querySelector('.confirm-phone__repeat-btn');
        const confirmMin = document.querySelector('.confirm-phone__minutes');
        const confirmSec = document.querySelector('.confirm-phone__seconds');
        const confirmSubmit = document.querySelector('.confirm-phone__submit');
        const confirmInputs = document.getElementsByClassName('confirm-phone__input');
        confirmBtn.addEventListener('click', (e)=> {
            if(e.target.classList.contains('btn_color_grey')) return;
            replaceElementState(confirmBtn, 'btn_color_grey', 'btn_color_green');
            replaceElementState(confirmSubmit, 'btn_bg_grey', 'btn_bg_green');
            for(const input of confirmInputs) {
                input.classList.remove('form-input_hover');
                input.disabled = !input.disabled;
                input.value = '';
            }
            const minutesDisplay = 1; // total minutes for the timer
            const secondsDisplay = '00'; 
            const secondsInit = 60;

            let minutesTmp = minutesDisplay;
            let secondsTmp = secondsInit;
            // init display    
            confirmMin.textContent = minutesDisplay;
            confirmSec.textContent = secondsDisplay;

            const timerId = setInterval(()=>{
                // count time
                secondsTmp--;
                if(secondsTmp === secondsInit - 1) {
                    minutesTmp = --minutesTmp;
                }
                // stop timer
                if(minutesTmp === 0 && secondsTmp === 0) {
                    clearInterval(timerId);
                    replaceElementState(confirmBtn, 'btn_color_green', 'btn_color_grey');
                    replaceElementState(confirmSubmit, 'btn_bg_green', 'btn_bg_grey');
                    for(const input of confirmInputs) {
                        input.classList.add('form-input_hover');
                        input.disabled = !input.disabled;
                    }
                }
                // display time
                confirmMin.textContent = minutesTmp;
                if(secondsTmp < 10) confirmSec.textContent = '0' + secondsTmp;
                else confirmSec.textContent = secondsTmp;
                // reset seconds
                if(secondsTmp === 0) {
                    secondsTmp = secondsInit;
                }
            }, 1000);
        });
    }
    body.style.overflow = 'hidden';
});
