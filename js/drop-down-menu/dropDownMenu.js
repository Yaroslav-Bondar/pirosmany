// drop-down menu
// logics for menu enable/disable dropdown menu 
// for work need 4 elements with next data attributes: 
// 1 - data-dropdomn='node' - the menu under which the drop-down menu drops out
// 2 - data-dropdomn='link', - link (tag <a>) when clicked on which the drop-down menu is shown or hidden
// 3 - data-dropdomn='btn'(if exists) - button (tag <button>) when clicked on which the drop-down menu is shown or hidden
// 4 - data-dropdomn='menu' - drop-down menu
// they need to be placed in the appropriate places in the html
body.addEventListener('click', (e)=> {
    let tar = e.target;
    if(!tar.closest('button') && !tar.closest('a')) {
        return
    }
    else if(tar.closest('button')) {
        tar = tar.closest('button')
    }
    else if(tar.closest('a')) {
        tar = tar.closest('a')
    }
    // show / hide drop-down menu
    if(tar.dataset.dropdown == 'link' || tar.dataset.dropdown == 'btn') {
        if(tar.parentElement.dataset.dropdown == 'node') {
            let node = tar.parentElement
            // on arrow
            for (const child of node.children) {
                if(child.dataset.dropdown == 'btn')
                    child.classList.toggle('mobmenu__btn_active')
            }
            // on drop-down menu
            node.nextElementSibling.classList.toggle('menu__dropdown_active')
        }
    }
})

// // drop-down menu