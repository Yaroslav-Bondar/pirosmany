// drop-down menu
// logics for menu enable/disable dropdown menu 
// for work need 4 elements with next data attributes: 
// 1 - data-dropdown='node' - the menu under which the drop-down menu drops out
// 2 - data-dropdown='link', - link (tag <a>) when clicked on which the drop-down menu is shown or hidden
// 3 - data-dropdown='btn'(if exists) - button (tag <button>) when clicked on which the drop-down menu is shown or hidden
// 4 - data-dropdown='menu' - drop-down menu
// they need to be placed in the appropriate places in the html
body.addEventListener('click', (e)=> {
    const targetElement = e.target;
    const dropDownLink = targetElement.closest('a[data-dropdown=link]'); 
    const dropDownBtn = targetElement.closest('button[data-dropdown=btn]');           
    
    if(!dropDownLink && !dropDownBtn) return
    
    const targetBtn = dropDownLink ? dropDownLink : dropDownBtn;
    if(targetBtn.parentElement.dataset.dropdown == 'node') {
        const node = targetBtn.parentElement
        // on arrow
        for (const child of node.children) {
            if(child.dataset.dropdown == 'btn')
                child.classList.toggle('mobmenu__btn_active')
        }
        // on drop-down menu
        node.nextElementSibling.classList.toggle('menu__dropdown_active')
    }
});

// // drop-down menu