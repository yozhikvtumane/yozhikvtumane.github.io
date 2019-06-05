const header = document.querySelector('header')
const copy = document.querySelector('.copy')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 60) {
        header.style.paddingTop = '0.5em'
        header.style.paddingBottom = '0.5em'
    } else {
        header.style.paddingTop = '1.5em'
        header.style.paddingBottom = '1.5em'
    }
})

let y = new Date().getFullYear()
copy.textContent = 'My personal portfolio | ' + y

