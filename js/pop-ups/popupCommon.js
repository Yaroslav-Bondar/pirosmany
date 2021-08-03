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