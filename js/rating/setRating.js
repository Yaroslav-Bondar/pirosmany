
// colors stars on click and hover
function setRating() {
    const ratingSet = document.querySelector(`.${SET_RATING}`)
    let index
    let clickIndex
    let doubleClickIndex
    if(ratingSet) {
        for (let i = 0; i < ratingSet.children.length; i++) {
            // click
            ratingSet.children[i].addEventListener('click', ()=> {
                if(i !== clickIndex){
                    clickIndex = i
                    if(clickIndex === (doubleClickIndex - 1) 
                        && ratingSet.children[clickIndex].nextElementSibling.style.color !== STAR_ACTIVE_COLOR) {
                            if(ratingSet.children[clickIndex].style.color === STAR_NO_ACTIVE_COLOR) {
                                ratingSet.children[clickIndex].style.color = STAR_ACTIVE_COLOR
                            }
                            else if(ratingSet.children[clickIndex].style.color === STAR_ACTIVE_COLOR) {
                                ratingSet.children[clickIndex].style.color = STAR_NO_ACTIVE_COLOR
                            }
                            doubleClickIndex--                        
                    }
                    else {
                        // paint the stars from the beginning to the one you clicked
                        // if(!countClick) {
                        for (let i = 0; i <= clickIndex; i++) {
                            ratingSet.children[i].style.color = STAR_ACTIVE_COLOR
                        }
                        // paint everything else after the clicked star
                        for (let i = clickIndex + 1; i < ratingSet.children.length; i++) {
                            ratingSet.children[i].style.color = STAR_NO_ACTIVE_COLOR
                        }
                    }
                }
                else {
                    doubleClickIndex = i
                    if(ratingSet.children[doubleClickIndex].style.color === STAR_NO_ACTIVE_COLOR) {
                        ratingSet.children[doubleClickIndex].style.color = STAR_ACTIVE_COLOR
                    }
                    else if(ratingSet.children[doubleClickIndex].style.color === STAR_ACTIVE_COLOR) {
                        ratingSet.children[doubleClickIndex].style.color = STAR_NO_ACTIVE_COLOR
                    }
                    // when hover
                    else {
                        ratingSet.children[doubleClickIndex].style.color = STAR_ACTIVE_COLOR
                    }
                }
            })
            // hover
            ratingSet.children[i].addEventListener('mouseover', ()=> {
                index = i
                // paint the stars from the beginning to the one you clicked
                for (let i = 0; i <= index; i++) {
                    if(ratingSet.children[i].style.color !== STAR_ACTIVE_COLOR) {
                        ratingSet.children[i].style.color = STAR_HOVER_COLOR
                    }
                }
                // paint everything else after the clicked star
                for (let i = index + 1; i < ratingSet.children.length; i++) {
                    if(ratingSet.children[i].style.color !== STAR_ACTIVE_COLOR)
                        ratingSet.children[i].style.color = STAR_NO_ACTIVE_COLOR
                }
            })
            // // hover

            // mouseout
            ratingSet.children[i].addEventListener('mouseout', ()=> {
                for (let i = 0; i < ratingSet.children.length; i++) {
                    if(ratingSet.children[i].style.color !== STAR_ACTIVE_COLOR) {
                        ratingSet.children[i].style.color = STAR_NO_ACTIVE_COLOR
                    }
                }
            })
            // // mouseout
        }
    }
}
