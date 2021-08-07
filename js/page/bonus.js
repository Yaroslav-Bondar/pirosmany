let bonusRange = document.querySelector('.bonus__range')
let bonusRangeMax = document.querySelector('.bonus__range-max')
let bonusRangeMin = document.querySelector('.bonus__range-min')
let bonusRangeFill = document.querySelector('.bonus__range-fill')
let bonusRangeCount = document.querySelector('.bonus__range-count')
 
let bonusRangeWidth = getComputedStyle(bonusRange).getPropertyValue("width");
const rangeWidth = +bonusRangeWidth.substring(0, bonusRangeWidth.length - 2);
bonusRangeCount.innerHTML = bonusRange.value
bonusRangeFill.style.width = bonusRange.value / bonusRange.max * 100 + '%'
bonusRangeCount.style.left = bonusRange.value / bonusRange.max * 100 + '%'
bonusRangeCount.style.transform = 'translateX(-' + bonusRange.value / bonusRange.max * 100 + '%)'
bonusRange.addEventListener('input', (e)=> {
    const value = +e.target.value;
    bonusRangeCount.innerHTML = value
    bonusRangeFill.style.width = value / e.target.max * 100 + '%'
    bonusRangeCount.style.left = value / e.target.max * 100 + '%'
    bonusRangeCount.style.transform = 'translateX(-' + value / e.target.max * 100 + '%)'  
})