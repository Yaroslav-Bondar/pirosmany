let bonusRange = document.querySelector('.bonus__range')
// let bonusLabel = document.querySelector('.bonus__label')
let bonusRangeMax = document.querySelector('.bonus__range-max')
let bonusRangeMin = document.querySelector('.bonus__range-min')
let bonusRangeFill = document.querySelector('.bonus__range-fill')
let bonusRangeCount = document.querySelector('.bonus__range-count')
 
let bonusRangeWidth = getComputedStyle(bonusRange).getPropertyValue("width");
// let bonusLabelWidth = getComputedStyle(bonusLabel).getPropertyValue("width");
const rangeWidth = +bonusRangeWidth.substring(0, bonusRangeWidth.length - 2);
// const labelWidth = +bonusLabelWidth.substring(0, bonusLabelWidth.length - 2);
// bonusLabel.style.left = (rangeWidth / 2) - (labelWidth / 2) + 'px'
// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
bonusRangeCount.innerHTML = bonusRange.value
bonusRangeFill.style.width = bonusRange.value / bonusRange.max * 100 + '%'
bonusRangeCount.style.left = bonusRange.value / bonusRange.max * 100 + '%'
bonusRangeCount.style.transform = 'translateX(-' + bonusRange.value / bonusRange.max * 100 + '%)'
// console.log(bonusRange.min)
// bonusRangeMin.innerHTML = bonusRange.min
// bonusRangeMax.innerHTML = bonusRange.value
bonusRange.addEventListener('input', (e)=> {
    const value = +e.target.value;
    // console.log(e.target)
    // console.log('value ', e.target.value)
    // const current = e.target.nextElementSibling;
    // const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
    // console.log('rangeWidth ', rangeWidth)
    // const labelWidth = getComputedStyle(label).getPropertyValue("width");
    // remove px
    // const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
    // const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);
    // const max = +e.target.max;
    // const min = +e.target.min;
    // const left = 
    //     value * (numWidth / max) -
    //     // numLabelWidth / 2 +
    //     numLabelWidth / 2 +
    //     // scale(value, min, max, 10, -10);
    //     scale(value, min, max, 10, -10);
    // label.style.left = `${left}px`;
    // current.innerHTML = value;
    bonusRangeCount.innerHTML = value
    bonusRangeFill.style.width = value / e.target.max * 100 + '%'
    bonusRangeCount.style.left = value / e.target.max * 100 + '%'
    bonusRangeCount.style.transform = 'translateX(-' + value / e.target.max * 100 + '%)'  
    })