// show a popup window
body.addEventListener('click', e => {
    const popupBtn = e.target.closest('[data-modal="btn"]');
    if(!popupBtn) return;
    const id = popupBtn.id;
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
            html = POPUP_CHECKIN_HTML;
            break;
    }
    body.insertAdjacentHTML('afterbegin', html);
    body.style.overflow = 'hidden';
});

// close a popup window
body.addEventListener('click', e => {
    const popupCloseBtn = e.target.closest('[data-modal="close"]');
    let popupWindow;
    if(e.target.dataset.modal === 'window') popupWindow = e.target;    
    if(!popupCloseBtn && !popupWindow) return;
    if (!popupWindow) popupWindow = popupCloseBtn.closest('[data-modal="window"]');
    popupWindow.remove();
    body.style.overflow = '';
});