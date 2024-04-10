'use strict'



const buttonToggle = document.querySelector('.Button')
console.log(buttonToggle)

buttonToggle.addEventListener(`click` , ()=>{
    buttonToggle.classList.toggle('isActive')

})