var modalbtn = document.querySelector('.btns')
var modal = document.querySelector('.modal')
var closebtn = document.querySelector('.closebtn')
var close = document.querySelector('.close')
var overlay = document.querySelector('.overlay')

for (i = 0; i < modalbtn.length; i++) {
    modalbtn[i].addEventListener('click', () => {
        overlay.classList.remove('hidden')
        modal.classList.remove('hidden')
    })
}


// for (a = 0; a < modalbtn.length; a++) {
//     modalbtn[a].addEventListener('click', () => {
//     modal.classList.remove('hidden')
//     overlay.classList.remove('hidden')
//     })
// }

closebtn.addEventListener('click', () =>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})