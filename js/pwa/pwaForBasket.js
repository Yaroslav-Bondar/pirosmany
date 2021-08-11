let showPwaWidth = 955 // variable $basket-breakpoint-1 from styles/sass/_variable.scss
let basketConteiner = document.querySelector('.basket__conteiner')
let basketPwaElem
if(window.innerWidth <= showPwaWidth) {
    if(!basketPwaElem) {
        basketPwaElem = createElem('div', 'pwa', pwaHtml, 'basket-pwa')
    }
    showElem(basketPwaElem, basketConteiner)
}
else {
    if(basketPwaElem)
        basketPwaElem.style.display = 'none'
}

window.addEventListener ('resize', () => {
    if(window.innerWidth <= showPwaWidth) {
        if(!basketPwaElem) {
            basketPwaElem = createElem('div', 'pwa', pwaHtml, 'basket-pwa')
        }
        showElem(basketPwaElem, basketConteiner)
    }
    else {
        if(basketPwaElem)
            basketPwaElem.style.display = 'none'
    }
})
