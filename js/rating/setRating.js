// const ratingSet = document.querySelector(`.${SET_RATING}`)

function setRating() {
    console.log('function setRating is started')
    // const ratingSet = document.querySelector(`.${SET_RATING}`)
    console.log(ratingSet)
    let index
    let clickIndex
    let doubleClickIndex
    if(ratingSet) {
        for (let i = 0; i < ratingSet.children.length; i++) {
            // click
            ratingSet.children[i].addEventListener('click', ()=> {
                if(i !== clickIndex) {
                    clickIndex = i
                    if(clickIndex === (doubleClickIndex - 1) 
                        && ratingSet.children[clickIndex].nextElementSibling.style.color !== 'rgb(0, 172, 78)') {
                            if(ratingSet.children[clickIndex].style.color === 'rgb(204, 204, 204)') {
                                ratingSet.children[clickIndex].style.color = 'rgb(0, 172, 78)'
                            }
                            else if(ratingSet.children[clickIndex].style.color === 'rgb(0, 172, 78)') {
                                ratingSet.children[clickIndex].style.color = 'rgb(204, 204, 204)'
                            }
                            doubleClickIndex--                        
                    }
                    else {
                        // paint the stars from the beginning to the one you clicked
                        // if(!countClick) {
                        for (let i = 0; i <= clickIndex; i++) {
                            ratingSet.children[i].style.color = 'rgb(0, 172, 78)'
                        }
                        // paint everything else after the clicked star
                        for (let i = clickIndex + 1; i < ratingSet.children.length; i++) {
                            ratingSet.children[i].style.color = '#ccc'
                        }
                    }
                    console.log(clickIndex)
                }
                else {
                    doubleClickIndex = i
                    console.log('doubleClickIndex', doubleClickIndex)
                    // '#ccc'
                    if(ratingSet.children[doubleClickIndex].style.color === 'rgb(204, 204, 204)') {
                        ratingSet.children[doubleClickIndex].style.color = 'rgb(0, 172, 78)'
                    }
                    else if(ratingSet.children[doubleClickIndex].style.color === 'rgb(0, 172, 78)') {
                        ratingSet.children[doubleClickIndex].style.color = 'rgb(204, 204, 204)'
                    }
                    
                }
            })
            ratingSet.children[i].addEventListener('mouseover', ()=> {
                index = i
                // paint the stars from the beginning to the one you clicked
                for (let i = 0; i <= index; i++) {
                    if(ratingSet.children[i].style.color !== 'rgb(0, 172, 78)') {
                        ratingSet.children[i].style.color = '#00d64e'
                    }
                }
                // paint everything else after the clicked star
                for (let i = index + 1; i < ratingSet.children.length; i++) {
                    if(ratingSet.children[i].style.color !== 'rgb(0, 172, 78)')
                        ratingSet.children[i].style.color = '#ccc'
                }
            })
            // // hover

            // mouseout
            ratingSet.children[i].addEventListener('mouseout', ()=> {
                for (let i = 0; i < ratingSet.children.length; i++) {
                    if(ratingSet.children[i].style.color !== 'rgb(0, 172, 78)') {
                        ratingSet.children[i].style.color = '#ccc'
                    }
                }
            })
            // // mouseout
        }
    }
}
